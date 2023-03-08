import { NestFactory } from '@nestjs/core';
import { getConnectionToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductType } from './enums/ProductType';
const inquirer = require('inquirer');
import { Product } from './entities/product.entity';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(
    AppModule
  );
  const connection = app.get(getConnectionToken());
    const productRepository: Repository<Product> = connection.getRepository(Product);
  

  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: ['Create a new product', 'View all products'],
    },
  ]);

  if (action === 'Create a new product') {
    const { name, p_type, measurement } = await inquirer.prompt([
      {
        type: 'list',
        name: 'p_type',
        message: 'Enter product type',
        choices: ['Ice cream', 'Soft drink'],
      },
      {
        name: 'name',
        message: 'Enter product name',
      },
      {
        name: 'measurement',
        message: 'Enter product measurement',
        validate: (value: string) => !isNaN(parseFloat(value)),
      },
    ]);
   
   const type = p_type === 'Ice cream' ? ProductType.ICE_CREAM : ProductType.SOFT_DRINK;
    
    const data = await productRepository.findOne({ where: { name, type }})
     if(data != null){
      console.log("This product already exists");
      return bootstrap()
     }
    const product = new Product();
    product.name = name;
    product.type = type 
    product.measurement = parseFloat(measurement);
    console.log(product);
    
     await productRepository.save(product);

    console.log(`Product ${name} created successfully!`);
  } else if (action === 'View all products') {
    const products = await productRepository.find();
    console.log(products);
  } 
 return bootstrap();
}

bootstrap();
