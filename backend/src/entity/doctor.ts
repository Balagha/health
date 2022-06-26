import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity} from "typeorm";
import {User} from "./user";

@Entity()
export class Doctor extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    govt_reg_no: string

    @OneToOne(() => User, (user_info) => user_info.id, { onDelete: "CASCADE"})
    @JoinColumn()
    user_id: User
}