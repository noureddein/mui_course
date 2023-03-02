import { useState } from "react";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";

import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

/* 
    * Bottom Navigation
        - Used for mobile to show a navigation 
        menu at the bottom of the screen
*/

export default function MuiBottomNavigation() {
    const [value, setValue] = useState(0);

    return (
        <BottomNavigation
            // showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            sx={{
                width: "100%",
                position: "absolute",
                bottom: 10,
            }}
        >
            <BottomNavigationAction label="Recent" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
    );
}
