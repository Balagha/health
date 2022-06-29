import prescription from "../controllers/crud/prescription-controller";
import validation from "../validations/prescription-validation"
import {Router} from "express";

const router = Router();

router.post('/:patientId/:doctorId',validation.createPrescriptionValidation , prescription.createPrescription);

router.get('/', validation.getPrescriptionsValidation, prescription.getPrescriptions);

router.get('/:id', validation.getPrescriptionByIdValidation, prescription.getPrescriptionById);

router.put('/:id',validation.updatePrescriptionValidation , prescription.updatePrescription);

router.delete('/:id', validation.deletePrescriptionValidation, prescription.deletePrescription);

export default router;
