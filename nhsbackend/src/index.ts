import { AppDataSource } from "./data-source"
import { UserInfo } from "./entity/user-info"
import { Doctors } from "./entity/doctors"
import { DoctorSpecialization } from "./entity/doctor-specialization"
import { Patients } from "./entity/patients"
import {Prescriptions} from "./entity/prescriptions";
import {MedicalTestReport} from "./entity/medical-test-report";
const express = require("express")
const app =express()
AppDataSource.initialize().then(async () => {
    console.log("Inserting a new user into the database...")
    const user = new UserInfo()
    user.name = "Asif Patent"
    user.bloodGroup = "Saw"
    user.gender = "Male"
    user.dob = "apatoto copy paste"
    user.address = "jani nah"
    user.contact = "apatoto copy paste"
    user.emergencyContactNumber ="apatoto copy paste"
    user.emergencyContactName  = "apatoto copy paste"
    user.officialIdType ="apatoto copy paste"
    user.officialIdTypeNumber = "apatoto copy paste"
    await AppDataSource.manager.save(user)
    const users = await AppDataSource.manager.find(UserInfo)




 /*   console.log("Inserting doctor")
    const doctor_sp= new Doctor_specialization()
    doctor_sp.title="Heart special"
    await AppDataSource.manager.save(doctor_sp)

    const doctor =new Doctors()
    doctor.govtID="bdt-123"
    doctor.doctorSpecialize=doctor_sp
    doctor.user_info= user
    await AppDataSource.manager.save(doctor)*/


    const Patient =new Patients()
    Patient.profession="Student"
    Patient.userInfo= user
    await AppDataSource.manager.save(Patient)


    const medicalTestReport = new MedicalTestReport()
        medicalTestReport.testName="tesss"
        medicalTestReport.testType="Tesst"
        medicalTestReport.timeOfTesting="Tesst"
        medicalTestReport.reportDelivaryTime="Tesst"
        medicalTestReport.comments="Tesst"
        medicalTestReport.testResult="Tesst"
        medicalTestReport.patient=Patient
    await AppDataSource.manager.save(medicalTestReport)



    const Prescription1 =new Prescriptions()
    Prescription1.advise = "bla bla"
    Prescription1.medicalTests = "Bla Ba"
    Prescription1.problemStatement = "Pla pLa"
    Prescription1.medicine = "BBBB"
    Prescription1.patient = Patient
    await AppDataSource.manager.save(Prescription1)

    const Prescription2 =new Prescriptions()
    Prescription2.patient = Patient
    Prescription2.advise = "bla bla"
    Prescription2.medicalTests = "Bla Ba"
    Prescription2.problemStatement = "Pla pLa"
    Prescription2.medicine = "BBBB"
    await AppDataSource.manager.save(Prescription2)


    console.log("Here you can setup and run express / fastify / any other framework.")


    app.listen(3000)
    app.get("/user",(req,res) => res.send("hello"))
}).catch(error => console.log(error))
