import {DoctorAvailability} from "../entity/doctor-availability"
import {Router} from "express";

const router = Router();

router.post('/:id', (req, res) => DoctorAvailability
    .save({...req.body, doctor: parseInt(req.params.id)}).then(r => res.json(r)));

router.get('/', (_, res) => DoctorAvailability
    .find().then(r => res.json(r)));

router.get('/:id', (req, res) => DoctorAvailability
    .findOneBy({id: parseInt(req.params.id)}).then(r => res.json(r)));

router.put('/:id', (req, res) => DoctorAvailability
    .save({...req.body, id: parseInt(req.params.id)}).then(r => res.json(r)));

router.delete('/:id', (req, res) => DoctorAvailability
    .delete({id: parseInt(req.params.id)}).then(r => res.json(r)));

export default router;