import { Router, type IRouter } from "express";
import { db, contactMessagesTable } from "@workspace/db";
import {
  CreateContactMessageBody,
  CreateContactMessageResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact-messages", async (req, res): Promise<void> => {
  const parsed = CreateContactMessageBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn(
      { errors: parsed.error.message },
      "Invalid contact message body",
    );
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [contactMessage] = await db
    .insert(contactMessagesTable)
    .values(parsed.data)
    .returning();

  res.status(201).json(
    CreateContactMessageResponse.parse({
      ...contactMessage,
      createdAt: contactMessage.createdAt.toISOString(),
    }),
  );
});

export default router;
