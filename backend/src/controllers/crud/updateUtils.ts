import {User} from "../../entity/user";
import {Patient} from "../../entity/patient";
import {PatientMedicalCondition} from "../../entity/patient-medical-condition";
import {DoctorAvailability} from "../../entity/doctor-availability";
import {Doctor} from "../../entity/doctor";

const updateUserEntity = (req, entity) => User.createQueryBuilder()
    .update({address: req.body.address, emergency_contact_number: req.body.emergency_contact_number})
    .where({id: entity.user.id})
    .execute()
const updatePatientEntity = (req, entity) => Patient.createQueryBuilder()
    .update({profession: req.body.profession})
    .where({id: entity.id})
    .execute()

const updateMedicalConditionEntity = (req, entity) => PatientMedicalCondition.createQueryBuilder()
    .update({last_checkup_time: req.body.last_checkup_time, blood_pressure: req.body.blood_pressure, weight: req.body.weight, height: req.body.height})
    .where({id: entity.patient_medical_condition.id})
    .execute()

const updateDoctorAvailabilityEntity = (req, entity) => DoctorAvailability.createQueryBuilder()
    .update({available_from: req.body.weekend, available_to: req.body.weekend, weekend: req.body.weekend})
    .where({id: entity.doctor_availability.id})
    .execute()

const updateDoctorForeignKeys = (doctor, doctorAvailability, doctorSpecialization) => Doctor
    .createQueryBuilder()
    .update({doctor_availability: doctorAvailability, doctor_specialization: doctorSpecialization})
    .where({id: doctor.id})
    .execute()

const updatePatientForeignKeys = (patient, medicalTestReport, patientMedicalCondition) => Patient
    .createQueryBuilder()
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