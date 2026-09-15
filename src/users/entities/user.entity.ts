import { Entity, PrimaryGeneratedColumn, Column, OneToMany, type Relation } from 'typeorm';
import { Order } from '../../orders/entities/order.entity.js';

export enum Sex {
    MALE = 'male',
    FEMALE = 'female',
}

export enum UserRole {
    ADMIN = 'admin',
    CASHIER = 'cashier',
}

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    password_hash: string;

    @Column({ type: 'enum', enum: Sex })
    sex: Sex;

    @Column({ type: 'enum', enum: UserRole })
    role: UserRole;

    @OneToMany(() => Order, (order) => order.user)
    orders: Relation<Order>[]
}
