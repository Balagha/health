import {Prescriptions} from "../entity/prescriptions"
import {Router} from "express";

const router = Router();

router.post('/:patientId/:doctorId', (req, res) => Prescriptions
    .save({...req.body, patient: parseInt(req.params.patientId), doctor: parseInt(req.params.doctorId)}).then(r => res.json(r)));

router.get('/', (_, res) => Prescriptions
    .find().then(r => res.json(r)));

router.get('/:id', (req, res) => Prescriptions
    .findOneBy({id: parseInt(req.params.id)}).then(r => res.json(r)));

router.put('/:id', (req, res) => Prescriptions
    .save({...req.body, id: parseInt(req.params.id)}).then(r => res.json(r)));

router.delete('/:id', (req, res) => Prescriptions
    .delete({id: parseInt(req.params.id)}).then(r => res.json(r)));

export default router;