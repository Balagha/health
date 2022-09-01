import {check, param} from "express-validator";
import {Slot} from "../entity/slot";
import {Appointment} from "../entity/appoinment";
import {Doctor} from "../entity/doctor";
import {Patient} from "../entity/patient";

const isValidInput = [

    param('patientId').exists().toInt().custom(patientId =>
        Patient.findOne({where:{id:patientId}})
            .then(id => !id && Promise.reject('Patient Not Found'))
    ),


    param('doctorId').exists().toInt().custom(doctorId =>
        Doctor.findOne({where:{id:doctorId}})
            .then(id => !id && Promise.reject('Doctor Not Found'))
    ),


    param('slotId').exists().toInt().custom(slotId =>
        Slot.findOne({where:{id:slotId}})
            .then(id => !id && Promise.reject('Slot Not Found'))
    ),


    check('appointment_date').notEmpty(),

]


const isValidSlot =[

    param().custom((params) =>
        Doctor.findOne({where:{
                id:parseInt(params.doctorId),
                slot:{id:parseInt(params.slotId)}
                }})
            .then((doctor) => !doctor && Promise.reject('Invalid slot selection'))
    )
]



const slotAvailability = param('slotId').exists().toInt().custom((slotId,{req})=>
    Appointment.findOne({where:{appointment_date:req.body.appointment_date,
        slot:{id:slotId}}})
    .then(slot => slot && Promise.reject('This slot is Booked')));


export default {
    isValidInput,
    isValidSlot,
    slotAvailability
};
