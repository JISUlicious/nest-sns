import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ProfileVo } from './profile.vo';
import { EducationInstituteVo } from './education_institute.vo';

@Entity({
  name: 'profile_education',
})
export class ProfileEducationVo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 200,
    default: '',
  })
  course: string; // 학과, 전공 설명 입력

  @Column({
    type: 'varchar',
    length: 1000,
    default: '',
    nullable: true,
  })
  description: string; // 추가 정보

  @Column({
    type: 'date',
  })
  startDate: Date;

  @Column({
    type: 'date',
    nullable: true,
  })
  endDate: Date | null;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;

  @ManyToOne(() => ProfileVo)
  @JoinColumn({
    name: 'profileId', // foreign key 이름
    referencedColumnName: 'id', // 외래 키가 참조할 column
  })
  profile: ProfileVo;

  @ManyToOne(() => EducationInstituteVo, {
    cascade: true,
  })
  @JoinColumn()
  educationInstitute: EducationInstituteVo;
}
