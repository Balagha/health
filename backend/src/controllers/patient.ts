import {Patient} from "../entity/patient"
import {Router} from "express";

const router = Router();

router.post('/:id', (req, res) => Patient
    .save({...req.body, userInfo: parseInt(req.params.id)}).then(r => res.json(r)));

router.get('/', (_, res) => Patient
    .find().then(r => res.json(r)));

router.get('/:id', (req, res) => Patient
    .findOneBy({id: parseInt(req.params.id)}).then(r => res.json(r)));

router.put('/:id', (req, res) => Patient
    .save({...req.body, id: parseInt(req.params.id)}).then(r => res.json(r)));

router.delete('/:id', (req, res) => Patient
    .delete({id: parseInt(req.params.id)}).then(r => res.json(r)));

export default router;