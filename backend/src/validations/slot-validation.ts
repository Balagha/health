import {check, param} from "express-validator";
import {Doctor} from "../entity/doctor";

const property = [
    'start_time',
    'end_time',
];

const doctorValidation = param('doctorId').exists().toInt().custom((doctorId) => Doctor
    .findOne({where: {id:doctorId}})
    .then(doctorobject => !doctorobject && Promise.reject('Doctor not Found')));

const inputValidation = [
    check(property).notEmpty()
];

export default {
    doctorValidation,
    inputValidation
};
