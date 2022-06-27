import {User} from "../../entity/user";
import {validationResult} from "express-validator";

const createUser = (req, res) => {
    try {
        validationResult(req).throw();
        User.save(req.body).then(r => res.json(r));
    } catch (err) {
        console.log(err.mapped());
        res.status(400).json(err.mapped());
    }
};

const getUsers = (_, res) => User
    .find().then(r => res.json(r));

const getUserById = (req, res) => User
    .findOneBy({id: parseInt(req.params.id)}).then(r => res.json(r));

const updateUser = (req, res) => {
    {
        try {
            validationResult(req).throw();
            User.save({...req.body, id: parseInt(req.params.id)}).then(r => res.json(r));
        } catch (err) {
            console.log(err.mapped());
            res.status(400).json(err.mapped());
        }
    };
};

const deleteUser = (req, res) => User
    .delete({id: parseInt(req.params.id)}).then(r => res.json(r))

export default {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};