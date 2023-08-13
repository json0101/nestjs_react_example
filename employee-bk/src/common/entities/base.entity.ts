import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export default abstract class BaseEntity {

  @Column({
    type: 'bit',
    default: 1,
  })
  active: number;
}