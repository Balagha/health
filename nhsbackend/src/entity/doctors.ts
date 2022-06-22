import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm"
import {DoctorSpecialization} from "./doctor-specialization"
import {UserInfo} from "./user-info"

@Entity()
export class Doctors {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    govtID: string

    @OneToOne(() => DoctorSpecialization, (doctorSpecialize) => doctorSpecialize.id)
    @JoinColumn()
    doctorSpecialize: DoctorSpecialization

    @OneToOne(() => UserInfo, (user_info) => user_info.id) //user
    @JoinColumn()
    user_info: UserInfo
}