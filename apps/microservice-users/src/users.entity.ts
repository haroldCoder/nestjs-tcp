import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Users{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar", length: 50})
    name: string;

    @Column({type: 'varchar', length: 13})
    contact: string;

    @Column({type: 'int'})
    age: number;

    @Column({type: 'text'})
    email: string
}