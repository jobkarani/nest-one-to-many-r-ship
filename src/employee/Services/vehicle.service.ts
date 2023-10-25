/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { VehicleRepository } from '../repositories/Vehicle.repository';
import { VehicleCreateDTO } from '../Dto/VehicleCreateDto';
import { Vehicle } from '../schemas/Vehicle.schema';

@Injectable()
export class VehicleService {
    constructor(private vehicleRepository: VehicleRepository) { }
    async create(vehicleCreateDTO: VehicleCreateDTO): Promise<Vehicle> {
        return await this.vehicleRepository.create(vehicleCreateDTO)
    }
    async getAll(): Promise<Vehicle[]> {
        return await this.vehicleRepository.findAll();
    }
}
