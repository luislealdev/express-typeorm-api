import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'luisleal',
    password: 'root',
    database: 'typeormcrudrestapi',
    entities: [],
    logging: true,
});