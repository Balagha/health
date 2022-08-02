import {User} from "../../entity/user";
import {Patient} from "../../entity/patient";
import {MedicalTestReport} from "../../entity/medical-test-report";
import {PatientMedicalCondition} from "../../entity/patient-medical-condition";
import {Doctor} from "../../entity/doctor";
import {DoctorSpecialization} from "../../entity/doctor-specialization";
import {DoctorAvailability} from "../../entity/doctor-availability";
//import _ from "lodash";
const _ = require("lodash");
const createUser = req => User.create(_.pick(req.body, [
    "first_name",
    "last_name",
    "blood_group",
    "gender",
    "date_of_birth",
    "email",
    "contact_number",
    "emergency_contact_number",
    "address",
    "official_id_type",
    "official_id_number"
]));

const createPatient = (req,userObj) => Patient.create({
    profession: req.body.profession,
    user: userObj.id
});

const createMedicalTestReport = (req, patientObj) => MedicalTestReport.create({
    ..._.pick(req.body, [
        "test_name",
        "test_type",
        "test_time",
        "test_report_delivery_time",
        "test_result",
        "comments"
    ]),
    patient: patientObj.id
});

const createPatientMedicalCondition = (req, patientObj) => PatientMedicalCondition.create({
    ..._.pick(req.body, [
        "last_checkup_time",
        "blood_pressure",
        "weight",
        "height"
    ]),
    patient: patientObj.id
});

const createDoctor = (req,userObj) => Doctor.create({
    govt_reg_no: req.body.govt_reg_no,
    user: userObj.id
});

const createSpecialization = (req, doctorObj) => DoctorSpecialization.create({
    specialization: req.body.specialization,
    doctor: doctorObj.id
});

const createAvailability = (req, doctorObj) => DoctorAvailability.create({
    ..._.pick(req.body, [
        "available_from",
        "available_to",
        "weekend"
    ]),
    doctor: doctorObj.id
});

export {
    createUser,
    createPatient,
    createMedicalTestReport,
    createPatientMedicalCondition,
    createDoctor,
    createSpecialization,
    createAvailability
};