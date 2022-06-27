import user from "../controllers/crud/user-controller";
import {check} from "express-validator";
import {Router} from "express";

const router = Router();

router.post('/',
    [
        check('first_name').not().isEmpty(),
        check('last_name').not().isEmpty(),
        check('blood_group').not().isEmpty(),
        check('gender').not().isEmpty(),
        check('date_of_birth').not().isEmpty(),
        check('address').not().isEmpty(),
        check('contact_number').isLength({ min: 11 }),
        check('email').isEmail(),
        check('emergency_contact_number').isLength({ min: 11 }),
        check('official_id.type').not().isEmpty(),
        check('official_id.number').not().isEmpty(),
    ],
    user.createUser);

router.get('/', user.getUsers);

router.get('/:id', user.getUserById);

router.put('/:id',
    [
        check('first_name').not().isEmpty(),
        check('last_name').not().isEmpty(),
        check('blood_group').not().isEmpty(),
        check('gender').not().isEmpty(),
        check('date_of_birth').not().isEmpty(),
        check('address').not().isEmpty(),
        check('contact_number').isLength({ min: 11 }),
        check('email').isEmail(),
        check('emergency_contact_number').isLength({ min: 11 }),
        check('official_id.type').not().isEmpty(),
        check('official_id.number').not().isEmpty(),
    ],
    user.updateUser);

router.delete('/:id', user.deleteUser);

export default router;