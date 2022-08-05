import {Patient} from "../../entity/patient";
import {User} from "../../entity/user";
import {createUser, createPatient, createMedicalTestReport, createPatientMedicalCondition} from "./createUtils";
import {PatientMedicalCondition} from "../../entity/patient-medical-condition";
import {updateUserEntity, updatePatientEntity, updateMedicalConditionEntity, updatePatientForeignKeys} from "./updateUtils";
import {MedicalTestReport} from "../../entity/medical-test-report";

const relations = ["user", "patient_medical_condition", "medical_test_report"];

const addPatient = (req, res) =>
    User.save(createUser(req))
        .then(userObj => Patient.save(createPatient(req, userObj)))
        .then(patientObj =>
            Promise.all([
                MedicalTestReport.save(createMedicalTestReport(req, patientObj)),
                PatientMedicalCondition.save(createPatientMedicalCondition(req, patientObj))
            ]).then(([medicalTestReport, patientMedicalCondition]) => updatePatientForeignKeys(patientObj, medicalTestReport, patientMedicalCondition)))
        .then(r => res.json(req.body))

const updatePatient = (req, res) => Patient
    .findOne({relations, where:{id: req.params.id}})
    .then(patient => Promise.all([updateUserEntity(req, patient), updatePatientEntity(req, patient), updateMedicalConditionEntity(req, patient)]))
    .then(r => res.json(r))

const getPatients = (req, res) => Patient.find({ relations }).then(r => res.json(r));

const getPatientById = (req, res) => Patient
            .findOne({relations, where:{id: parseInt(req.params.id)}})
            .then(r => res.json(r));

const deletePatient = (req, res) => Patient.delete({id: parseInt(req.params.id)}).then(r => res.json(r))

export default {
    addPatient,
    getPatients,
    getPatientById,
    deletePatient,
    updatePatient
};
