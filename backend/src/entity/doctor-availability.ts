import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne, BaseEntity,} from "typeorm"
import {Doctor} from "./doctor";

@Entity("doctor_availability")
export class DoctorAvailability extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    available_from: string

    @Column()
    available_to: string

    @Column("varchar",{ array: true })
    weekend: string[]


    @OneToOne(() => Doctor, doctors => doctors.id, { onDelete: "CASCADE"})
    @JoinColumn()
    doctor: Doctor
}