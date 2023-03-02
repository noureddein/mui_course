import { useState } from "react";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

/* 

    * - Drawer:
        - Drawer component can be used to build the sidebar menu
        - The default behavior of Drawer is hidden.
        - To control the opening and closing of Drawer we need a state variable.

        * props:
            - anchor: anchor props controls from which direction
            the sidebar opens, left | bottom | right | top
            - open: initial value of the sidebar state. Boolean
            - onClose: to handle sidebar closing. Function
            - variant: to specify the state of the Drawer to be opened 
            permanently or temporary
*/

export default function MuiDrawer() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="logo"
                onClick={() => setIsDrawerOpen(true)}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                variant='temporary'
            >
                <Box
                    padding={2}
                    width="350px"
                    textAlign="center"
                    role="presentation"
                    bgcolor="primary.light"
                >
                    <Typography variant="h6" component="div">
                        Side Panel
                    </Typography>
                </Box>
            </Drawer>
        </>
    );
}
