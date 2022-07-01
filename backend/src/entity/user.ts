import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm";

@Entity('user')
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    blood_group: string

    @Column()
    gender: string

    @Column({
        type:"date"
    })
    date_of_birth: string

    @Column()
    address: string

    @Column({
        unique: true,
    })
    contact_number: string

    @Column({
        unique: true,
        nullable: true
    })
    email: string

    @Column()
    emergency_contact_number: string

    @Column()
    official_id_type: string

    @Column()
    official_id_number: string

}