import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity,} from "typeorm"
import {Patients} from "./patients"

@Entity('Patient Medical Condition')
export class PatientMedicalCondition extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

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