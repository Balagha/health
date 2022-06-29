import {Entity, Column, PrimaryGeneratedColumn, OneToOne, BaseEntity, JoinColumn} from "typeorm"
import { Doctor } from "./doctor"

@Entity('doctor_specialization')
export class DoctorSpecialization extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string

    @OneToOne(() => Doctor, (doctor) => doctor.id, { onDelete: "CASCADE"})
    @JoinColumn()
    doctor: Doctor
}