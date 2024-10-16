import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Menu {
    @ObjectIdColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    cuisine:string;

    @Column()
    price:number;

    @Column()
    desc:string;


}
