import {Prescription} from "../../entity/prescription"

const createPrescription = (req, res) => Prescription
            .save({...req.body, patient: parseInt(req.params.patientId), doctor: parseInt(req.params.doctorId)})
            .then(res.json)

const getPrescriptions = (req, res) => Prescription.find().then(res.json);

const getPrescriptionById = (req, res) => Prescription.findOneBy({id: parseInt(req.params.id)}).then(res.json)

const updatePrescription = (req, res) => Prescription
            .save({...req.body}).then(res.json)

const deletePrescription = (req, res) => Prescription
            .delete({id: parseInt(req.params.id)}).then(res.json)
export default {
    createPrescription,
    getPrescriptions,
    getPrescriptionById,
    updatePrescription,
    deletePrescription
};
