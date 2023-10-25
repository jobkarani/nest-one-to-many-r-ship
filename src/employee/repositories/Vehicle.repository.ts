/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Vehicle, VehicleDocument } from "../schemas/Vehicle.schema";
import { Model } from "mongoose";
import { VehicleCreateDTO } from "../Dto/VehicleCreateDto";

@Injectable()
export class VehicleRepository{
    constructor(@InjectModel(Vehicle.name) private vehicleModel: Model<VehicleDocument>) {
    }

    async create(vehileCreateDto: VehicleCreateDTO): Promise<Vehicle> {
        const newVehicle = new this.vehicleModel(vehileCreateDto);
        return await newVehicle.save()
    }

    async findAll() {
        return await this.vehicleModel.find().populate('employeeId');
    }
}