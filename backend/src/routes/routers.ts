import prescriptionRouter from "./prescription-router";
import doctorRouter from "./doctor-router"
import patientRouter from "./patient-router"
import {Router} from "express";

const router = Router();

router.use('/patient',patientRouter);
router.use('/doctor',doctorRouter);
router.use('/prescription',prescriptionRouter);

export default router;