import {MedicalTestReport} from "../entity/medical-test-report"
import {Router} from "express";

const router = Router();

router.post('/:id', (req, res) => MedicalTestReport
    .save({...req.body, patient: parseInt(req.params.id)}).then(r => res.json(r)));

router.get('/', (_, res) => MedicalTestReport
    .find().then(r => res.json(r)));

router.get('/:id', (req, res) => MedicalTestReport
    .findOneBy({id: parseInt(req.params.id)}).then(r => res.json(r)));

router.put('/:id', (req, res) => MedicalTestReport
    .save({...req.body, id: parseInt(req.params.id)}).then(r => res.json(r)));

router.delete('/:id', (req, res) => MedicalTestReport
    .delete({id: parseInt(req.params.id)}).then(r => res.json(r)));

export default router;