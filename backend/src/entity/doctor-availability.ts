import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne, BaseEntity,} from "typeorm"
import {Doctor} from "./doctor";

@Entity("doctor_availability")
export class DoctorAvailability extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("simple-json")
    time:{
        available_from: string,
        available_to: string
    }

    @Column("simple-array")
    weekend: string[]


    @OneToOne(() => Doctor, doctors => doctors.id, { onDelete: "CASCADE"})
    @JoinColumn()
    doctor: Doctor
}