import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, type Relation } from "typeorm";
import { Category } from "../../categories/entities/category.entity.js";

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    product_id: number;

    @Column()
    product_name: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @Column({ default: true })
    is_available: boolean;

    @ManyToOne(() => Category, (category) => category.products)
    @JoinColumn({ name: 'category_id' })
    category: Relation<Category>;
}
