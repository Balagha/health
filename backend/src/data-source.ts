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
    type: "postgres" as any,
    host: "health-database.cnmhcf4uohzv.us-east-1.rds.amazonaws.com" as any,
    port: 5432 as any,
    username: "postgres",
    password: "postgres",
    database: "healthdb",
    synchronize: true as any,
    logging: true as any,
    /*type: process.env.TYPE as any,
    host: process.env.HOST as any,
    port: process.env.PORT as any,
    username: process.env.DATABASE_USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: process.env.SYNCHRONIZE as any,
    logging: process.env.LOGGING as any,*/
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
