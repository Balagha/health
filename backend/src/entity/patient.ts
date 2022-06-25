import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, BaseEntity} from "typeorm"
import {UserInfo} from "./user-info"
import {Prescriptions} from "./prescriptions"

@Entity()
export class Patient extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    profession: string

    @OneToOne(() => UserInfo, (user_info) => user_info.id, { onDelete: "CASCADE"})
    @JoinColumn()
    userInfo: UserInfo;

}