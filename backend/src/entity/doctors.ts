import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity} from "typeorm"
import {DoctorSpecialization} from "./doctor-specialization"
import {UserInfo} from "./user-info"

@Entity()
export class Doctors extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    govtRegNo: string

    @OneToOne(() => DoctorSpecialization, (doctorSpecialize) => doctorSpecialize.id, { onDelete: "CASCADE"})
    @JoinColumn()
    specialization: DoctorSpecialization

    @OneToOne(() => UserInfo, (user_info) => user_info.id)
    @JoinColumn()
    userInfo: UserInfo
}