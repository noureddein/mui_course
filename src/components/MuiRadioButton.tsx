import { useState } from "react";
import {
    Box,
    FormControl,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio,
    FormHelperText,
} from "@mui/material";

export default function MuiRadioButton() {
    const [value, setValue] = useState("");

    console.log({ value });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value as string);
    };

    return (
        <Box>
            <FormControl error={!value}>
                <FormLabel id="job-experience-group-label">
                    Years of experience:
                </FormLabel>
                <RadioGroup
                    name="job-experience-group"
                    aria-label="job-experience-group-label"
                    value={value}
                    onChange={handleChange}
                    row
                >
                    <FormControlLabel
                        control={<Radio size="medium" color="secondary" />}
                        label="0-2"
                        value="0-2"
                    />
                    <FormControlLabel
                        control={<Radio size="medium" color="secondary" />}
                        label="3-5"
                        value="3-5"
                    />
                    <FormControlLabel
                        control={<Radio size="medium" color="secondary" />}
                        label="6-10"
                        value="6-10"
                    />
                </RadioGroup>
                {!value ? <FormHelperText>Invalid Selection </FormHelperText> : null}
            </FormControl>
        </Box>
    );
}
