import api from "../commons/axios";
import { EmployeeDto } from "./interface/employee.dto";

export const getEmployees = async():Promise<EmployeeDto[]>  => {
    
    const response = await api.get<EmployeeDto[]>('/employeeeee');
    const employees = response.data as EmployeeDto[];

    return employees;
}