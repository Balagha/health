import {User} from "../../entity/user";
import {Patient} from "../../entity/patient";
import {PatientMedicalCondition} from "../../entity/patient-medical-condition";
import {DoctorAvailability} from "../../entity/doctor-availability";
import {Doctor} from "../../entity/doctor";

const _ = require("lodash");

const updateUserEntity = (req, entity) => User.createQueryBuilder()
    .update(_.pick(req.body, ["address", "emergency_contact_number"]))
    .where({id: entity.user.id})
    .execute()

const updatePatientEntity = (req, entity) => Patient.createQueryBuilder()
    .update(_.pick(req.body, ["profession"]))
    .where({id: entity.id})
    .execute()

const updateMedicalConditionEntity = (req, entity) => PatientMedicalCondition.createQueryBuilder()
    .update(_.pick(req.body, ["last_checkup_time", "blood_pressure", "weight", "height"]))
    .where({id: entity.patient_medical_condition.id})
    .execute()

const updateDoctorAvailabilityEntity = (req, entity) => DoctorAvailability.createQueryBuilder()
    .update(_.pick(req.body, ["available_from", "available_to", "weekend"]))
    .where({id: entity.doctor_availability.id})
    .execute()

const updateDoctorForeignKeys = (doctor, doctorAvailability, doctorSpecialization) => Doctor.createQueryBuilder()
    .update({doctor_availability: doctorAvailability, doctor_specialization: doctorSpecialization})
    .where({id: doctor.id})
    .execute()

const updatePatientForeignKeys = (patient, medicalTestReport, patientMedicalCondition) => Patient.createQueryBuilder()
    .update({medical_test_report: medicalTestReport, patient_medical_condition: patientMedicalCondition})
    .where({id: patient.id})
    .execute()

export {
    updateUserEntity,
    updatePatientEntity,
    updateMedicalConditionEntity,
    updateDoctorAvailabilityEntity,
    updateDoctorForeignKeys,
    updatePatientForeignKeys
};