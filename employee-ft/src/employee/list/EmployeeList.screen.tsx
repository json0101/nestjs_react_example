import { useCallback, useEffect, useMemo, useState } from "react";
import { EmployeeDto } from "../dto/employee.dto"
import { getEmployees } from "../api/employee.api";
import { Grid } from "@mui/material";
import Loading from "../../commons/components/Loading.component";
import { toast } from "react-toastify";
import EmployeeResume from "./EmployeeResume.component";

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
                                    <EmployeeResume employee={e}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
        }
        
        </>
    )
}