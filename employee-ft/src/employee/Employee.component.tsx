import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { EmployeeDto } from "./interface/employee.dto";

interface ParamsEmployee {
    employee: EmployeeDto;
}

export default function Employee({employee}: ParamsEmployee)  {
    
    
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {employee.first_name} {employee.last_name} ({employee.deparment})
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {employee.address}
                        {DateTime.fromFormat( employee.hire_date)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </>
    );
} 