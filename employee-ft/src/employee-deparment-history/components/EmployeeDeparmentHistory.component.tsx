import { useCallback, useContext, useEffect, useMemo, useState } from "react"
import EmployeeDeparmentHistoryDto from "../dto/employee-deparment-history.dto"
import { toast } from "react-toastify";
import { getEmployeeDeparmentHistory } from "../api/employee-deparment-history.api";
import { DataGrid, GridColDef, GridValueFormatterParams, GridValueGetterParams } from "@mui/x-data-grid";
import { DateTime } from "luxon";
import { EmployeeDetailContext } from "../../employee/detail/EmployeeDetail.screen";

export default function EmployeeDeparmentHistory() {
    const [employeeDeparmentHistories, setEmployeeDeparmentHistory] = useState<EmployeeDeparmentHistoryDto[]>([]);
    const {employee, fireUpdateHistory} = useContext(EmployeeDetailContext);
    
    const updateGridData = useCallback(async () => {
        if (!employee.employee_id) {
            toast.error("Employee id, not found");
            return;
        }

        try {
            const employees_deparment_histories = await getEmployeeDeparmentHistory(employee.employee_id);
            setEmployeeDeparmentHistory(employees_deparment_histories);
            
        } catch (error) {
            console.log('Error', error);
        }
    }, [employee]);

    useEffect(() => {
        updateGridData();
    }, [fireUpdateHistory, updateGridData]);

    const columns = useMemo<GridColDef[]>(
        () => [
        {
            field: 'employee_deparment_history_id',
            headerName: 'ID',
            width: 120,
            editable: false,
        },
        {
            field: 'date',
            type: 'date',
            valueFormatter: (params: GridValueFormatterParams<Date>) => {
              if (params.value == null) {
                return '';
              }
    
              return DateTime.fromISO(params.value + "").toFormat("dd/MM/yyyy");
            },
            headerName: 'Date',
            width: 160,
            editable: false,
          },
        {
            field: 'deparment',
            headerName: 'Deparment',
            flex: 1,
            editable: false,
            valueGetter: (params: GridValueGetterParams) => params.row.deparment?.description,
        },
    ], []);

    return (
        <>
            <div style={{ height: '300px', width: '100%' }}>
                <DataGrid
                    rows={employeeDeparmentHistories}
                    columns={columns}
                    rowHeight={30}
                    initialState={{
                    columns: {
                        columnVisibilityModel: {
                            employee_deparment_history_id: false,
                        }
                    },
                    sorting: {
                        sortModel: [
                        {
                            field: 'date',
                            sort: 'desc',
                        },
                        ]
                    }
                    }}
                    autoPageSize
                    getRowId={(row) => row.employee_deparment_history_id}
                />
            </div>
        </>
    )
}