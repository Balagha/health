import {Router} from "express";
import user from "./controllers/user";
import doctor from "./controllers/doctor";

const router = Router();

router.use('/user', user);
router.use('/doctor', doctor);

export default router;