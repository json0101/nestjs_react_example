import { Alert, Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { DateTime } from "luxon";
import { Fragment, useCallback, useEffect, useState, createContext } from "react";
import { EmployeeDto } from "../dto/employee.dto";
import avatar_male from "../../assets/image/avatar_male.jpg";
import { getEmployeeByID, updateEmployee } from "../api/employee.api";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import EmployeeUpdateForm from "./EmployeeUpdate.form";
import EmployeeDeparmentHistory from "../../employee-deparment-history/components/EmployeeDeparmentHistory.component";
import EmployeeUpdateDto from "../dto/employee-update.dto";
import { getLaborOld } from "../../commons/functions/getLaborOdl";

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

    }, [employee_id]);

    const updateStateEmployee = useCallback(async() => {
        if (!employee?.employee_id) {
            toast.error('Employee Id is required');
            return;
        }

        const state_to_save = +employee.active === 1 ? 0 : 1;

        const update_employee = {
            deparment_id: employee?.deparment_id,
            active: state_to_save
        } as EmployeeUpdateDto;

        try {
            const updated = await updateEmployee(employee.employee_id, update_employee);
            setEmployee(updated);
        } catch (error) {
            console.log('Error', error);
        }
    }, [employee]);

    useEffect(() => {
        getEmployee();
    }, [getEmployee]);

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
                                <Grid container>
                                    <Grid container spacing={0}>
                                        <Grid item padding={1}>
                                            <Grid container direction={"column"}>
                                                <Grid item>
                                            <CardMedia
                                                component="img"
                                                alt={employee.first_name + "_image"}
                                                height="140"
                                                image={avatar_male}
                                            />
                                            </Grid>
                                            <Grid item>
                                            {
                                                +employee.active === 0 ?
                                                <Alert variant="filled" severity="error" >
                                                    Inactive
                                                </Alert>
                                                : null
                                            }
                                            </Grid>
                                            </Grid>
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
                                                                getLaborOld(employee)
                                                            }
                                                        </Typography>
                                                        <Typography gutterBottom variant="body2" component="div">
                                                            <Button
                                                                variant="contained"
                                                                color={+employee.active === 1 ? "error" : "success"}
                                                                onClick={updateStateEmployee}
                                                            >
                                                                {+employee.active === 1 ? "INACTIVE" : 'ACTIVE'}
                                                            </Button>
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={24} padding={1}>
                                        <EmployeeUpdateForm />
                                    </Grid>
                                </Grid>
                            </Card>
                            <Grid container marginTop={2}>
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