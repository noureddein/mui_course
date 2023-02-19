import { Box, Grid, Stack } from "@mui/material";

/*
    Grid:
        - The Grid component used for two 
        dimensional layout.

        - Grid component has two variations:
            1- Grid container for the parent
            2- Grid Item for the children.

        * Important Points:
            1. The Grid component under the hood uses the flex 
            box module.
            2. The Grid consist of 12 column
            3. Each Item in the grid can take up one or more columns
            as width.
            4. There are five breakpoints each corresponding to 
            certain device width.
                - xs: for mobile
                - sm: for tablet.
                - md: for desktop.
                - lg and xl: for larger monitor.
            5. We can assign integer values to each breakpoint which 
            indicates how many of the 12 available columns are occupied 
            by that item when the viewport satisfies that breakpoint constraints.
            
            */

export default function MuiGrid() {
    return (
        <>
            <Stack>
                <Box width="250px" height="100px" bgcolor="success.light" p={2}>
                    Stack
                </Box>
            </Stack>

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

            <Grid container my={4} spacing={1}>
                {/* xs: without specifying a width will take auto layout */}
                <Grid item xs>
                    <Box bgcolor="warning.light" p={2}>
                        Item 1
                    </Box>
                </Grid>
                <Grid item xs>
                    <Box bgcolor="warning.light" p={2}>
                        Item 2
                    </Box>
                </Grid>
                <Grid item xs>
                    <Box bgcolor="warning.light" p={2}>
                        Item 3
                    </Box>
                </Grid>
                <Grid item xs>
                    <Box bgcolor="warning.light" p={2}>
                        Item 4
                    </Box>
                </Grid>
            </Grid>

            <Grid container my={4} spacing={1}>
                {/* xs: when specifying on width, the rest of the space will divided equally*/}
                <Grid item xs>
                    <Box bgcolor="Highlight" p={2}>
                        Item 1
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor="Highlight" p={2}>
                        Item 2
                    </Box>
                </Grid>
                <Grid item xs>
                    <Box bgcolor="Highlight" p={2}>
                        Item 3
                    </Box>
                </Grid>
                <Grid item xs>
                    <Box bgcolor="Highlight" p={2}>
                        Item 4
                    </Box>
                </Grid>
            </Grid>

            <Grid container my={4} spacing={1}>
                {/* xs = auto: when specifying auto for an item, the item will take the necessary width depending on the content*/}
                <Grid item xs>
                    <Box bgcolor="GrayText" p={2}>
                        Item 1
                    </Box>
                </Grid>
                <Grid item xs="auto">
                    <Box bgcolor="GrayText" p={2}>
                        Item 2
                    </Box>
                </Grid>
                <Grid item xs>
                    <Box bgcolor="GrayText" p={2}>
                        Item 3
                    </Box>
                </Grid>
                <Grid item xs>
                    <Box bgcolor="GrayText" p={2}>
                        Item 4
                    </Box>
                </Grid>
            </Grid>
        
            <Grid container my={4} rowSpacing={2} columnSpacing={1}>
                <Grid item xs={6}>
                    <Box bgcolor="GrayText" p={2}>
                        Item 1
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor="GrayText" p={2}>
                        Item 2
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor="GrayText" p={2}>
                        Item 3
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor="GrayText" p={2}>
                        Item 4
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}
