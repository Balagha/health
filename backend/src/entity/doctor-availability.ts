import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne, BaseEntity,} from "typeorm"
import {Doctors} from "./doctors";

@Entity("Doctor Availability")
export class DoctorAvailability extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("simple-json")
    time:{
        availableFrom: string,
        availableTo: string
    }

    @Column("simple-array")
    weekend: string[]


    @OneToOne(() => Doctors, doctors => doctors.id, { onDelete: "CASCADE"})
    @JoinColumn()
    doctor: Doctors
}