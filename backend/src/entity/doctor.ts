import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity} from "typeorm";
import {User} from "./user";
import {DoctorAvailability} from "./doctor-availability";
import {DoctorSpecialization} from "./doctor-specialization";

@Entity()
export class Doctor extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    govt_reg_no: string

    @OneToOne(() => User, (user_info) => user_info.id, { onDelete: "CASCADE"})
    @JoinColumn()
    user: User

    @OneToOne(() => DoctorAvailability, doctorAvailability => doctorAvailability.id)
    @JoinColumn()
    doctor_availability: DoctorAvailability

    @OneToOne(() => DoctorSpecialization, doctorSpecialization => doctorSpecialization.id)
    @JoinColumn()
    doctor_specialization: DoctorSpecialization
}