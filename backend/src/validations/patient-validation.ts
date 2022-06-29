import {check, param} from "express-validator";
import {User} from "../entity/user";
import {Patient} from "../entity/patient";

const createPatientValidation = [
    check([
        'user.first_name',
        'user.last_name',
        'user.blood_group',
        'user.gender',
        'user.date_of_birth',
        'user.address',
        'user.official_id.type',
        'user.official_id.number',
        'patient',
        'medicalTestReport',
        'patientMedicalCondition'
    ]).notEmpty(),
    check('user.email').normalizeEmail().isEmail().custom(value => {
        return User.findOne({ where: {email: value} })
            .then(user => {
                if (user) {
                    return Promise.reject('E-mail already in use');
                }
            })
    }),
    check('user.contact_number').notEmpty().isLength({ min: 11 }).custom(value => {
        return User.findOne({ where: {contact_number: value} })
            .then(user => {
                if (user) {
                    return Promise.reject('contact number already in use');
                }
            })
    }),
    check('user.emergency_contact_number').notEmpty().isLength({ min: 11 }).custom(value => {
        return User.findOne({ where: {emergency_contact_number: value} })
            .then(user => {
                if (user) {
                    return Promise.reject('emergency contact number already in use');
                }
            })
    })
];

const getPatientsValidation = [];

const getPatientByIdValidation = [
    param('id').exists().toInt().custom(patientId => {
        return Patient.findOne({ where: {id: patientId} })
            .then(id => {
                if (!id) {
                    return Promise.reject('patient id is not found.');
                }
            })
    }),
];

const updatePatientValidation = [
    param('id').exists().toInt().custom(patientId => {
        return Patient.findOne({ where: {id: patientId} })
            .then(id => {
                if (!id) {
                    return Promise.reject('patient id is not found.');
                }
            })
    }),
];

const deletePatientValidation = [
    param('id').exists().toInt().custom(patientId => {
        return Patient.findOne({ where: {id: patientId} })
            .then(id => {
                if (!id) {
                    return Promise.reject('patient id is not found.');
                }
            })
    }),
];

export default {
    createPatientValidation,
    getPatientsValidation,
    getPatientByIdValidation,
    updatePatientValidation,
    deletePatientValidation
};