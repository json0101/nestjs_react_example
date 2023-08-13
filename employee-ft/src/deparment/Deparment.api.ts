import api from "../commons/axios";
import { DeparmentDto } from "./dto/deparment.dto";

export const getDeparments = async():Promise<DeparmentDto[]>  => {
    
    const response = await api.get<DeparmentDto[]>('/deparment');
    const deparments = response.data as DeparmentDto[];

    return deparments;
}
