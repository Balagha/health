import user from "../controllers/crud/user-controller";
import validation from "../validations/user-validation"
import {Router} from "express";

const router = Router();

router.post('/',validation.createUserValidation , user.createUser);

router.get('/', validation.getUsersValidation, user.getUsers);

router.get('/:id', validation.getUserByIdValidation, user.getUserById);

router.put('/:id',validation.updateUserValidation , user.updateUser);

router.delete('/:id', validation.deleteUserValidation, user.deleteUser);

export default router;