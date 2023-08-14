import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";

import GroupIcon from '@mui/icons-material/Group';
import { Link } from "react-router-dom";

export default function ListMenu({ open:openDrawer }: any) {

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