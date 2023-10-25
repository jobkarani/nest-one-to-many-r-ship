/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { EmployeeSearchDto } from '../Dto/EmployeeSearch.dto';
import { EmployeeService } from '../Services/employee.service';
import { Employee } from '../schemas/Employee.schema';
import { EmployeeTierValidationPipe } from 'src/employee-tier-validation.pipe';
import { EmployeeCreateDto } from '../Dto/EmployeeCreate.dto';
import { EmployeeUpdateDto } from '../Dto/EmployeeUpdate.dto';
import { Messages } from '../Messages.data';

@Controller('employee')
export class EmployeeController {
    constructor(private employeeService: EmployeeService) { }
    @Get()
    @UsePipes(ValidationPipe)
    async getAllEmployees(@Query() param: EmployeeSearchDto): Promise<Employee[]> {
        // if (Object.keys(param).length) {
        //     return this.employeeService.employeeSearch(param)
        // } else {
        //     return this.employeeService.getAllEmployees()
        // }

        return await this.employeeService.getAllEmployees();
    }

    @Post()
    @UsePipes(ValidationPipe)
    @UsePipes(new EmployeeTierValidationPipe())
    async createEmployee(@Body() employeeCreateDto: EmployeeCreateDto): Promise<Employee> {
        return await this.employeeService.createEmployee(employeeCreateDto);
    }

    // @Get('/:id')
    // getEmployeeById(@Param('id') id: string): Employee {

    //     return this.employeeService.getEmployeeById(id)
    // }

    // @Put('/:id/city')
    // updateEmployee(@Param('id') id: string, @Body() employeeUpdateDto: EmployeeUpdateDto): Employee {
    //     employeeUpdateDto.id = id
    //     return this.employeeService.updateEmployee(employeeUpdateDto)
    // }
    // @Delete('/:id')
    // @HttpCode(204)
    // deleteEmployee(@Param('id') id: string) {
    //     if (!this.employeeService.deleteEmployee(id)) {
    //         throw new NotFoundException(Messages.EMPLOYEE_NOT_EXSIST)
    //     }
    // }
}
