import {Doctor} from "../../entity/doctor";
import {DoctorSpecialization} from "../../entity/doctor-specialization"
import {DoctorAvailability} from "../../entity/doctor-availability"
import {User} from "../../entity/user";
import {createUser, createDoctor, createSpecialization, createAvailability} from "./createUtils";
import {updateUserEntity, updateDoctorAvailabilityEntity, updateDoctorForeignKeys} from "./updateUtils";


const relations = ["user", "doctor_availability", "doctor_specialization"];

const addDoctor = (req, res) => User
    .save(createUser(req))
    .then(userObj => Doctor.save(createDoctor(req, userObj)))
    .then(doctorObj =>
        Promise.all([
            DoctorSpecialization.save(createSpecialization(req, doctorObj)),
            DoctorAvailability.save(createAvailability(req, doctorObj))
        ]).then(([specialization, availablity]) => updateDoctorForeignKeys(doctorObj, specialization, availablity)))
    .then(r => res.json(r));

const updateDoctor = (req, res) => Doctor
    .findOne({where: {id: req.params.id}})
    .then(doctor => Promise.all([updateUserEntity(req, doctor), updateDoctorAvailabilityEntity(req, doctor)]))
    .then(r => res.json(r));

const getDoctors = (req, res) => Doctor.find({relations}).then(r => res.json(r));

const getDoctorById = (req, res) => Doctor
    .findOne({relations, where: {id: parseInt(req.params.id)}})
    .then(r => res.json(r));

const deleteDoctor = (req, res) => Doctor.delete({id: parseInt(req.params.id)}).then(r => res.json(r));

export default {
    addDoctor,
    getDoctors,
    getDoctorById,
    deleteDoctor,
    updateDoctor
};