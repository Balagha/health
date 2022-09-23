import prescriptionRouter from "./prescription-router";
import doctorRouter from "./doctor-router"
import patientRouter from "./patient-router"
import appointmentRouter from "./appointment-router"
import slotRouter from "./slot-router";
import loginRouter from "./login-router";
import {Router} from "express";
import auth from "../auth/auth";
const router = Router();

router.use('/patient',patientRouter);
router.use('/doctor',doctorRouter);
router.use('/prescription',prescriptionRouter);
router.use('/appointment',appointmentRouter)
router.use('/slot',slotRouter)
router.use('/login',loginRouter);
router.use("/logout", auth.isAuthenticated, (req, res) => {
    return res
        .clearCookie("access_token")
        .status(200)
        .json({ message: "Successfully logged out 😏 " });
});

export default router;