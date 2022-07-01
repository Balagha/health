import {check, param} from "express-validator";

const createPrescriptionValidation = [
    check([
        'problem_statement',
        'medical_tests',
        'advise',
        'medicine'
    ]).notEmpty()
];

const idValidation = (entity, prefix) => param('id').exists().toInt().custom(id => entity
    .findOne({where: {id}})
    .then(id => id && Promise.reject(`${prefix} id is not found.`)));

const updatePrescriptionValidation = [];

export default {
    createPrescriptionValidation,
    updatePrescriptionValidation,
    idValidation
};