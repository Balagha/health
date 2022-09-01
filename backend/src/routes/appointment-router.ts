import {Router} from "express";
import {validationResult} from "express-validator";
import validation from "../validations/appointment-validation";
import appointment from "../controllers/crud/appointment-controller";

const {createAppointment} = appointment;

const router = Router();

const validate = status => (req, res, next) => {
    const errors = validationResult(req);
    return errors.isEmpty() ? next() : res.status(status    ).json({errors: errors.array()});
}


router.post('/:patientId/:doctorId/:slotId' ,
    validation.isValidInput,validate(404),
    validation.isValidSlot,validate(404),
    validation.slotAvailability,validate(404),
    createAppointment);

export default router;