import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Address {
  @PrimaryColumn()
  id: number;

  @Column()
  Address: string;

  @Column()
  customer_id: number;
}
