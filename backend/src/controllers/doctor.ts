import {Doctors} from "../entity/doctors";
import {Router} from "express";
import {UserInfo} from "../entity/user-info";

const router = Router();

router.post('/:id', (req, res) => Doctors
    .save({...req.body, userInfo: parseInt(req.params.id)}).then(r => res.json(r)));

router.get('/', (_, res) => Doctors
    .find().then(r => res.json(r)));

router.get('/:id', (req, res) => Doctors
    .findOneBy({id: parseInt(req.params.id)}).then(r => res.json(r)));

router.put('/:id', (req, res) => Doctors
    .save({...req.body, id: parseInt(req.params.id)}).then(r => res.json(r)));

router.delete('/:id', (req, res) => Doctors
    .delete({id: parseInt(req.params.id)}).then(r => res.json(r)));

export default router;