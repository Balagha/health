import {Slot} from "../../entity/slot";

const createSlot = (req, res) => Slot
    .save({...req.body, doctor: parseInt(req.params.doctorId)})
    .then(r => res.json(r))

const relations = ["doctor"];
const getSlotByDoctorId = (req, res)=>Slot.
        find({relations, where:{doctor:{id:parseInt(req.params.doctorId)}}})
    .then(r => res.json(r));


export default {
    createSlot,
    getSlotByDoctorId
};