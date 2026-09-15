import { Entity, PrimaryGeneratedColumn, Column, OneToMany, type Relation } from "typeorm";
import { Product } from "../../products/entities/product.entity.js";

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn()
    category_id: number;

    @Column()
    category_name: string;

    @OneToMany(() => Product, (product) => product.category)
    products: Relation<Product>[]
}
