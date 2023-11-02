import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserVo } from './user.vo';
import { FeedImageVo } from './feed_image.vo';
import { FeedVideoVo } from './feed_video.vo';

@Entity({
  name: 'feed',
})
export class FeedVo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 1000,
    default: '',
  })
  content: string;

  @ManyToOne(() => UserVo, (user) => user.feeds)
  author: UserVo;

  @OneToMany(() => FeedImageVo, (feedImage) => feedImage.feed)
  images: FeedImageVo[];

  @OneToOne(() => FeedVideoVo, (feedVideo) => feedVideo.feed)
  video: FeedVideoVo;

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
}
