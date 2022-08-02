import {DataSource} from "typeorm"
import "reflect-metadata"
import {User} from "./entity/user";
import {Doctor} from "./entity/doctor";
import {DoctorSpecialization} from "./entity/doctor-specialization";
import {Patient} from "./entity/patient";
import {Prescription} from "./entity/prescription"
import {PatientMedicalCondition} from "./entity/patient-medical-condition";
import {MedicalTestReport} from "./entity/medical-test-report";
import {DoctorAvailability} from "./entity/doctor-availability";
import 'dotenv/config'
export const AppDataSource = new DataSource({
    type: process.env.DB_TYPE as any,
    host: process.env.DB_HOST as any,
    port: process.env.DB_PORT as any,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: process.env.DB_SYNCHRONIZE as any,
    logging: process.env.DB_LOGGING as any,
    entities: [
        User,
        Doctor,
        DoctorSpecialization,
        Patient,
        Prescription,
        PatientMedicalCondition,
        MedicalTestReport,
        DoctorAvailability
    ],
    subscribers: [],
    migrations: [],
})