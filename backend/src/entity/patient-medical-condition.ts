import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity,} from "typeorm"
import {Patient} from "./patient"

@Entity('patient_medical_condition')
export class PatientMedicalCondition extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    last_checkup_time: string

    @Column()
    blood_pressure: string

    @Column()
    weight: string;

    @Column()
    height: string;

    @OneToOne(() => Patient, (patient) => patient.id, { onDelete: "CASCADE"})
    @JoinColumn()
    patient: Patient
}