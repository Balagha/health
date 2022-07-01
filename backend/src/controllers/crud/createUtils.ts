import {User} from "../../entity/user";
import {Patient} from "../../entity/patient";
import {MedicalTestReport} from "../../entity/medical-test-report";
import {PatientMedicalCondition} from "../../entity/patient-medical-condition";
import {Doctor} from "../../entity/doctor";
import {DoctorSpecialization} from "../../entity/doctor-specialization";
import {DoctorAvailability} from "../../entity/doctor-availability";

const createUser = req => User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    blood_group: req.body.blood_group,
    gender: req.body.gender,
    date_of_birth: req.body.date_of_birth,
    email: req.body.email,
    contact_number: req.body.contact_number,
    emergency_contact_number: req.body.emergency_contact_number,
    address: req.body.address,
    official_id_type: req.body.official_id_type,
    official_id_number: req.body.official_id_number
});

const createPatient = (req,userObj) => Patient.create({
    profession: req.body.profession,
    user: userObj.id
});
const createMedicalTestReport = (req, patientObj) => MedicalTestReport.create({
    test_name: req.body.test_name,
    test_type: req.body.test_type,
    test_time: req.body.test_time,
    test_report_delivery_time: req.body.test_report_delivery_time,
    test_result: req.body.test_result,
    comments: req.body.comments,
    patient: patientObj.id
});
const createPatientMedicalCondition = (req, patientObj) => PatientMedicalCondition.create({
    last_checkup_time: req.body.last_checkup_time,
    blood_pressure: req.body.blood_pressure,
    weight: req.body.weight,
    height: req.body.height,
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
    available_from: req.body.available_from,
    available_to: req.body.available_from,
    weekend :req.body.weekend,
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