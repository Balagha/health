import {Doctor} from "../../entity/doctor";
import {DoctorSpecialization} from "../../entity/doctor-specialization"
import {DoctorAvailability} from "../../entity/doctor-availability"
import {validationResult} from "express-validator";
import {User} from "../../entity/user";

const createDoctor = (req, res) => {
    try {
        validationResult(req).throw();
        User.save(req.body.user).then(() => {
            User.findOneBy({contact_number: req.body.user.contact_number}).then(user => {
                Doctor.save({...req.body.doctor, user: user.id}).then(doctor => {
                    Promise.all([
                        DoctorSpecialization.save({...req.body.doctorSpecialization, doctor: doctor.id}),
                        DoctorAvailability.save({...req.body.doctorAvailability, doctor: doctor.id})
                    ]).then(r => {
                        Doctor
                            .createQueryBuilder()
                            .update()
                            .set({doctor_availability: r[0].id, doctor_specialization: r[1].id})
                            .where({id: r[0].doctor})
                            .execute()
                            .then(() => res.json(req.body));
                    });
                });
            });
        });
    } catch (err) {
        console.log(err.mapped());
        res.status(400).json(err.mapped());
    }
};

const getDoctors = (req, res) => {
    try {
        validationResult(req).throw();
        Doctor
            .find({ relations: ["user_id", "doctor_availability_id", "doctor_specialization_id"] }).then(r => res.json(r))
    } catch (err) {
        console.log(err.mapped());
        res.status(400).json(err.mapped());
    }
};

const getDoctorById = (req, res) => {
    try {
        validationResult(req).throw();
        Doctor
            .findOne({
                relations: ["user_id", "doctor_availability_id", "doctor_specialization_id"],
                where:{
                    id: parseInt(req.params.id)
                }
            }).then(r => res.json(r))
    } catch (err) {
        console.log(err.mapped());
        res.status(400).json(err.mapped());
    }
};

const updateDoctor = (req, res) => {
    try{
        validationResult(req).throw();
        Doctor
            .createQueryBuilder()
            .update()
            .set(req.body)
            .where({id: req.params.id})
            .execute()
            .then(() => res.json(req.body));
    }
    catch (err) {
        console.log(err.mapped());
        res.status(400).json(err.mapped());
    }
};

const deleteDoctor = (req, res) => {
    try {
        validationResult(req).throw();
        Doctor
            .delete({id: parseInt(req.params.id)}).then(r => res.json(r));
    } catch (err) {
        console.log(err.mapped());
        res.status(400).json(err.mapped());
    }
};

export default {
    createDoctor,
    getDoctors,
    getDoctorById,
    deleteDoctor,
    updateDoctor
};