import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

interface ParamsSelect {
    data: any[];
    id: string;
    name: string;
    labelId: string;
    controlId: string;
    label: string;
    handleChanged: (value: number) => void;
    value: string | number;
    size: "small" | 'medium';
}

export default function SelectComponent({data, id, name, labelId, controlId, label, size, value,handleChanged}: ParamsSelect) {

    return (
        <>
            <FormControl fullWidth size={size}>
                <InputLabel id={controlId}>{label}</InputLabel>
                <Select
                    labelId={labelId}
                    id={controlId}
                    value={value+""}
                    label={label}
                    onChange={(event: SelectChangeEvent) => {
                        const val = event.target.value;
                        
                        handleChanged(+val);
                    }}
                >
                    {
                        data.map((st, index) => {
                                                        
                            return <MenuItem key={index} value={st[id]}>
                                st[name];
                            </MenuItem>
                        })
                    }
                </Select>
            </FormControl>
        </>
    );
}