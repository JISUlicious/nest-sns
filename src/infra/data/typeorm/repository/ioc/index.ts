import { Provider } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { DATA_SOURCE } from '../../config/typeorm.config';
import { FeedVo } from '../../vo/feed.vo';
import { UserVo } from '../../vo/user.vo';
import { FeedCommentVo } from '../../vo/feed_comment.vo';
import { FeedLikeVo } from '../../vo/feed_like.vo';
import { FeedVideoVo } from '../../vo/feed_video.vo';
import { UserConnectionVo } from '../../vo/user_connection.vo';

export const FEED_TYPEORM_REPOSITORY = Symbol.for('FEED_TYPEORM_REPOSITORY');
export const FeedTypeormRepository: Provider<Repository<FeedVo>> = {
  provide: FEED_TYPEORM_REPOSITORY,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(FeedVo),
  inject: [DATA_SOURCE],
};

export const USER_TYPEORM_REPOSITORY = Symbol.for('USER_TYPEORM_REPOSITORY');
export const UserTypeormRepository: Provider<Repository<UserVo>> = {
  provide: USER_TYPEORM_REPOSITORY,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(UserVo),
  inject: [DATA_SOURCE],
};

export const FEED_COMMENT_TYPEORM_REPOSITORY = Symbol.for(
  'FEED_COMMENT_TYPEORM_REPOSITORY',
);
export const FeedCommentTypeormRepository: Provider<Repository<FeedCommentVo>> =
  {
    provide: FEED_COMMENT_TYPEORM_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(FeedCommentVo),
    inject: [DATA_SOURCE],
  };

export const FEED_LIKE_TYPEORM_REPOSITORY = Symbol.for(
  'FEED_LIKE_TYPEORM_REPOSITORY',
);
export const FeedLikeTypeormRepository: Provider<Repository<FeedLikeVo>> = {
  provide: FEED_LIKE_TYPEORM_REPOSITORY,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(FeedLikeVo),
  inject: [DATA_SOURCE],
};

export const FEED_VIDEO_TYPEORM_REPOSITORY = Symbol.for(
  'FEED_VIDEO_TYPEORM_REPOSITORY',
);
export const FeedVideoTypeormRepository: Provider<Repository<FeedVideoVo>> = {
  provide: FEED_VIDEO_TYPEORM_REPOSITORY,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(FeedVideoVo),
  inject: [DATA_SOURCE],
};

export const USER_CONNECTION_TYPEORM_REPOSITORY = Symbol.for(
  'USER_CONNECTION_TYPEORM_REPOSITORY',
);
export const UserConnectionTypeormRepository: Provider<
  Repository<UserConnectionVo>
> = {
  provide: USER_CONNECTION_TYPEORM_REPOSITORY,
  useFactory: (dataSource: DataSource) =>
    dataSource.getRepository(UserConnectionVo),
  inject: [DATA_SOURCE],
};
