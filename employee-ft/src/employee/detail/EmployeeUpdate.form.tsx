import { Autocomplete, Button, FormControl, TextField } from "@mui/material";
import { useCallback, useContext, useEffect, useState } from "react";
import { DeparmentDto } from "../../deparment/dto/deparment.dto";
import { updateEmployee } from "../api/employee.api";
import EmployeeUpdateDto from "../dto/employee-update.dto";
import { toast } from "react-toastify";
import { EmployeeDetailContext } from "./EmployeeDetail.screen";
import { getDeparments } from "../../deparment/api/deparment.api";


export default function EmployeeUpdateForm() {
    const [deparments, setDeparments] = useState<DeparmentDto[]>([]);
    const [deparmentSelected, setDeparmentSelected] = useState<DeparmentDto | null>(null);
    const {employee, setEmployee, setFireUpdateHistory} = useContext(EmployeeDetailContext);

    const handleChangedDeparment = useCallback((deparment: DeparmentDto | null) => {
        setDeparmentSelected(deparment);
    }, []);

    const getDeparment = useCallback(async () => {
        try {
            const deparments = await getDeparments();
            setDeparments(deparments);

            const deparment_employee = deparments.find(d => d.deparment_id === employee.deparment_id);
            
            if (deparment_employee) {
                setDeparmentSelected(deparment_employee)
            }
        } catch (error) {
            console.log('Error', error);
        }
    }, [setDeparments, employee.deparment_id]);

    const updateEmployeeSubmit = useCallback(async (e: any) => {
        e.preventDefault();

        if (!employee?.employee_id) {
            toast.error('Employee Id is required');
            return;
        }
        
        if (!deparmentSelected) {
            toast.error('Deparment is required');
            return;
        }

        const update_employee = {
            deparment_id: deparmentSelected.deparment_id,
            active: +employee.active,
        } as EmployeeUpdateDto;

        try {
            const updated = await updateEmployee(employee.employee_id, update_employee);
            setEmployee(updated);
            setFireUpdateHistory((value: number) => { 
            return value + 1});
            toast.success('Employee has been updated');
        } catch (error) {
            console.log('Error', error);
        }
    }, [deparmentSelected, employee, setEmployee, setFireUpdateHistory]);

    useEffect(() => {
        getDeparment();
    }, [getDeparment]);
    
    return (
        <>
            <form onSubmit={updateEmployeeSubmit}>
                <FormControl fullWidth>
                    <Autocomplete
                        disablePortal
                        size="small"
                        id="deparment"
                        options={deparments}
                        value={deparmentSelected ?? null}
                        onChange={(e, value) => handleChangedDeparment(value)}
                        isOptionEqualToValue={(option, value) => option.deparment_id === value.deparment_id}
                        getOptionLabel={(option: DeparmentDto) => option.description}
                        
                        renderInput={(params) => (
                            <TextField {...params} label="Deparment" placeholder="Deparment" />
                        )}
                    />
                </FormControl>
                <Button
                    type="submit"
                    color="success"
                    variant="contained"
                    disabled={employee.deparment_id === deparmentSelected?.deparment_id}
                    sx={{ mt: 3, mb: 2 }}
                >
                    Update
                </Button>
            </form>
        </>
    )
}