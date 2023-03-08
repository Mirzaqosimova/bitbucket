import { ProductType } from "src/enums/ProductType";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar"})
    name: string;
    
    @Column({ type: "real"})
    measurement: number;
  
    @Column({ type: 'enum', enum: ProductType })
    type: ProductType;

    
    @CreateDateColumn({ type: 'timestamp', precision: 3 ,default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date;
}
