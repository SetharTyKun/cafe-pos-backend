import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, type Relation, OneToMany} from "typeorm";
import { Category } from "../../categories/entities/category.entity.js";
import { OrderItem } from "../../orders/entities/order-item.entity.js";
import { Order } from "../../orders/entities/order.entity.js";

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    product_id: number;
    @Column({type: 'varchar'})
    product_name: string;
    @Column({type: 'decimal', precision:5, scale:2, default: 0})
    price: number;
    @Column({default:true})
    is_available: boolean;
    @ManyToOne(()=> Category, (category)=> category.products)
    @JoinColumn({ name: 'category_id'})
    category: Relation<Category>;
    @OneToMany (()=> OrderItem, (orderItem)=> orderItem.order)
    order_items: Relation<OrderItem>[];
}