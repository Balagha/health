import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity,} from "typeorm"
import {Patient} from "./patient"

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

    @OneToOne(() => Patient, (patient) => patient.id, { onDelete: "CASCADE"})
    @JoinColumn()
    patient: Patient
}