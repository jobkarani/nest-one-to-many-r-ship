/* eslint-disable prettier/prettier */
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { EmployeeTier } from './employee/Employee.enum';

@Injectable()
export class EmployeeTierValidationPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: any, metadata: ArgumentMetadata) {
    if (!(value.tier in EmployeeTier)) {
      throw new BadRequestException(`${value.tier} is not a valid tier`)
    }
    return value;
  }
}