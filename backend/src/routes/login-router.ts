import doctor from "../controllers/crud/doctor-controller";
import auth from "../auth/auth"
import {Router} from "express";
import {validationResult} from "express-validator";

const router = Router();

const validate = status => (req, res, next) => {
    const errors = validationResult(req);
    return errors.isEmpty() ? next() : res.status(status).json({errors: errors.array()});
}

router.post('/patient', auth.generateJwtToken, validate(400));
router.post('/doctor', auth.generateJwtToken, validate(400));
export default router