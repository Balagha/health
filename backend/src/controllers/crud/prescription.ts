import {Prescription} from "../../entity/prescription"
import {Router} from "express";

const router = Router();

router.post('/:patientId/:doctorId', (req, res) => Prescription
    .save({...req.body, patient_id: parseInt(req.params.patientId), doctor: parseInt(req.params.doctorId)}).then(r => res.json(r)));

router.get('/', (_, res) => Prescription
    .find().then(r => res.json(r)));

router.get('/:id', (req, res) => Prescription
    .findOneBy({id: parseInt(req.params.id)}).then(r => res.json(r)));

router.put('/:id', (req, res) => Prescription
    .save({...req.body, id: parseInt(req.params.id)}).then(r => res.json(r)));

router.delete('/:id', (req, res) => Prescription
    .delete({id: parseInt(req.params.id)}).then(r => res.json(r)));

export default router;
