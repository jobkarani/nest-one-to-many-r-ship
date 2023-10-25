/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [EmployeeModule, MongooseModule.forRoot("mongodb+srv://jobkarani084j:3E3cCudQuzVr4xWP@cluster0.ylohv4w.mongodb.net/")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
