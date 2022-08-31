import {Appointment} from "../../entity/appoinment";

const createAppointment = (req, res) => Appointment
    .save({...req.body, doctor: parseInt(req.params.doctorId),patient:parseInt(req.params.patientId),slot:parseInt(req.params.slotId)})
    .then(r => res.json(r))


export default {
    createAppointment
};