import {Doctor} from "../../entity/doctor";
import {DoctorSpecialization} from "../../entity/doctor-specialization"
import {DoctorAvailability} from "../../entity/doctor-availability"

import {Router} from "express";

const doctor = Router();
const doctorSpecialization = Router();
const doctorAvailability = Router();

doctor.post('/:id', (req, res) => Doctor
    .save({...req.body, user_id: parseInt(req.params.id)}).then(r => res.json(r)));

doctor.get('/', (_, res) => Doctor
    .find().then(r => res.json(r)));

doctor.get('/:id', (req, res) => Doctor
    .findOneBy({id: parseInt(req.params.id)}).then(r => res.json(r)));

doctor.put('/:id', (req, res) => Doctor
    .save({...req.body, id: parseInt(req.params.id)}).then(r => res.json(r)));

doctor.delete('/:id', (req, res) => Doctor
    .delete({id: parseInt(req.params.id)}).then(r => res.json(r)));

doctorSpecialization.post('/:id', (req, res) => DoctorSpecialization
    .save({...req.body, doctor_id: parseInt(req.params.id)}).then(r => res.json(r)));

doctorSpecialization.get('/', (_, res) => DoctorSpecialization
    .find().then(r => res.json(r)));

doctorSpecialization.get('/:id', (req, res) => DoctorSpecialization
    .findOneBy({id: parseInt(req.params.id)}).then(r => res.json(r)));

doctorSpecialization.put('/:id', (req, res) => DoctorSpecialization
    .save({...req.body, id: parseInt(req.params.id)}).then(r => res.json(r)));

doctorSpecialization.delete('/:id', (req, res) => DoctorSpecialization
    .delete({id: parseInt(req.params.id)}).then(r => res.json(r)));

doctorAvailability.post('/:id/doctor-availability', (req, res) => DoctorAvailability
    .save({...req.body, doctor_id: parseInt(req.params.id)}).then(r => res.json(r)));

doctorAvailability.get('/available-doctors', (_, res) => DoctorAvailability
    .find().then(r => res.json(r)));

doctorAvailability.get('/:id', (req, res) => DoctorAvailability
    .findOneBy({id: parseInt(req.params.id)}).then(r => res.json(r)));

doctorAvailability.put('/:id', (req, res) => DoctorAvailability
    .save({...req.body, id: parseInt(req.params.id)}).then(r => res.json(r)));

doctorAvailability.delete('/:id', (req, res) => DoctorAvailability
    .delete({id: parseInt(req.params.id)}).then(r => res.json(r)));

export default {
    doctor,
    doctorSpecialization,
    doctorAvailability
};