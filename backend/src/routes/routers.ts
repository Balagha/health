import userRouter from "./user-router";
import doctorRouter from "./doctor-router"
import patientRouter from "./patient-router"
import {Router} from "express";

const router = Router();

router.use('/user',userRouter);
router.use('/patient',patientRouter);
router.use('/doctor',doctorRouter);


export default router;