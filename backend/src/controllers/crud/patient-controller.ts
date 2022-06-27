import {Patient} from "../../entity/patient";
import {MedicalTestReport} from "../../entity/medical-test-report";
import {PatientMedicalCondition} from "../../entity/patient-medical-condition";
import {Router} from "express";

const patientController = Router();
const medicalTestReport = Router();
const patientMedicalCondition = Router();

/* patientController crud start */
patientController.post('/:id', (req, res) => Patient
    .save({...req.body, user_id: parseInt(req.params.id)}).then(r => res.json(r)));

patientController.get('/', (_, res) => Patient
    .find().then(r => res.json(r)));

patientController.get('/:id', (req, res) => Patient
    .findOneBy({id: parseInt(req.params.id)}).then(r => res.json(r)));

patientController.put('/:id', (req, res) => Patient
    .save({...req.body, id: parseInt(req.params.id)}).then(r => res.json(r)));

patientController.delete('/:id', (req, res) => Patient
    .delete({id: parseInt(req.params.id)}).then(r => res.json(r)));

medicalTestReport.post('/:id', (req, res) => MedicalTestReport
    .save({...req.body, patient_id: parseInt(req.params.id)}).then(r => res.json(r)));

medicalTestReport.get('/', (_, res) => MedicalTestReport
    .find().then(r => res.json(r)));

medicalTestReport.get('/:id', (req, res) => MedicalTestReport
    .findOneBy({id: parseInt(req.params.id)}).then(r => res.json(r)));

medicalTestReport.put('/:id', (req, res) => MedicalTestReport
    .save({...req.body, id: parseInt(req.params.id)}).then(r => res.json(r)));

medicalTestReport.delete('/:id', (req, res) => MedicalTestReport
    .delete({id: parseInt(req.params.id)}).then(r => res.json(r)));


patientMedicalCondition.post('/:id', (req, res) => PatientMedicalCondition
    .save({...req.body, patient_id: parseInt(req.params.id)}).then(r => res.json(r)));

patientMedicalCondition.get('/', (_, res) => PatientMedicalCondition
    .find().then(r => res.json(r)));

patientMedicalCondition.get('/:id', (req, res) => PatientMedicalCondition
    .findOneBy({id: parseInt(req.params.id)}).then(r => res.json(r)));

patientMedicalCondition.put('/:id', (req, res) => PatientMedicalCondition
    .save({...req.body, id: parseInt(req.params.id)}).then(r => res.json(r)));

patientMedicalCondition.delete('/:id', (req, res) => PatientMedicalCondition
    .delete({id: parseInt(req.params.id)}).then(r => res.json(r)));

export default {
    patient: patientController,
    medicalTestReport,
    patientMedicalCondition,
};