import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, type Relation, JoinColumn } from "typeorm";
import { User } from "../../users/entities/user.entity.js";
import { join } from "path";
import { OneToMany } from "typeorm";
import { OrderItem } from "./order-item.entity.js";

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn()
    order_id: number;
    @Column({ type: 'timestamp', default: ()=> 'Current_TimeStamp'})
    order_date: Date;
    @Column({ type: 'decimal', precision: 10, scale: 2, default:0})
    total_amount: number;
    @ManyToOne(()=>User, (user)=> user.order)
    @JoinColumn({name: 'user_id'})
    user: Relation<User>;
    @OneToMany(()=> OrderItem, (orderItem)=> orderItem.order, {cascade:true})
    order_items: Relation<OrderItem>[];
}