import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'talent' })
export class TalentEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar', nullable: true })
  linkedIn: string;

  @Column({ type: 'varchar', nullable: true })
  description: string;

  @Column({ type: 'varchar' })
  status: string;

  @Column({ type: 'varchar', nullable: true })
  phone: string;

  @Column({ type: 'int', default: 0 })
  yearsOfExperience: number;

  @Column({ type: 'varchar', nullable: true })
  jobInterest: string;

  @Column({ type: 'varchar', nullable: true })
  skills: string;

  @Column({ type: 'varchar', nullable: true })
  title: string;

  // English Skill

  @Column({ type: 'varchar', nullable: true })
  englishSkillResult: string;

  @Column({ type: 'integer', nullable: true, default: 0 })
  englishSkillGrade: number;

  @Column({ type: 'timestamptz', nullable: true })
  englishSkillDate: Date;

  @Column({ type: 'varchar', nullable: true })
  englishSkillBy: string;
  // English Skill

  // Technical - theorical Skill

  @Column({ type: 'varchar', nullable: true })
  technicalTheoricalSkillResult: string;

  @Column({ type: 'integer', nullable: true, default: 0 })
  technicalTheoricalSkillGrade: number;

  @Column({ type: 'timestamptz', nullable: true })
  technicalTheoricalSkillDate: Date;

  @Column({ type: 'varchar', nullable: true })
  technicalTheoricalSkillBy: string;
  // Technical - theorical  Skill

  // Technical - practical Skill

  @Column({ type: 'varchar', nullable: true })
  technicalPracticalSkillResult: string;

  @Column({ type: 'integer', nullable: true, default: 0 })
  technicalPracticalSkillGrade: number;

  @Column({ type: 'timestamptz', nullable: true })
  technicalPracticalSkillDate: Date;

  @Column({ type: 'varchar', nullable: true })
  technicalPracticalSkillBy: string;
  // Technical - practical  Skill

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
