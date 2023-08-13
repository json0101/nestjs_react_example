import api from "../commons/axios";
import EmployeeUpdateDto from "./dto/employee-update.dto";
import { EmployeeDto } from "./dto/employee.dto";

export const updateEmployee = async(employee_id: number, employee_updated: EmployeeUpdateDto):Promise<EmployeeDto>  => {
    
    const response = await api.patch<EmployeeDto>(`/employee/${employee_id}`, {
       deparment_id: employee_updated.deparment_id
    });
    const employeeUpdated = response.data as EmployeeDto;

    return employeeUpdated;
}

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