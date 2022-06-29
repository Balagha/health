import {check, param} from "express-validator";
import {Doctor} from "../entity/doctor";
import {User} from "../entity/user";

const createDoctorValidation = [
    check([
        'user.first_name',
        'user.last_name',
        'user.blood_group',
        'user.gender',
        'user.date_of_birth',
        'user.address',
        'user.official_id.type',
        'user.official_id.number',
        'doctorSpecialization.title',
        'doctorAvailability.time.available_from',
        'doctorAvailability.time.available_to',
        'doctorAvailability.weekend'
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
    }),
    check('doctor.govt_reg_no').notEmpty().custom(value => {
        return Doctor.findOne({ where: {govt_reg_no: value} })
            .then(docRegNo => {
                if (docRegNo) {
                    return Promise.reject('doctor govt. reg number already in use');
                }
            })
    }),
];

const getDoctorsValidation = [];

const getDoctorByIdValidation = [
    param('id').exists().toInt().custom(doctorId => {
        return Doctor.findOne({ where: {id: doctorId} })
            .then(id => {
                if (!id) {
                    return Promise.reject('Doctor id is not found.');
                }
            })
    }),
];
const updateDoctorValidation = [
    param('id').exists().toInt().custom(doctorId => {
        return Doctor.findOne({ where: {id: doctorId} })
            .then(id => {
                if (!id) {
                    return Promise.reject('Doctor id is not found.');
                }
            })
    }),
];

const deleteDoctorValidation = [
    param('id').exists().toInt().custom(doctorId => {
        return Doctor.findOne({ where: {id: doctorId} })
            .then(id => {
                if (!id) {
                    return Promise.reject('Doctor id is not found.');
                }
            })
    }),
];

export default {
    createDoctorValidation,
    getDoctorsValidation,
    getDoctorByIdValidation,
    updateDoctorValidation,
    deleteDoctorValidation
};