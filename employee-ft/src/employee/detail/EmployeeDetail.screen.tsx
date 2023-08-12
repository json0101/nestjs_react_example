import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { DateTime } from "luxon";
import { useCallback, useEffect, useState } from "react";
import { EmployeeDto } from "../interface/employee.dto";
import avatar_male from "../../assets/image/avatar_male.jpg";
import { getEmployeeByID } from "../Employee.api";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function EmployeeDetailScreen() {
    const [employee, setEmployee] = useState<EmployeeDto | null>(null);
    const { employee_id } = useParams();

    const getLaborOld = useCallback(() => {
        if (!employee) {
            return "";
        }
        const laborold = DateTime.now().diff(DateTime.fromISO(employee.hire_date), ['years', 'month', 'days']);

        return `${laborold.years}y - ${laborold.months}m - ${laborold.days.toFixed(0)}d`;
    }, [employee]);

    const getEmployee = useCallback(async () => {
        if (!employee_id) {
            toast.error("Not Id Found");
            return;
        }

        try {
            const emplo = await getEmployeeByID(+employee_id);
            setEmployee(emplo);
        } catch (error) {
            console.log('Error', error);
        }

    }, []);

    useEffect(() => {
        getEmployee();
    }, []);

    return (
        <>
            {
                employee !== null ?
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
                                                    <Typography variant="body2" color="text.secondary">
                                                        Hire Date
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

                            <Grid item>
                                <CardActions>
                                    <Button
                                        size="small"
                                        onClick={() => {
                                            console.log("id", employee.employee_id);

                                        }}>
                                        View Details
                                    </Button>
                                </CardActions>
                            </Grid>
                        </Grid>
                    </Card>
                    : <Typography>We couldn't download employee</Typography>
            }

        </>
    );
}