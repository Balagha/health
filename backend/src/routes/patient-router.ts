import patient from "../controllers/crud/patient-controller";
import validation from "../validations/patient-validation"
import {Router} from "express";

const router = Router();

router.post('/',validation.createPatientValidation , patient.createPatient);

router.get('/', validation.getPatientsValidation, patient.getPatients);

router.get('/:id', validation.getPatientByIdValidation, patient.getPatientById);

router.put('/:id',validation.updatePatientValidation , patient.updatePatient);

router.delete('/:id', validation.deletePatientValidation, patient.deletePatient);

export default router;
