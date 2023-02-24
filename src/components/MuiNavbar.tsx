import { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Stack,
    Button,
    Menu,
    MenuItem,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

/* 
    * - AppBar:
            - Default position for AppBar is fixed
    
    * - Toolbar:
            - This component adding the padding to
            the left and right

    * - IconButton:
            - IconButton representing the logo

    * - Typography:
            - flexGrow: will allow the Typography to grow 
            the remaining the available space.

    * The AppBar and Toolbar is the basics to create a Navbar

    * - Menu & MenuItem
            - Used to handle the dropdown menu for navigation
            - Default behavior is hidden

        - Menu positioning
            Refer to the docs https://mui.com/material-ui/react-popover/

*/

export default function MuiNavbar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
        setAnchorEl(event.currentTarget);

    const handleClose = () => setAnchorEl(null);

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="logo"
                >
                    <CatchingPokemonIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Pokemon App
                </Typography>

                <Stack direction="row" spacing={2}>
                    <Button color="inherit">Features</Button>
                    <Button color="inherit">Pricing</Button>
                    <Button color="inherit">About</Button>
                    <Button
                        color="inherit"
                        id="recourses-button"
                        onClick={handleClick}
                        aria-controls={open ? "recourses-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        endIcon={<KeyboardArrowDownIcon />}
                    >
                        Recourses
                    </Button>
                    <Button color="inherit">Login</Button>
                </Stack>

                <Menu
                    id="recourses-menu"
                    anchorEl={anchorEl}
                    open={open}
                    MenuListProps={{
                        "aria-labelledby": "recourses-button",
                    }}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                >
                    <MenuItem onClick={handleClose}>Blog</MenuItem>
                    <MenuItem onClick={handleClose}>Podcast</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}
