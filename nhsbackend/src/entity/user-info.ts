import {Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany} from "typeorm"
import {Doctors} from "./doctors"
import {Patients} from "./patients"

@Entity('User Info')
export class UserInfo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column()
    bloodGroup: string

    @Column()
    gender: string

    @Column({type:"date"})
    dob: string

    @Column()
    address: string

    @Column()
    contact: string

    @Column()
    emergencyContactName: string

    @Column()
    emergencyContactNumber: string

    @Column()
    officialIdType: string

    @Column()
    officialIdTypeNumber: string

    @OneToOne(() => Doctors, (doctors) => doctors.id)
    doctor: Doctors

    @OneToOne(() => Patients, (patients) => patients.id)
    patient: Patients



}