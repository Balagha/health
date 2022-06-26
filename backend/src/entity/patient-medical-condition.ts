import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity,} from "typeorm"
import {Patient} from "./patient"

@Entity('patient_medical_condition')
export class PatientMedicalCondition extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "date"})
    last_checkup_time: string

    @Column()
    blood_pressure: string

    @Column({type: "float"})
    weight: string;

    @Column({type: "float"})
    height: string;

    @OneToOne(() => Patient, (patient) => patient.id, { onDelete: "CASCADE"})
    @JoinColumn()
    patient_id: Patient
}