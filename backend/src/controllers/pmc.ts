import {PatientMedicalCondition} from "../entity/patients-medical-condition"
import {Router} from "express";

const router = Router();

router.post('/:id', (req, res) => PatientMedicalCondition
    .save({...req.body, patient: parseInt(req.params.id)}).then(r => res.json(r)));

router.get('/', (_, res) => PatientMedicalCondition
    .find().then(r => res.json(r)));

router.get('/:id', (req, res) => PatientMedicalCondition
    .findOneBy({id: parseInt(req.params.id)}).then(r => res.json(r)));

router.put('/:id', (req, res) => PatientMedicalCondition
    .save({...req.body, id: parseInt(req.params.id)}).then(r => res.json(r)));

router.delete('/:id', (req, res) => PatientMedicalCondition
    .delete({id: parseInt(req.params.id)}).then(r => res.json(r)));

export default router;