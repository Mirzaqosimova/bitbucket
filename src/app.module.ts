import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './config/config.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
   ConfigModule.forRoot({isGlobal: true,}),
   TypeOrmModule.forRootAsync({
    useClass: TypeOrmConfigService,
  }),
    ProductsModule
  ],
})
export class AppModule {}
