import { useMemo } from "react";
import { EmployeeDto } from "./interface/employee.dto"
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function EmployeeListScreen() {

    const employess = useMemo(() => [{
        first_name: 'Jason',
        last_name: 'Hernandez',
        hire_date: new Date(),
        deparment: 'Human Resource',
        phone: '32342112',
        address: 'Col. San Juan'
    }] as EmployeeDto[], []);

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
                    Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </>
    )
}