import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn,} from "typeorm"
import {Patients} from "./patients"

@Entity('Patient Medical Condition')
export class PatientMedicalCondition {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    patientId: string

    @Column({type: "date"})
    lastCheckupTime: string

    @Column()
    bloodPressure: string

    @Column({type: "float"})
    weight: string;

    @Column({type: "float"})
    height: string;

    @OneToOne(() => Patients, (patient) => patient.id)
    @JoinColumn()
    patient: Patients
}