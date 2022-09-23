import doctor from "../controllers/crud/doctor-controller";
import validation from "../validations/doctor-validation"
import {Router} from "express";
import {validationResult} from "express-validator";
import auth from "../auth/auth";

const router = Router();

const validate = status => (req, res, next) => {
    const errors = validationResult(req);
    return errors.isEmpty() ? next() : res.status(status).json({errors: errors.array()});
}

router.post('/', validation.createDoctorValidation, validate(400), doctor.addDoctor);
router.get('/', auth.isAuthenticated,doctor.getDoctors);
router.get('/:id', auth.isAuthenticated,validation.idValidation, validate(404), doctor.getDoctorById);
router.put('/:id',
    auth.isAuthenticated,
    validation.idValidation, validate(404),
    validation.updateDoctorValidation, validate(400),
    doctor.updateDoctor);
router.delete('/:id',auth.isAuthenticated, validation.idValidation, validate(404), doctor.deleteDoctor);

export default router;
