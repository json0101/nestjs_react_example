import { useState } from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { EmployeeDto } from "../dto/employee.dto";
import { DateTime } from "luxon";
import avatar from "../../assets/image/avatar_male.jpg";
import { useNavigate } from "react-router-dom";

interface ParamsEmployee {
    employee: EmployeeDto;
}

export default function EmployeeResume({employee}: ParamsEmployee)  {
    const [openMessage, setOpenMessage] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleClose = () => {
        setOpenMessage(false);
    };
    
    return (
        <>
            <Card>
                <Grid container >
                    <Grid container>
                        <Grid item>
                            <CardMedia
                                component="img"
                                alt={employee.first_name + "_image"}
                                height="140"
                                image={avatar}
                            />
                        </Grid>
                        <Grid item>
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    {employee.first_name} {employee.last_name}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    {employee.deparment}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Hire Date
                                </Typography>
                                <Typography>
                                    {DateTime.fromISO(employee.hire_date).toFormat("yyyy-MM-dd").toString()}
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <CardActions>
                            <Button 
                                size="small" 
                                onClick={() => {
                                    console.log('id', employee.employee_id);
                                    navigate('/employee/'+employee.employee_id);
                                }}>
                                View Details
                            </Button>
                        </CardActions>
                    </Grid>
                </Grid>
            </Card>
        </>
    );
} 