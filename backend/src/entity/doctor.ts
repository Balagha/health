import {BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";
import {DoctorAvailability} from "./doctor-availability";
import {DoctorSpecialization} from "./doctor-specialization";
import {Slot} from "./slot"
import {Appointment} from "./appoinment";

@Entity()
export class Doctor extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    govt_reg_no: string

    @OneToOne(() => User, (user_info) => user_info.id, { cascade: true })
    @JoinColumn()
    user: User

    @OneToOne(() => DoctorAvailability, doctorAvailability => doctorAvailability.id, {cascade: true})
    @JoinColumn()
    doctor_availability: DoctorAvailability

    @OneToMany(() => Slot, slot => slot.doctor, {cascade: true})
    @JoinColumn()
    slot: Slot[]

    @OneToOne(() => DoctorSpecialization, doctorSpecialization => doctorSpecialization.id, {cascade: true})
    @JoinColumn()
    doctor_specialization: DoctorSpecialization

    @OneToMany(() => Appointment, appointment => appointment.id, {cascade: true})
    @JoinColumn()
    appointment: Appointment[]

    @Column({ nullable: true})
    is_approved:boolean

}