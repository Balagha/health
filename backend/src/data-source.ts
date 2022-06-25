import {DataSource} from "typeorm"
import "reflect-metadata"
import {UserInfo} from "./entity/user-info";
import {Doctors} from "./entity/doctors";
import {DoctorSpecialization} from "./entity/doctor-specialization";
import {Patient} from "./entity/patient";
import {Prescriptions} from "./entity/prescriptions"
import {PatientMedicalCondition} from "./entity/patients-medical-condition";
import {MedicalTestReport} from "./entity/medical-test-report";
import {DoctorAvailability} from "./entity/doctor-availability";
import 'dotenv/config'
export const AppDataSource = new DataSource({
    type: process.env.TYPE as any,
    host: process.env.HOST as any,
    port: process.env.PORT as any,
    username: process.env.DATABASE_USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: process.env.SYNCHRONIZE as any,
    logging: process.env.LOGGING as any,
    entities: [
        UserInfo,
        Doctors,
        DoctorSpecialization,
        Patient,
        Prescriptions,
        PatientMedicalCondition,
        MedicalTestReport,
        DoctorAvailability
    ],
    subscribers: [],
    migrations: [],
})
