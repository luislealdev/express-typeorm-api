import { DataSource } from 'typeorm';
import { User } from './entities/User';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'luisleal',
    password: 'root',
    database: 'typeormcrudrestapi',
    entities: [User],
    logging: true,
    synchronize: true
});