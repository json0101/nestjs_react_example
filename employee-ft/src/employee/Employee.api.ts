import api from "../commons/axios";
import { EmployeeDto } from "./interface/employee.dto";

export const getEmployees = async():Promise<EmployeeDto[]>  => {
    
    const response = await api.get<EmployeeDto[]>('/employee');
    const employees = response.data as EmployeeDto[];

    return employees;
}

export const getEmployeeByID = async(id: number):Promise<EmployeeDto>  => {
    
    const response = await api.get<EmployeeDto>('/employee/' + id);
    const employee = response.data as EmployeeDto;

    return employee;
}