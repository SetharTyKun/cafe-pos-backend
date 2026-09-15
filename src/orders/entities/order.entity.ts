import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, type Relation } from "typeorm";
import { User } from "../../users/entities/user.entity.js";
import { OrderItem } from "../../order_items/entities/order_item.entity.js";

export enum PaymentMethod {
    CASH = "cash",
    BANK_QR = "bank_qr",
}

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn()
    order_id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    order_date: Date;

    @Column()
    total_amount: number;

    @Column({ type: 'enum', enum: PaymentMethod })
    payment_method: PaymentMethod;

    @Column({ type: 'varchar', nullable: true })
    payment_provider: string;

    @ManyToOne(() => User, (user) => user.orders)
    @JoinColumn({ name: 'user_id' })
    user: Relation<User>;

    @OneToMany(() => OrderItem, (order_item) => order_item.order)
    order_items: Relation<OrderItem>[];
}
