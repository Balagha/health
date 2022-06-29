import doctor from "../controllers/crud/doctor-controller";
import validation from "../validations/doctor-validation"
import {Router} from "express";

const router = Router();

router.post('/',validation.createDoctorValidation , doctor.createDoctor);

router.get('/', validation.getDoctorsValidation, doctor.getDoctors);

router.get('/:id', validation.getDoctorByIdValidation, doctor.getDoctorById);

router.put('/:id',validation.updateDoctorValidation , doctor.updateDoctor);

router.delete('/:id', validation.deleteDoctorValidation, doctor.deleteDoctor);

export default router;
