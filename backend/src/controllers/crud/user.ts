import {User} from "../../entity/user";
import {Router} from "express";

const router = Router();

router.post('/', (req, res) => User
    .save(req.body).then(r => res.json(r)));

router.get('/', (_, res) => User
    .find().then(r => res.json(r)));

router.get('/:id', (req, res) => User
    .findOneBy({id: parseInt(req.params.id)}).then(r => res.json(r)));

router.put('/:id', (req, res) => User
    .save({...req.body, id: parseInt(req.params.id)}).then(r => res.json(r)));

router.delete('/:id', (req, res) => User
    .delete({id: parseInt(req.params.id)}).then(r => res.json(r)));

export default router;