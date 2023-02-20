import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

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

*/

export default function MuiNavbar() {
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

                <Stack direction='row' spacing={2}>
                    <Button color="inherit">Features</Button>
                    <Button color="inherit">Pricing</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Login</Button>

                </Stack>
            </Toolbar>
        </AppBar>
    );
}
