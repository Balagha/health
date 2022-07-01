import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, BaseEntity} from "typeorm";
import {User} from "./user";
import {PatientMedicalCondition} from "./patient-medical-condition";
import {MedicalTestReport} from "./medical-test-report";

@Entity()
export class Patient extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    profession: string

    @OneToOne(() => User, (user_info) => user_info.id, { onDelete: "CASCADE"})
    @JoinColumn()
    user: User;

    @OneToOne(() => MedicalTestReport, medicalTestReport => medicalTestReport.id)
    @JoinColumn()
    medical_test_report: MedicalTestReport

    @OneToOne(() => PatientMedicalCondition, patientMedicalCondition => patientMedicalCondition.id)
    @JoinColumn()
    patient_medical_condition: PatientMedicalCondition
}