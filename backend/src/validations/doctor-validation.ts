import {check, param} from "express-validator";
import {Doctor} from "../entity/doctor";
import {User} from "../entity/user";

// const reqBody = {
//     first_name: "Asif",
//     last_name: "Joardar",
//     blood_group: "B+",
//     gender: "Male",
//     date_of_birth: "29-08-1994",
//     email: "abc@gmail.com",
//     contact_number: "12345678910",
//     emergency_contact_number: "12345678911",
//     address: "31 Kolabaagan 1st Lane",
//     official_id_type: "PASSPORT",
//     official_id_number: "EH01233456",
//     govt_reg_no: "246810",
//     specialization: "GYNEA",
//     available_from: "01-06-2022",
//     available_to: "01-06-2023",
//     weekend: ["FRIDAY", "SATURDAY"]
// }

const checkUnique = (entity, field, prefix) => value => entity
        .findOne({where: {[field]: value}})
        .then(obj => obj && Promise.reject(`${prefix} already in use`));

const commonProperty = [
    'address',
    'emergency_contact_number',
    'available_from',
    'available_to',
    'weekend'
];
const unCommonProperty = [
    'first_name',
    'last_name',
    'blood_group',
    'gender',
    'date_of_birth',
    'official_id_type',
    'official_id_number',
    'specialization',
    'contact_number',
    'contact_number',
    'email'
];
const commonChecks = check(commonProperty).notEmpty();
const unCommonChecks = check(unCommonProperty).notEmpty();

const createDoctorValidation = [
    commonChecks,
    unCommonChecks,
    check('email').normalizeEmail().isEmail().custom(checkUnique(User, 'email', 'Email Address')),
    check('contact_number').isLength({min: 11}).custom(checkUnique(User, 'contact_number', 'Contact Number')),
    check('govt_reg_no').custom(checkUnique(Doctor, 'govt_reg_no', 'Government Registration Number')),
];

const idValidation = param('id').exists().toInt().custom(id => Doctor
    .findOne({where: {id}})
    .then(id => id && Promise.reject('Doctor id is not found.')));

const idValidationList = [idValidation];

const updateDoctorValidation = [
    check(unCommonProperty).isEmpty(),
    commonChecks
];

export default {
    createDoctorValidation,
    updateDoctorValidation,
    idValidationList
};