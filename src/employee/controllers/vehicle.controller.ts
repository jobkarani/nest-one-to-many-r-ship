/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { VehicleService } from '../Services/vehicle.service';
import { VehicleCreateDTO } from '../Dto/VehicleCreateDto';
import { Vehicle } from '../schemas/Vehicle.schema';

@Controller('vehicle')
export class VehicleController {
    constructor(private vehicleService: VehicleService) { }

    @Post()
    async create(@Body() vehicleCreateDto: VehicleCreateDTO): Promise<Vehicle> {
        const ret = await this.vehicleService.create(vehicleCreateDto);
        console.log(ret)
        return ret
    }
    @Get()
    async getAll() {
        return this.vehicleService.getAll();
    }
}
