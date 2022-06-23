import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, BaseEntity} from "typeorm"
import {UserInfo} from "./user-info"
import {Prescriptions} from "./prescriptions"

@Entity()
export class Patients extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    profession: string

    @OneToOne(() => UserInfo, (user_info) => user_info.id)
    @JoinColumn()
    userInfo: UserInfo;

    @OneToMany(() => Prescriptions, prescriptions => prescriptions.id,{ onDelete: "CASCADE"})
    @JoinColumn()
    prescriptions: Prescriptions[];
}