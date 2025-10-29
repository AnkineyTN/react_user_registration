/* eslint-disable prettier/prettier */
import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  CreateDateColumn 
} from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;
}