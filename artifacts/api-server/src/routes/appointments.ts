import { Router, type IRouter } from "express";
import { db, appointmentsTable } from "@workspace/db";
import {
  CreateAppointmentBody,
  CreateAppointmentResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/appointments", async (req, res): Promise<void> => {
  const parsed = CreateAppointmentBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.message }, "Invalid appointment body");
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { preferredDate } = parsed.data;
  const now = new Date();
  const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(
    now.getDate(),
  ).padStart(2, "0")}`;
  if (preferredDate < todayStr) {
    res.status(400).json({ error: "Preferred date cannot be in the past" });
    return;
  }

  const [appointment] = await db
    .insert(appointmentsTable)
    .values(parsed.data)
    .returning();

  res.status(201).json(
    CreateAppointmentResponse.parse({
      ...appointment,
      createdAt: appointment.createdAt.toISOString(),
    }),
  );
});

export default router;
