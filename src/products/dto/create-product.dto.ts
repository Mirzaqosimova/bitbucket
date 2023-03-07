import { IsEnum, IsNumber, IsString } from "class-validator";
import { ProductType } from "src/enums/ProductType";

export class CreateProductDto {

    @IsString()
    name: string;
    
    @IsNumber()
    weight: number;

    @IsEnum(ProductType)
    status: ProductType;
}
