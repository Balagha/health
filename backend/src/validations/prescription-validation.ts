import {check, param} from "express-validator";
import {Prescription} from "../entity/prescription";

const createPrescriptionValidation = [
    check([
        'problem_statement',
        'medical_tests',
        'advise',
        'medicine'
    ]).notEmpty()
];

const getPrescriptionsValidation = [];

const getPrescriptionByIdValidation = [
    param('patientId').exists().toInt().custom(patientId => {
        return Prescription.findOne({ where: {patient: patientId} })
            .then(id => {
                if (!id) {
                    return Promise.reject('patient id is not found.');
                }
            })
    }),
    param('doctorId').exists().toInt().custom(patientId => {
        return Prescription.findOne({ where: {doctor: patientId} })
            .then(id => {
                if (!id) {
                    return Promise.reject('patient id is not found.');
                }
            })
    }),
];

const updatePrescriptionValidation = [
    param('id').exists().toInt().custom(prescriptionId => {
        return Prescription.findOne({ where: {id: prescriptionId} })
            .then(id => {
                if (!id) {
                    return Promise.reject('patient id is not found.');
                }
            })
    }),
];

const deletePrescriptionValidation = [
    param('id').exists().toInt().custom(prescriptionId => {
        return Prescription.findOne({ where: {id: prescriptionId} })
            .then(id => {
                if (!id) {
                    return Promise.reject('patient id is not found.');
                }
            })
    }),
];

export default {
    createPrescriptionValidation,
    getPrescriptionsValidation,
    getPrescriptionByIdValidation,
    updatePrescriptionValidation,
    deletePrescriptionValidation
};