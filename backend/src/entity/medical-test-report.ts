import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Patient} from "./patient";

@Entity("Medical Test Report")
export class MedicalTestReport extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("simple-json")
    test:{
        name: string,
        type: string,
        time: string,
        reportDeliveryTime: string,
        result: string
    }

    @Column({type: "text"})
    comments: string;

    @ManyToOne(() => Patient, (patient) => patient.id, { onDelete: "CASCADE"})
    @JoinColumn()
    patient: Patient

}