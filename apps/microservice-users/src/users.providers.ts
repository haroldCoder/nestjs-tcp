import { DataSource } from "typeorm";
import { Users } from "./users.entity";


export const userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Users),
        Inject: ['DATA_SOURCE']
    }
];