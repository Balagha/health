import {Router} from "express";
import {validationResult} from "express-validator";
import validation from "../validations/appointment-validation";
import appointment from "../controllers/crud/appointment-controller";
import auth from "../auth/auth";
import doctor from "../controllers/crud/doctor-controller";

const {createAppointment,getAppointment} = appointment;

const router = Router();

const validate = status => (req, res, next) => {
    const errors = validationResult(req);
    return errors.isEmpty() ? next() : res.status(status    ).json({errors: errors.array()});
}


router.post('/:doctorId/:slotId' ,
    auth.isAuthenticated,validate(403),
    validation.isValidInput,validate(404),
    validation.isValidSlot,validate(404),
    validation.slotAvailability,validate(404),
    createAppointment);

router.get('/' ,auth.isAuthenticated,getAppointment);

export default router;