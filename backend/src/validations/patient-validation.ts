import {check, param} from "express-validator";
import {User} from "../entity/user";
import {Patient} from "../entity/patient";

const sampleReqBody = {
    first_name: "Asif",
    last_name: "Joardar",
    blood_group: "A+",
    gender: "Male",
    date_of_birth: "01-01-1971",
    email: "abc@gmail.com",
    contact_number: "12345678910",
    emergency_contact_number: "12345678911",
    address: "31 Kolabaagan 1st Lane",
    official_id_type: "PASSPORT",
    official_id_number: "EH01233456",
    profession: "bekar",
    test_name: "blood test",
    test_type: "bla",
    test_time: "01-06-3023",
    test_report_delivery_time: "01-06-3024",
    test_result: "valo",
    comments: "ghumaben beshi kore",
    last_checkup_time: "01-06-3029",
    blood_pressure: "123",
    weight: "100",
    height: "123"
}

const checkUnique = (entity, field, prefix) => value => entity
    .findOne({where: {[field]: value}})
    .then(obj => obj && Promise.reject(`${prefix} already in use`));

const commonProperty = [
    'address',
    'emergency_contact_number',
    'profession',
    'last_checkup_time',
    'blood_pressure',
    'weight',
    'height'
];
const unCommonProperty = [
    'first_name',
    'last_name',
    'blood_group',
    'gender',
    'date_of_birth',
    'official_id_type',
    'official_id_number',
    'test_name',
    'test_type',
    'test_time',
    'test_report_delivery_time',
    'test_result',
    'comments',
];
const commonChecks = check(commonProperty).notEmpty();
const unCommonChecks = check(unCommonProperty).notEmpty();

const createPatientValidation = [
    commonChecks,
    unCommonChecks,
    check('email').normalizeEmail().isEmail().custom(checkUnique(User, 'email', 'Email Address')),
    check('contact_number').notEmpty().isLength({min: 11}).custom(checkUnique(User, 'contact_number', 'Contact Number')),
];

const idValidation = param('id').exists().toInt().custom(id => Patient
    .findOne({where: {id}})
    .then(id => !id && Promise.reject('Patient id is not found.')));

const updatePatientValidation = [
    check(unCommonProperty).isEmpty(),
    commonChecks
];

export default {
    createPatientValidation,
    updatePatientValidation,
    idValidation
};