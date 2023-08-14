import { DeparmentDto } from "../../deparment/dto/deparment.dto";
import { EmployeeDto } from "../../employee/dto/employee.dto";

export default interface EmployeeDeparmentHistoryDto{
    employee_deparment_history_id: number;
    employee_id: number;
    date: string;
    Employee: EmployeeDto;
    deparment_id: number;
    deparment: DeparmentDto;
}