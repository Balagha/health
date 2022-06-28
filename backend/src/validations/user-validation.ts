import {check, param} from "express-validator";
import {User} from "../entity/user";

const createUserValidation = [
    check([
        'first_name',
        'last_name',
        'blood_group',
        'gender',
        'date_of_birth',
        'address',
        'contact_number',
        'emergency_contact_number',
        'official_id.type',
        'official_id.number'
    ]).notEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('date_of_birth').isISO8601().toDate(),
    check('contact_number').isLength({ min: 11 }),
    check('emergency_contact_number').isLength({ min: 11 }),
];

const getUsersValidation = [];

const getUserByIdValidation = [
    param('id').exists().toInt().custom(userId => {
        if(!User.findOneBy({id: userId}))
            throw new Error('user not found');
    })
];

const updateUserValidation = [
    param('id').exists().toInt().custom(userId => {
        if(!User.findOneBy({id: userId}))
            throw new Error('user not found');
    }),
    check([
        'first_name',
        'last_name',
        'blood_group',
        'gender',
        'date_of_birth',
        'address',
        'contact_number',
        'emergency_contact_number',
        'official_id.type',
        'official_id.number'
    ]).notEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('date_of_birth').isISO8601().toDate(),
    check('contact_number').isLength({ min: 11 }),
    check('emergency_contact_number').isLength({ min: 11 }),
];

const deleteUserValidation = [
    param('id').exists().toInt().custom(userId => {
        if(!User.findOneBy({id: userId}))
            throw new Error('user not found');
    })
];

export default {
    createUserValidation,
    getUsersValidation,
    getUserByIdValidation,
    updateUserValidation,
    deleteUserValidation
};