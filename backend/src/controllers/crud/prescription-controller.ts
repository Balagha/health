import {Prescription} from "../../entity/prescription"

const createPrescription = (req, res) => Prescription
            .save({...req.body, patient: parseInt(req.params.patientId), doctor: parseInt(req.params.doctorId)})
            .then(r => res.json(r))

const getPrescriptions = (req, res) => Prescription.find().then(r => res.json(r));

const getPrescriptionById = (req, res) => Prescription.findOneBy({id: parseInt(req.params.id)}).then(r => res.json(r))

const updatePrescription = (req, res) => Prescription.save({...req.body}).then(r => res.json(r))

const deletePrescription = (req, res) => Prescription.delete({id: parseInt(req.params.id)}).then(r => res.json(r))

export default {
    createPrescription,
    getPrescriptions,
    getPrescriptionById,
    updatePrescription,
    deletePrescription
};
