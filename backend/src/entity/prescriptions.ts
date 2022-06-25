import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne, BaseEntity,} from "typeorm"
import { Patient} from "./patient"
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

    @ManyToOne(() => Patient, patients => patients.id, { onDelete: "CASCADE"})
    @JoinColumn()
    patient: Patient;

    @OneToOne(() => Doctors, doctors => doctors.id)
    @JoinColumn()
    doctor: Doctors
}