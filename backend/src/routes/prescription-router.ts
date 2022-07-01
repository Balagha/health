import prescription from "../controllers/crud/prescription-controller";
import validation from "../validations/prescription-validation"
import {Router} from "express";
import {Prescription} from "../entity/prescription";
import { validationResult} from "express-validator";
import {Patient} from "../entity/patient";
import {Doctor} from "../entity/doctor";

const validate = status => (req, res, next) => {
    const errors = validationResult(req);
    return errors.isEmpty() ? next() : res.status(status).json({errors: errors.array()});
}

const router = Router();

router.post('/:patientId/:doctorId',
    validation.idValidation(Patient, 'Patient'),
    validate(404),
    validation.idValidation(Doctor, 'Doctor'),
    validate(404),
    validation.createPrescriptionValidation,
    validate(400),
    prescription.createPrescription);

router.get('/', prescription.getPrescriptions);

router.get('/:id',
    validation.idValidation(Prescription, 'Prescription'),
    validate(404),
    prescription.getPrescriptionById);

router.put('/:id',
    validation.idValidation(Prescription, 'Prescription'),
    validate(404),
    validation.updatePrescriptionValidation,
    validate(400),
    prescription.updatePrescription);

router.delete('/:id',
    validation.idValidation(Prescription, 'Prescription'),
    validate(404),
    prescription.deletePrescription);

export default router;
