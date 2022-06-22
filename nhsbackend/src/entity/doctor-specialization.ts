import {Entity, Column, PrimaryGeneratedColumn, OneToOne} from "typeorm"
import { Doctors } from "./doctors"
@Entity('Doctor Specialization')
export class DoctorSpecialization {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string

    @OneToOne(() => Doctors, (doctor) => doctor.id)
    doctor: Doctors
}