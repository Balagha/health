import {UserInfo} from "../entity/user-info";
import {Router} from "express";

const router = Router();

router.post('/', (req, res) => UserInfo
    .save(req.body).then(res.json));

router.get('/', (_, res) => UserInfo
    .find().then(res.json))

router.get('/:id', (req, res) => UserInfo
    .findOneBy({id: parseInt(req.params.id)}).then(res.json));

router.put('/:id', (req, res) => UserInfo
    .save({...req.body, id: parseInt(req.params.id)}).then(res.json));

router.delete('/:id', (req, res) => UserInfo
    .delete({id: parseInt(req.params.id)}).then(res.json));

export default router;