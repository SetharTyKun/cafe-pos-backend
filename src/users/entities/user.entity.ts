import { Entity, PrimaryGeneratedColumn, Column, OneToMany, type Relation } from "typeorm";
import { UserRole } from "../../common/enums/user-roles.enums.js";
import { Order } from "../../orders/entities/order.entity.js";

@Entity('users')
export class User{
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({ type: 'varchar'})
    username: string;

    @Column({ type: "varchar"})
    password: string;

    @Column({ type: "enum", enum: UserRole, default: UserRole.CASHIER})
    role: UserRole;

    @OneToMany(()=> Order, (order)=> order.user)
    order: Relation<Order[]>;
}