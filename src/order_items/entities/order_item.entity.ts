import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, type Relation } from "typeorm";
import { Order } from "../../orders/entities/order.entity.js";
import { Product } from "../../products/entities/product.entity.js";

@Entity('order_items')
export class OrderItem {
    @PrimaryGeneratedColumn()
    order_item_id: number;

    @Column()
    quantity: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    unit_price: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    subtotal: number;

    @ManyToOne(() => Order, (order) => order.order_items)
    @JoinColumn({ name: 'order_id' })
    order: Relation<Order>;

    @ManyToOne(() => Product)
    @JoinColumn({ name: 'product_id' })
    product: Relation<Product>;
}
