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
  status: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar', nullable: true })
  service: string;

  @Column({ type: 'varchar', nullable: true })
  primary_job_interest: string;

  @Column({ type: 'varchar', nullable: true })
  title: string;

  @Column({ type: 'varchar', nullable: true })
  level: string;

  @Column({ type: 'varchar', nullable: true })
  linked_in: string;

  @Column({ type: 'varchar', nullable: true })
  description: string;

  @Column({ type: 'varchar', nullable: true })
  phone: string;

  @Column({ type: 'int', default: 0 })
  years_of_experience: number;

  @Column({ type: 'varchar', nullable: true })
  skills: string;

  @Column({ type: 'bool', nullable: true })
  remote_experience: boolean;

  // English Video

  // English Skill
  @Column({ type: 'timestamptz', nullable: true })
  english_video_request_date: Date;

  @Column({ type: 'timestamptz', nullable: true })
  english_video_request_deadline: Date;

  @Column({ type: 'varchar', nullable: true })
  english_video_by: string;

  @Column({ type: 'varchar', nullable: true })
  english_video_link: string;

  @Column({ type: 'varchar', nullable: true })
  english_video_result: string;

  @Column({ type: 'varchar', nullable: true })
  english_video_email: string;

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
