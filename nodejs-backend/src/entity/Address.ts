import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Address {
  @PrimaryColumn()
  Id: number;

  @Column()
  Address: string;

  @Column()
  CustomerId: number;
}
