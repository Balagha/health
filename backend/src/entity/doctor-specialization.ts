import {Entity, Column, PrimaryGeneratedColumn, OneToOne, BaseEntity, JoinColumn} from "typeorm"
import { Doctors } from "./doctors"

@Entity('Doctor Specialization')
export class DoctorSpecialization extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string

    @OneToOne(() => Doctors, (doctor) => doctor.id)
    @JoinColumn()
    doctor: Doctors
}