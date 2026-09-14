import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, type Relation} from "typeorm";
import { Category } from "../../categories/entities/category.entity.js";

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    product_id: number;

    @Column({type: 'varchar'})
    product_name: string;

    @ManyToOne(()=> Category, (category)=> category.products)
    @JoinColumn({ name: 'category_id'})
    category: Relation<Category>;
}