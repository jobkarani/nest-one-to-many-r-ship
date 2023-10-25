/* eslint-disable prettier/prettier */

import { EmployeeStatus } from "../Employee.enum";

export class EmployeeSearchDto{
    status: EmployeeStatus;
    name: string;
}