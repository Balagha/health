import {DataSource} from "typeorm"
import "reflect-metadata"

import {UserInfo} from "./entity/user-info";
import {Doctors} from "./entity/doctors";
import {DoctorSpecialization} from "./entity/doctor-specialization";
import {Patients} from "./entity/patients";
import {Pescriptions} from "./entity/prescriptions"
import {PatientMedicalCondition} from "./entity/patients-medical-condition";
import {MedicalTestReport} from "./entity/medical-test-report";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [
        UserInfo,
        Doctors,
        DoctorSpecialization,
        Patients,
        Pescriptions,
        PatientMedicalCondition,
        MedicalTestReport
    ],
    subscribers: [],
    migrations: [],
})