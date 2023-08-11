import { useCallback, useEffect, useMemo, useState } from "react";
import { EmployeeDto } from "./interface/employee.dto"
import Employee from "./Employee.component";
import { getEmployees } from "./Employee.api";
import { Grid } from "@mui/material";
import Loading from "../commons/components/Loading.component";
import { toast } from "react-toastify";

export default function EmployeeListScreen() {
    const [employees, setEmployees] = useState<EmployeeDto[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    
    const getEmployeesList = useCallback(async () => {
        setLoading(true);
        try {
            const employees = await getEmployees();
            setEmployees(employees);
        } catch(error)  {
            setEmployees([]);
            // toast.error((error as Error).message);
        }
        setLoading(false)
    }, []);

    

    useEffect(() => {
        getEmployeesList();
    }, []);

    return (
        
        <>
        {
            loading ? 
                <Loading/> : 
                <Grid container spacing={2}>
                    {
                        employees.map(e => {
                            return (
                                <Grid item key={e.employee_id} xs={24}>
                                    <Employee  employee={e}></Employee>
                                </Grid>
                            )
                        })
                    }
                </Grid>
        }
        
        </>
    )
}