
import api from "../../commons/axios";
import EmployeeDeparmentHistoryDto from "../dto/employee-deparment-history.dto";


export const getEmployeeDeparmentHistory = async(employee_id: number):Promise<EmployeeDeparmentHistoryDto[]>  => {
    
    const response = await api.get<EmployeeDeparmentHistoryDto[]>(`/employee-deparment-history/${employee_id}`);
    const employee_deparment_histories = response.data as EmployeeDeparmentHistoryDto[];

    return employee_deparment_histories;
}