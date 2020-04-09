import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Address {
  @PrimaryColumn()
  id: number;

  @Column()
  Address: string;

  @Column()
  emp_id: number;

}
