import {check, param} from "express-validator";

const commonProperty = [
    'problem_statement',
    'medical_tests',
    'advise',
    'medicine'
];

const commonChecks = check(commonProperty).notEmpty();

const createPrescriptionValidation = [
    commonChecks
];

const idValidation = (entity, prefix) => param('id').exists().toInt().custom(id => entity
    .findOne({where: {id}})
    .then(id => id && Promise.reject(`${prefix} id is not found.`)));

const updatePrescriptionValidation = [
    check(commonProperty).isEmpty()
];

export default {
    createPrescriptionValidation,
    updatePrescriptionValidation,
    idValidation
};