import { Autocomplete, Button, Card, CardActions, CardContent, CardMedia, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { DateTime } from "luxon";
import { Fragment, useCallback, useEffect, useState, useContext, createContext } from "react";
import { EmployeeDto } from "../dto/employee.dto";
import avatar_male from "../../assets/image/avatar_male.jpg";
import { getEmployeeByID } from "../Employee.api";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { DeparmentDto } from "../../deparment/dto/deparment.dto";
import { getDeparments } from "../../deparment/Deparment.api";
import SelectComponent from "../../commons/components/Select.component";
import EmployeeUpdateForm from "./EmployeeUpdate.form";
import EmployeeDeparmentHistoryDto from "../../employee-deparment-history/components/EmployeeDeparmentHistory.component";
import EmployeeDeparmentHistory from "../../employee-deparment-history/components/EmployeeDeparmentHistory.component";

export interface EmployeeDetailCtx {
    employee: EmployeeDto;
    setEmployee: Function;
    fireUpdateHistory: number;
    setFireUpdateHistory: Function;
}
export const EmployeeDetailContext = createContext<EmployeeDetailCtx>({} as EmployeeDetailCtx);

export default function EmployeeDetailScreen() {
    const [employee, setEmployee] = useState<EmployeeDto | null>(null);
    const [fireUpdateHistory, setFireUpdateHistory] = useState<number>(0);

    const { employee_id } = useParams();


    const getEmployee = useCallback(async () => {
        if (!employee_id) {
            toast.error("Employee id, not found");
            return;
        }

        try {
            const emplo = await getEmployeeByID(+employee_id);
            setEmployee(emplo);
        } catch (error) {
            console.log('Error', error);
        }

    }, []);

    const getLaborOld = useCallback(() => {
        if (!employee) {
            return "";
        }
        const laborold = DateTime.now().diff(DateTime.fromISO(employee.hire_date), ['years', 'month', 'days']);

        return `${laborold.years}y - ${laborold.months}m - ${laborold.days.toFixed(0)}d`;
    }, [employee]);

    useEffect(() => {
        getEmployee();
    }, []);

    return (
        <>
            <EmployeeDetailContext.Provider value={{
                employee: employee,
                setEmployee: setEmployee,
                fireUpdateHistory: fireUpdateHistory,
                setFireUpdateHistory: setFireUpdateHistory
            } as EmployeeDetailCtx}>
                {
                    employee !== null ?
                        <Fragment>
                            <Card>
                                <Grid container >
                                    <Grid container>
                                        <Grid item>
                                            <CardMedia
                                                component="img"
                                                alt={employee.first_name + "_image"}
                                                height="140"
                                                image={avatar_male}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <CardContent>
                                                <Typography gutterBottom variant="h4" component="div">
                                                    {employee.first_name} {employee.last_name}
                                                </Typography>

                                                <Grid container spacing={10}>
                                                    <Grid item>
                                                        <Typography gutterBottom variant="body2" component="div">
                                                            Employee Id: {employee.employee_id}
                                                        </Typography>
                                                        <Typography gutterBottom variant="body2" component="div">
                                                            Deparment: {employee.deparment}
                                                        </Typography>
                                                        <Typography gutterBottom variant="body2" component="div">
                                                            Telephone: {employee.phone}
                                                        </Typography>
                                                        <Typography gutterBottom variant="body2" component="div">
                                                            Address: {employee.phone}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography gutterBottom variant="body2" component="div">
                                                            Hire Date {DateTime.fromISO(employee.hire_date).toFormat("yyyy-MM-dd").toString()}
                                                        </Typography>
                                                        <Typography gutterBottom variant="body2" component="div">
                                                            {
                                                                getLaborOld()
                                                            }
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={24}>
                                        <EmployeeUpdateForm />
                                    </Grid>
                                </Grid>
                            </Card>
                            <Grid container>
                                <Grid item xs={24}>
                                    <EmployeeDeparmentHistory/>
                                </Grid>
                            </Grid>
                        </Fragment>
                        : <Typography>I couldn't get the employee</Typography>
                }
            </EmployeeDetailContext.Provider>
        </>
    );
}