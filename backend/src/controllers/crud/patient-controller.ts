import {Patient} from "../../entity/patient";
import {User} from "../../entity/user";
import {Doctor} from "../../entity/doctor";
import {DoctorSpecialization} from "../../entity/doctor-specialization";
import {DoctorAvailability} from "../../entity/doctor-availability";
import {addUser, addPatient, addPatientMedicalCondition, addMedicalTestReport} from "./utils";

const relations = ["user_id", "Patient_medical_condition_id", "medical_test_report_id"];

const createPatient = (req, res) => {
    User.save(addUser(req))
        .then(userObj => Doctor.save(addPatient(req, userObj))
            .then(patientObj => {
                Promise.all([
                    DoctorSpecialization.save(addMedicalTestReport(req, patientObj)),
                    DoctorAvailability.save(addPatientMedicalCondition(req, patientObj))
                ]).then(obj => Patient
                    .createQueryBuilder()
                    .update()
                    .set({medical_test_report: obj[0], Patient_medical_condition: obj[1]})
                    .where({id: obj[0].doctor})
                    .execute()
                    .then(res.json)
                );
            })
        );
};

const getPatients = (req, res) => Patient.find({ relations }).then(res.json);

const getPatientById = (req, res) => Patient
            .findOne({relations, where:{id: parseInt(req.params.id)}})
            .then(r => res.json(r));

const updatePatient = (req, res) =>
        Patient
            .createQueryBuilder()
            .update()
            .set(req.body)
            .where({id: req.params.id})
            .execute()
            .then(() => res.json(req.body))

const deletePatient = (req, res) => Patient.delete({id: parseInt(req.params.id)}).then(res.json)

export default {
    createPatient,
    getPatients,
    getPatientById,
    deletePatient,
    updatePatient
};