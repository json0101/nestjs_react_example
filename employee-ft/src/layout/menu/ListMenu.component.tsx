import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";

import GroupIcon from '@mui/icons-material/Group';
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
// import { useDispatch } from "react-redux";
// import { logout, selectAuth } from "../../auth/auth.slice";
import { useState } from "react";
import React from "react";
// import SecurityMenu from "./security/SecurityMenu";
// import ShipmentMenu from "./shipment/ShipmentMenu";
// import RoleMenu from "./security/RoleMenu";
// import { useAppSelector } from "../../redux/hooks";

export default function ListMenu({ open:openDrawer }: any) {
    const [openShipment, setOpenShipment] = useState(true);
    // const { roles } = useAppSelector(selectAuth);

    const navigate = useNavigate();
    const handleOpenShipment = () => {
        setOpenShipment(!openShipment);
    };

    return (
        <>
            <List>
                <ListItem key={"employee"} disablePadding sx={{ display: 'block' }}>
                    <Link to={'employee-list'}
                        className='MuiMenuItem-root'
                        style={{
                            color: 'inherit',
                            textDecoration: 'none',
                            fontFamily: 'inherit'
                        }}
                    >
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: openDrawer ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: openDrawer ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <GroupIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography component={'span'}>
                                        Employee
                                    </Typography>
                                }
                                sx={{ opacity: openDrawer ? 1 : 0 }}
                            />
                        </ListItemButton>
                    </Link>                    
                </ListItem>
            </List>
            <Divider />
        </>
    )
}