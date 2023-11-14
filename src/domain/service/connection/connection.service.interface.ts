import { ConnectionDto } from '../dto/connection.dto';

export interface IConnectionService {
  acceptConnection(connectionDto: ConnectionDto): Promise<void>;
  createConnection(connectionDto: ConnectionDto): Promise<void>;
}
