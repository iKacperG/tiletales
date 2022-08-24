import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Frame } from "../../frames/entity/frame.entity";

@Entity()
export class Field {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  row: number;

  @Column()
  column: number;

  @Column()
  color: string;

  @ManyToOne((type) => Frame, (frame) => frame.id)
  frame: number;
}
