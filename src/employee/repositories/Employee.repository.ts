/* eslint-disable prettier/prettier */

import {  Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Employee, EmployeeDocument } from "../schemas/Employee.schema";
import { Model } from "mongoose";
import { EmployeeCreateDto } from "../Dto/EmployeeCreate.dto";

@Injectable()
export class EmployeeRepository{
    constructor(
        @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
    ){}

    async create(employeeCreateDto: EmployeeCreateDto): Promise<Employee>{
        const newEmployee = new this.employeeModel(employeeCreateDto);
        return await newEmployee.save();
    }

    async getAll(): Promise<Employee[]>{
        return await this.employeeModel.find();
    }
}