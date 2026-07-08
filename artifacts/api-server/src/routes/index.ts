import { Router, type IRouter } from "express";
import healthRouter from "./health";
import appointmentsRouter from "./appointments";
import contactMessagesRouter from "./contact-messages";

const router: IRouter = Router();

router.use(healthRouter);
router.use(appointmentsRouter);
router.use(contactMessagesRouter);

export default router;
