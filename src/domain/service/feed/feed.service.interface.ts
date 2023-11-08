import { FeedVo } from 'src/infra/data/typeorm/vo/feed.vo';
import {
  FeedLikeDto,
  FeedsDto,
  FeedCreateDto,
  FeedCommentDto,
  FeedCommentDeleteDto,
} from '../dto/feed.dto';

export interface IFeedService {
  getAll(): Promise<FeedsDto>;
  createComment(feedCommentDto: FeedCommentDto): Promise<void>;
  likeFeed(feedLikeDto: FeedLikeDto): Promise<void>;
  createFeed(feedCreateDto: FeedCreateDto): Promise<void>;
  updateFeed(feedId: number, feedUpdateDto: FeedCreateDto): Promise<void>;
  getOne(feedId: number): Promise<FeedVo>;
  deleteComment(feedCommentDeleteDto: FeedCommentDeleteDto): Promise<void>;
}
