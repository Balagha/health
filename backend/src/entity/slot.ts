import {Doctor} from "./doctor";
import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity('slot')
export class Slot extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'time' })
    start_time: string;

    @Column({ type: 'time' })
    end_time: string;

    @Column()
    day_name: string;

    @ManyToOne(() => Doctor, doctor => doctor.slot)
    @JoinColumn()
    doctor: Doctor;

}