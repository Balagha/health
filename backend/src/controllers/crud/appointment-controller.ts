import {Appointment} from "../../entity/appoinment";
const relations = ["doctor", "patient","slot"];
const createAppointment = (req, res) => Appointment
    .save({...req.body, doctor: parseInt(req.params.doctorId),
        patient:parseInt(req.cookies.user),
        slot:parseInt(req.params.slotId)})
    .then(r => res.json(r))
const getAppointment = (req, res) => Appointment.
                                        find({relations})
                                            .then(r => res.json(r))
                                            .catch(err => res.json({error:"data not found"}));


export default {
    createAppointment,
    getAppointment
};