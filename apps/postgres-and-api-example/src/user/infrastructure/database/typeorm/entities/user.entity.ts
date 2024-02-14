import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
export class UserEntityTypeorm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    comment: 'Name of user',
    length: 255,
    nullable: false,
  })
  name: string;

  @CreateDateColumn({
    comment: 'Record when user has been created',
    name: 'created_at',
    type: 'timestamptz',
  })
  createdAt?: Date;

  @DeleteDateColumn({
    comment: 'Record when user has been deleted',
    name: 'deleted_at',
    type: 'timestamptz',
  })
  deletedAt?: Date;

  @UpdateDateColumn({
    comment: 'Record when user has been updated',
    name: 'updated_at',
    type: 'timestamptz',
  })
  updatedAt?: Date;
}
