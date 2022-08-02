import patient from "../controllers/crud/patient-controller";
import validation from "../validations/patient-validation"
import {Router} from "express";
import {validationResult} from "express-validator";

const router = Router();

const validate = status => (req, res, next) => {
    const errors = validationResult(req);
    return errors.isEmpty() ? res.status(status).json({errors: errors.array()}) : next();
}

router.post('/',validation.createPatientValidation , validate(400), patient.addPatient);
router.get('/', patient.getPatients);
router.get('/:id', validation.idValidationList, validate(404), patient.getPatientById);
router.put('/:id',
    validation.idValidationList, validate(404),
    validation.updatePatientValidation , validate(400),
    patient.updatePatient);
router.delete('/:id', validation.idValidationList, validate(404), patient.deletePatient);

export default router;
