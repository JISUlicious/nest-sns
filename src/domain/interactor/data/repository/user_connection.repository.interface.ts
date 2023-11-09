import { UserConnectionVo } from 'src/infra/data/typeorm/vo/user_connection.vo';

export interface IUserConnectionRepository {
  update(connection: UserConnectionVo): Promise<void>;
}
