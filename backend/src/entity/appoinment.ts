import {Doctor} from "./doctor";
import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Slot} from "./slot";
import {Patient} from "./patient";
import {User} from "./user";

@Entity('appointment')
export class Appointment extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Doctor, doctor => doctor.id)
    @JoinColumn()
    doctor: Doctor;

    @ManyToOne(() => User, (user_info) => user_info.id)
    @JoinColumn()
    patient: Patient;

    @ManyToOne(() => Slot, slot=> slot.id)
    @JoinColumn()
    slot: Slot;

    @Column({type: 'date'})
    appointment_date: string

}