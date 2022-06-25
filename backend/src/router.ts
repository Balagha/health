import {Router} from "express";

import pmc from "./controllers/pmc"
import mtr from "./controllers/mtr"
import user from "./controllers/user";
import doctor from "./controllers/doctor";
import patient from "./controllers/patient"
import da from "./controllers/d-availability"
import ds from "./controllers/d-specialization"
import prescription from "./controllers/prescription";

const router = Router();

router.use('/da', da);
router.use('/ds', ds);
router.use('/pmc', pmc);
router.use('/mtr', mtr);
router.use('/user', user);
router.use('/doctor', doctor);
router.use('/patient', patient);
router.use('/prescription', prescription);

export default router;