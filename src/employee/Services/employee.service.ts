/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Employee } from '../schemas/Employee.schema';
import { EmployeeCreateDto } from '../Dto/EmployeeCreate.dto';
// import { v1 as uuid } from 'uuid'
// import { EmployeeSearchDto } from './EmployeeSearch.dto';
// import { EmployeeUpdateDto } from './EmployeeUpdate.dto';
// import { Messages } from './Messages.data';
import { EmployeeRepository } from '../repositories/Employee.repository';

@Injectable()
export class EmployeeService {

    constructor(private employeeRepository: EmployeeRepository){}

    async getAllEmployees(): Promise<Employee[]> {
        return await this.employeeRepository.getAll();
    }

    async createEmployee(employeeCreateDto: EmployeeCreateDto): Promise <Employee> {
        return await this.employeeRepository.create(employeeCreateDto);
    }


    // employeeSearch(employeeSearchDto: EmployeeSearchDto) {
    //     const { status, name } = employeeSearchDto;
    //     const employees = this.getAllEmployees();
    //     if (status) {
    //         this.employees = employees.filter(employee => employee.status === status);
    //         //   console.log(employees)
    //     }
    //     if (name) {
    //         this. employees = employees.filter(employee => employee.firstName.includes(name) || employee.lastName.includes(name))
    //         console.log(employees)
    //     }
    //     return employees;
    // }

    // getEmployeeById(id: string): Employee {
    //     const employees = this.getAllEmployees();
    //     const employee = employees.find(employee => employee.id === id)
    //     if (!employee) {
    //         throw new NotFoundException(`${id} ${Messages.EMPLOYEE_NOT_EXSIST}`)
    //     }
    //     return employee
    // }
    // updateEmployee(employeeUpdatedto: EmployeeUpdateDto): Employee {

    //     const { id, city } = employeeUpdatedto;
    //     const employee = this.getEmployeeById(id)
    //     employee.nearestCity = city
    //     return employee;
    // }

    // deleteEmployee(id: string): boolean {
    //     const employees = this.getAllEmployees();
    //     this.employees = employees.filter(employee => employee.id != id)
    //     return (employees.length != this.employees.length)
    // }
}
