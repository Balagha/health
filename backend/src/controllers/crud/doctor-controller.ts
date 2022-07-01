import {Doctor} from "../../entity/doctor";
import {DoctorSpecialization} from "../../entity/doctor-specialization"
import {DoctorAvailability} from "../../entity/doctor-availability"
import {User} from "../../entity/user";
import {createUser, createDoctor, createSpecialization, createAvailability} from "./createUtils";
import {updateUserEntity, updateDoctorAvailabilityEntity, updateDoctorForeignKeys} from "./updateUtils";

const relations = ["user_id", "doctor_availability_id", "doctor_specialization_id"];

const addDoctor = (req, res) =>
    User.save(createUser(req))
        .then(userObj => Doctor.save(createDoctor(req, userObj))
            .then(doctorObj => {
                Promise.all([
                    DoctorSpecialization.save(createSpecialization(req, doctorObj)),
                    DoctorAvailability.save(createAvailability(req, doctorObj))
                ]).then(obj => updateDoctorForeignKeys(doctorObj, obj[0], obj[1]).then(res.json));
            })
        );

const updateDoctor = (req, res) => Doctor
    .findOne({where:{id: req.params.id}})
    .then(doctor => Promise.all([
        updateUserEntity(req, doctor),
        updateDoctorAvailabilityEntity(req, doctor)
        ]).then(res.json)
    );

const getDoctors = (req, res) => Doctor.find({relations}).then(res.json);

const getDoctorById = (req, res) => Doctor
    .findOne({relations, where: {id: parseInt(req.params.id)}})
    .then(res.json);

const deleteDoctor = (req, res) => Doctor.delete({id: parseInt(req.params.id)}).then(res.json);

export default {
    addDoctor,
    getDoctors,
    getDoctorById,
    deleteDoctor,
    updateDoctor
};