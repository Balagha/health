import {Doctor} from "./doctor";
import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Slot} from "./slot";
import {Patient} from "./patient";

@Entity('appointment')
export class Appointment extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Doctor, doctor => doctor.id)
    @JoinColumn()
    doctor: Doctor;

    @ManyToOne(() => Patient, patient => patient.id)
    @JoinColumn()
    patient: Patient;

    @ManyToOne(() => Slot, slot=> slot.id)
    @JoinColumn()
    slot: Slot;

    @Column({type: 'date'})
    appointment_date: string

}