import {UserInfo} from "../entity/user-info";
import {Router} from "express";

const router = Router();

router.post('/', (req, res) => UserInfo
    .save(req.body).then(r => res.json(r)));

router.get('/', (_, res) => UserInfo
    .find().then(r => res.json(r)));

router.get('/:id', (req, res) => UserInfo
    .findOneBy({id: parseInt(req.params.id)}).then(r => res.json(r)));

router.put('/:id', (req, res) => UserInfo
    .save({...req.body, id: parseInt(req.params.id)}).then(r => res.json(r)));

router.delete('/:id', (req, res) => UserInfo
    .delete({id: parseInt(req.params.id)}).then(r => res.json(r)));

export default router;