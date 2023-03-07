import { ProductType } from "src/enums/ProductType";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar"})
    name: string;
    
    @Column({ type: "real"})
    weight: number;
  
    @Column({ type: 'enum', enum: ProductType })
    status: ProductType;

    @CreateDateColumn({ type: 'timestamp', precision: 3 })
    createdAt: Date;
}
