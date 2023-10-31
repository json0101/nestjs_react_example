import { DateTime } from "luxon";
import { EmployeeDto } from "../../employee/dto/employee.dto";


export const getLaborOld = (employee: EmployeeDto) => {
    if (!employee) {
        return "";
    }
    const laborold = DateTime.now().diff(DateTime.fromISO(employee.hire_date), ['years', 'month', 'days']);

    return `${laborold.years}y - ${laborold.months}m - ${laborold.days.toFixed(0)}d`;
};