import { Paper, Grid, Box } from "@mui/material";

/*
    - Elevation prop:
        used to control the shadow, default value = 1
*/

export default function MuiPaper() {
    return (
        <Paper sx={{padding: '2rem'}} elevation={4}>
            <Grid container my={4} spacing={1}>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor="primary.light" p={2}>
                        Item 1
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor="primary.light" p={2}>
                        Item 2
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor="primary.light" p={2}>
                        Item 3
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor="primary.light" p={2}>
                        Item 4
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}
