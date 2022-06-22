import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany} from "typeorm"
import {UserInfo} from "./user-info"
import {Pescriptions} from "./prescriptions"

@Entity()
export class Patients {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    profession: string

    @OneToOne(() => UserInfo, (user_info) => user_info.id)
    @JoinColumn()
    user_info: UserInfo;

    @OneToMany(() => Pescriptions, prescriptions => prescriptions.id,{ onDelete: "CASCADE"})
    prescripts: Pescriptions[];
}