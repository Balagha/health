import {Doctor} from "../../entity/doctor";
import {DoctorSpecialization} from "../../entity/doctor-specialization"
import {DoctorAvailability} from "../../entity/doctor-availability"
import {User} from "../../entity/user";
import {addUser, addDoctor, addSpecialization, addAvailability} from "./utils";

const relations = ["user_id", "doctor_availability_id", "doctor_specialization_id"];

const createDoctor = (req, res) => {
    User.save(addUser(req))
        .then(userObj => Doctor.save(addDoctor(req, userObj))
            .then(doctorObj => {
                Promise.all([
                    DoctorSpecialization.save(addSpecialization(req, doctorObj)),
                    DoctorAvailability.save(addAvailability(req, doctorObj))
                ]).then(obj => Doctor
                    .createQueryBuilder()
                    .update()
                    .set({doctor_availability: obj[0], doctor_specialization: obj[1]})
                    .where({id: obj[0].doctor})
                    .execute()
                    .then(res.json)
                );
            })
        );
};

const updateDoctor = (req, res) => Doctor
    .createQueryBuilder()
    .update()
    .set(req.body)
    .where({id: req.params.id})
    .execute()
    .then(() => res.json(req.body));

const getDoctors = (req, res) => Doctor.find({relations}).then(res.json);

const getDoctorById = (req, res) => Doctor
    .findOne({relations, where: {id: parseInt(req.params.id)}})
    .then(res.json);

const deleteDoctor = (req, res) => Doctor.delete({id: parseInt(req.params.id)}).then(res.json);

export default {
    createDoctor,
    getDoctors,
    getDoctorById,
    deleteDoctor,
    updateDoctor
};