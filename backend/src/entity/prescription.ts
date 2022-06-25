import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne, BaseEntity,} from "typeorm"
import { Patient} from "./patient"
import {Doctor} from "./doctor";

@Entity()
export class Prescription extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "text"})
    problem_statement: string

    @Column()
    medical_tests: string

    @Column()
    advise: string

    @Column()
    medicine: string

    @ManyToOne(() => Patient, patients => patients.id, { onDelete: "CASCADE"})
    @JoinColumn()
    patient: Patient;

    @OneToOne(() => Doctor, doctors => doctors.id)
    @JoinColumn()
    doctor: Doctor
}