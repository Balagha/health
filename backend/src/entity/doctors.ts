import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity} from "typeorm"
import {DoctorSpecialization} from "./doctor-specialization"
import {UserInfo} from "./user-info"

@Entity()
export class Doctors extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    govtRegNo: string

    @OneToOne(() => UserInfo, (user_info) => user_info.id, { onDelete: "CASCADE"})
    @JoinColumn()
    userInfo: UserInfo
}