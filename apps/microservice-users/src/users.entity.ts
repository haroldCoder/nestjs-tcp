import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Users{
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 50, type: "text"})
    name: string;

    @Column({type: 'text', length: 13})
    contact: string;

    @Column({type: 'int'})
    age: number;

    @Column({type: 'text'})
    email: string
}