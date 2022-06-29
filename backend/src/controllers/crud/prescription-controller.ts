import {Prescription} from "../../entity/prescription"
import {validationResult} from "express-validator";

const createPrescription = (req, res) => {
    try {
        validationResult(req).throw();
        Prescription
            .save({...req.body, patient_id: parseInt(req.params.patientId), doctor: parseInt(req.params.doctorId)})
            .then(r => res.json(r));
    } catch (err) {
        console.log(err.mapped());
        res.status(400).json(err.mapped());
    }
};

const getPrescriptions = (req, res) => {
    try {
        validationResult(req).throw();
        Prescription.find().then(r => res.json(r));
    } catch (err) {
        console.log(err.mapped());
        res.status(400).json(err.mapped());
    }
}

const getPrescriptionById = (req, res) => {
    try {
        validationResult(req).throw();
        Prescription.findOneBy({id: parseInt(req.params.id)}).then(r => res.json(r));
    } catch (err) {
        console.log(err.mapped());
        res.status(400).json(err.mapped());
    }
};

const updatePrescription = (req, res) => {
    try {
        validationResult(req).throw();
        Prescription
            .save({...req.body, id: parseInt(req.params.id)}).then(r => res.json(r));
    } catch (err) {
        console.log(err.mapped());
        res.status(400).json(err.mapped());
    }
};

const deletePrescription = (req, res) => {
    try {
        validationResult(req).throw();
        Prescription
            .delete({id: parseInt(req.params.id)}).then(r => res.json(r));
    } catch (err) {
        console.log(err.mapped());
        res.status(400).json(err.mapped());
    }
};

export default {
    createPrescription,
    getPrescriptions,
    getPrescriptionById,
    updatePrescription,
    deletePrescription
};
