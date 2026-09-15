import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, type Relation, JoinColumn } from "typeorm";
import { Product } from "../../products/entities/product.entity.js";
import { Order } from "./order.entity.js";

@Entity('order_items')
export class OrderItem{
    @PrimaryGeneratedColumn()
    order_item_id: number
    @Column({type: 'integer'})
    quantity: number
    @Column({type: 'decimal', precision:10, scale:2})
    unit_price: number
    @Column({type: 'decimal', precision:10, scale:2})
    subtotal: number
    @ManyToOne(()=>Order, (order)=> order.order_items)
    @JoinColumn({ name:'order_id'})
    order: Relation<Order>[]
    @ManyToOne(()=>Product, (product)=> product.order_items)
    @JoinColumn({ name:'product_id'})
    product: Relation<Product>[]
}