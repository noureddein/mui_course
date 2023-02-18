import { useState } from "react";
import { Box, FormControlLabel, Switch } from "@mui/material";

export default function MuiSwitch() {
    const [checked, setChecked] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setChecked(e.target.checked);

    console.log({ checked });
    return (
        <Box>
            <FormControlLabel
                control={<Switch onChange={handleChange} checked={checked} color='success'/>}
                label="Dark mode"
            />
        </Box>
    );
}
