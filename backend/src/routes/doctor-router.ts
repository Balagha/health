import doctor from "../controllers/crud/doctor-controller";
import validation from "../validations/doctor-validation"
import {Router} from "express";
import {validationResult} from "express-validator";

const router = Router();

const validate = status => (req, res, next) => {
    const errors = validationResult(req);
    return errors.isEmpty() ? next() : res.status(status).json({errors: errors.array()});
}

router.post('/', validation.createDoctorValidation, validate(400), doctor.addDoctor);
router.get('/', doctor.getDoctors);
router.get('/:id', validation.idValidation, validate(404), doctor.getDoctorById);
router.put('/:id',
    validation.idValidation, validate(404),
    validation.updateDoctorValidation, validate(400),
    doctor.updateDoctor);
router.delete('/:id', validation.idValidation, validate(404), doctor.deleteDoctor);

export default router;
