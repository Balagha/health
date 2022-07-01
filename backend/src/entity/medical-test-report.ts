import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Patient} from "./patient";

@Entity("medical_test_report")
export class MedicalTestReport extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    test_name: string
    @Column()
    test_type: string
    @Column()
    test_time: string
    @Column()
    test_report_delivery_time: string
    @Column()
    test_result: string

    @Column({type: "text"})
    comments: string;

    @ManyToOne(() => Patient, (patient) => patient.id, { onDelete: "CASCADE"})
    @JoinColumn()
    patient: Patient

}