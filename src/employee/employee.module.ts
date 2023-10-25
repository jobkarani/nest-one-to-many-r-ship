/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EmployeeService } from './Services/employee.service';
import { EmployeeController } from './controllers/employee.controller';
import { EmployeeRepository } from './repositories/Employee.repository';
import { Employee, EmployeeSchema } from './schemas/Employee.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { VehicleController } from './controllers/vehicle.controller';
import { VehicleService } from './Services/vehicle.service';
import { VehicleRepository } from './repositories/Vehicle.repository';
import { Vehicle, VehicleSchema } from './schemas/Vehicle.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {name: Employee.name, schema: EmployeeSchema},
    {name: Vehicle.name, schema: VehicleSchema}
  ])],
  providers: [EmployeeService, EmployeeRepository, VehicleService, VehicleRepository],
  controllers: [EmployeeController, VehicleController],
})
export class EmployeeModule {}
