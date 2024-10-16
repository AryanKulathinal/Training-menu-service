import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './menu/entities/menu.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mongodb',
      host:'0.0.0.0',
      port:27017,
      database:'mydb',
      entities:[Menu],
      useUnifiedTopology:true,
      useNewUrlParser:true,
    }),MenuModule],
})

export class AppModule {}
