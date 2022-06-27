import userRouter from "./user-router";
import {Router} from "express";

const router = Router();

router.use('/user',userRouter);
/*router.use('/patient',patientRouter);
router.use('/doctor',doctorRouter);
router.use('/prescription',prescriptionRouter);*/

export default router;