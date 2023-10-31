import { Box, CircularProgress } from "@mui/material";

/***
 * Component to indicate to the user that the page is loading.
 * 
 * @component
 */
export default function Loading() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    )
}