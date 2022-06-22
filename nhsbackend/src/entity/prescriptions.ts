import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne,} from "typeorm"
import { Patients} from "./patients"

@Entity()
export class Prescriptions {
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
    patient: Patients;

}