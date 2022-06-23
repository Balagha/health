import {Entity, Column, PrimaryGeneratedColumn, OneToOne, BaseEntity, JoinColumn} from "typeorm"
import {Doctors} from "./doctors"
import {Patients} from "./patients"

@Entity('User Info')
export class UserInfo extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column()
    bloodGroup: string

    @Column()
    gender: string

    @Column({
        type:"date"
    })
    dob: string

    @Column()
    address: string

    @Column({
        unique: true,
    })
    contactNumber: string

    @Column({
        unique: true,
        nullable: true
    })
    email: string

    @Column()
    emergencyContactName: string

    @Column({
        unique: true,
    })
    emergencyContactNumber: string

    @Column("simple-json")
    officialId:{
        type: string,
        number: string
    }

    @OneToOne(() => Doctors, (doctors) => doctors.id)
    @JoinColumn()
    doctor: Doctors

    @OneToOne(() => Patients, (patients) => patients.id)
    @JoinColumn()
    patient: Patients

}