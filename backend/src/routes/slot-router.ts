import {Router} from "express";
import {validationResult} from "express-validator";
import validation from "../validations/slot-validation";
import slot from "../controllers/crud/slot-controller";
const router = Router();
const {createSlot, getSlotByDoctorId} = slot;

const validate = status => (req, res, next) => {
    const errors = validationResult(req);
    return errors.isEmpty() ? next() : res.status(status    ).json({errors: errors.array()});
}

router.post('/:doctorId',
    validation.inputValidation,
    validate(400),
    validation.doctorValidation,
    validate(400),
    createSlot);

router.get('/:doctorId',
    validation.doctorValidation,
    validate(404),
    getSlotByDoctorId);

export default router;