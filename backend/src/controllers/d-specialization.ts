import {DoctorSpecialization} from "../entity/doctor-specialization"
import {Router} from "express";

const router = Router();

router.post('/:id', (req, res) => DoctorSpecialization
    .save({...req.body, doctor: parseInt(req.params.id)}).then(r => res.json(r)));

router.get('/', (_, res) => DoctorSpecialization
    .find().then(r => res.json(r)));

router.get('/:id', (req, res) => DoctorSpecialization
    .findOneBy({id: parseInt(req.params.id)}).then(r => res.json(r)));

router.put('/:id', (req, res) => DoctorSpecialization
    .save({...req.body, id: parseInt(req.params.id)}).then(r => res.json(r)));

router.delete('/:id', (req, res) => DoctorSpecialization
    .delete({id: parseInt(req.params.id)}).then(r => res.json(r)));

export default router;