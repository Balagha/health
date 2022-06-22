import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany} from "typeorm"
import {UserInfo} from "./user-info"
import {Prescriptions} from "./prescriptions"

@Entity()
export class Patients {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    profession: string

    @OneToOne(() => UserInfo, (user_info) => user_info.id)
    @JoinColumn()
    userInfo: UserInfo;

    @OneToMany(() => Prescriptions, prescriptions => prescriptions.id,{ onDelete: "CASCADE"})
    prescriptions: Prescriptions[];
}