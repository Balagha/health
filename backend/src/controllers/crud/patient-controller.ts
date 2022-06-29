import {Patient} from "../../entity/patient";
import {MedicalTestReport} from "../../entity/medical-test-report";
import {PatientMedicalCondition} from "../../entity/patient-medical-condition";
import {validationResult} from "express-validator";
import {User} from "../../entity/user";

const createPatient = (req, res) => {
    try {
        validationResult(req).throw();
        User.save(req.body.user).then(() => {
            User.findOneBy({contact_number: req.body.user.contact_number}).then(user => {
                Patient.save({...req.body.patient, user: user.id}).then(patient => {
                    Promise.all([
                        MedicalTestReport.save({...req.body.medicalTestReport, patient: patient.id}),
                        PatientMedicalCondition.save({...req.body.patientMedicalCondition, patient: patient.id})
                    ]).then(r => {
                        Patient
                            .createQueryBuilder()
                            .update()
                            .set({medical_test_report: r[0].id, Patient_medical_condition: r[1].id})
                            .where({id: r[0].patient_id})
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

const getPatients = (req, res) => {
    try {
        validationResult(req).throw();
        Patient
            .find({ relations: ["user_id", "Patient_medical_condition_id", "medical_test_report_id"] }).then(r => res.json(r))
    } catch (err) {
        console.log(err.mapped());
        res.status(400).json(err.mapped());
    }
};

const getPatientById = (req, res) => {
    try {
        validationResult(req).throw();
        Patient
            .findOne({
                relations: ["user_id", "Patient_medical_condition_id", "medical_test_report_id"],
                where:{
                    id: parseInt(req.params.id)
                }
            }).then(r => res.json(r))
    } catch (err) {
        console.log(err.mapped());
        res.status(400).json(err.mapped());
    }
};

const updatePatient = (req, res) => {
    try{
        validationResult(req).throw();
        Patient
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

const deletePatient = (req, res) => {
    try {
        validationResult(req).throw();
        Patient
            .delete({id: parseInt(req.params.id)}).then(r => res.json(r));
    } catch (err) {
        console.log(err.mapped());
        res.status(400).json(err.mapped());
    }
};

export default {
    createPatient,
    getPatients,
    getPatientById,
    deletePatient,
    updatePatient
};