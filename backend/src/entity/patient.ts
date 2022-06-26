import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, BaseEntity} from "typeorm";
import {User} from "./user";

@Entity()
export class Patient extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    profession: string

    @OneToOne(() => User, (user_info) => user_info.id, { onDelete: "CASCADE"})
    @JoinColumn()
    user_id: User;

}