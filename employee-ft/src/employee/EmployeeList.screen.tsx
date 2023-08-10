import { useMemo } from "react";
import { EmployeeDto } from "./interface/employee.dto"
import Employee from "./Employee.component";


export default function EmployeeListScreen() {

    const emps = useMemo(() => [{
        first_name: 'Jason',
        last_name: 'Hernandez',
        hire_date: new Date(),
        deparment: 'Human Resource',
        phone: '32342112',
        address: 'Col. San Juan'
    }] as EmployeeDto[], []);

    return (
        <>
            {
                emps.map(e => {
                    return (
                        <Employee employee={e}></Employee>
                    )
                })
            }
        </>
    )
}