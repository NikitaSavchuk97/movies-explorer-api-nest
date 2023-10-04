require('dotenv').config();

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

export const {
	NODE_ENV,
	DATABASE_URL,
	PORT
} = process.env;

@Module({
	imports: [UsersModule, MongooseModule.forRoot(DATABASE_URL)],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
