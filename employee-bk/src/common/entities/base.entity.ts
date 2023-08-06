import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export default abstract class BaseEntity {
  @CreateDateColumn()
  created_at: Date;

  @Column({
    type: 'varchar',
  })
  created_by: string;

  @UpdateDateColumn({
    nullable: true,
  })
  updated_at: Date;

  @Column({
    nullable: true,
    type: 'varchar',
  })
  updated_by: string;

  @Column({
    type: 'bit',
    default: 1,
  })
  active: number;
}