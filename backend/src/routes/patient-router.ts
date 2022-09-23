import patient from "../controllers/crud/patient-controller";
import validation from "../validations/patient-validation"
import {Router} from "express";
import {validationResult} from "express-validator";
import auth from "../auth/auth"

const router = Router();

const validate = status => (req, res, next) => {
    const errors = validationResult(req);
    return errors.isEmpty() ? next() : res.status(status).json({errors: errors.array()});
}

router.post('/',validation.createPatientValidation , validate(400), patient.addPatient);
router.get('/', auth.isAuthenticated, validate(400),patient.getPatients);
router.get('/:id', auth.isAuthenticated,validation.idValidation, validate(404), patient.getPatientById);
router.put('/:id',
    auth.isAuthenticated,
    validation.idValidation, validate(404),
    validation.updatePatientValidation , validate(400),
    patient.updatePatient);
router.delete('/:id',
    auth.isAuthenticated,
    validation.idValidation, validate(404), patient.deletePatient);

export default router;
