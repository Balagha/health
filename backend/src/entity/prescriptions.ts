import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne, BaseEntity,} from "typeorm"
import { Patients} from "./patients"
import {Doctors} from "./doctors";

@Entity()
export class Prescriptions extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "text"})
    problemStatement: string

    @Column()
    medicalTests: string

    @Column()
    advise: string

    @Column()
    medicine: string

    @ManyToOne(() => Patients, patients => patients.id)
    @JoinColumn()
    patient: Patients;

    @OneToOne(() => Doctors, doctors => doctors.id)
    @JoinColumn()
    doctor: Doctors
}