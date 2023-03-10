import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {    
    return {
      type: this.configService.get("DB_CLIENT"),
      host: this.configService.get("DB_HOST"),
      port:this.configService.get("DB_PORT"),
      username: this.configService.get("DB_USER"),
      password: this.configService.get("DB_PASSWORD"),
      database: this.configService.get("DB_NAME"),
      autoLoadEntities: true,
      synchronize: true,
    } as TypeOrmModuleOptions;
  }
}