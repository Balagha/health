import {Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Patients} from "./patients";

export class MedicalTestReport {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    testName: string

    @Column()
    testType: string

    @Column()
    timeOfTesting: string

    @Column()
    reportDelivaryTime: string;

    @Column()
    comments: string;

    @Column()
    testResult: string;

    @ManyToOne(() => Patients, (patient) => patient.id)
    @JoinColumn()
    patient: Patients

}