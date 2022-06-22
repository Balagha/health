import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Patients} from "./patients";

@Entity("Medical Test Report")
export class MedicalTestReport {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    testName: string

    @Column()
    testType: string

    @Column({type:"date"})
    timeOfTesting: string

    @Column({type:"date"})
    reportDelivaryTime: string;

    @Column({type: "text"})
    comments: string;

    @Column()
    testResult: string;

    @ManyToOne(() => Patients, (patient) => patient.id)
    @JoinColumn()
    patient: Patients

}