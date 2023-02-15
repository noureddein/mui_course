import { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

/*
    Box:
        The Box is Like the div, and we can specify come properties like
        width and height
    
    Select:
        We can create the select dropdown using the:
            1- TextField component
            2- Select component that MUI provide

    fullWidth: 
        The fullWidth property take the full width of
        it's parent container
*/

export default function MuiSelect() {
    const [singleCountry, setSingleCountry] = useState("");
    const [multipleCountry, setMultipleCountry] = useState<string[]>([]);
    console.log({
        singleCountry,
        multipleCountry,
    });
    const handleSingleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSingleCountry(event.target.value as string);
    };

    const handleMultipleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = event.target.value;
        setMultipleCountry(
            typeof value === "string" ? value.split(",") : value
        );
    };
    return (
        <>
            {/* Handle Single Selection */}
            <Box width="250px">
                <TextField
                    label="Select property"
                    select
                    value={singleCountry}
                    onChange={handleSingleChange}
                    fullWidth
                >
                    <MenuItem value="USA">USA</MenuItem>
                    <MenuItem value="IN">India</MenuItem>
                    <MenuItem value="AS">Australia</MenuItem>
                </TextField>
            </Box>

            {/* Handle multiple selection */}
            <Box width="250px" paddingY={2}>
                <TextField
                    label="Select property"
                    select
                    value={multipleCountry}
                    onChange={handleMultipleChange}
                    fullWidth
                    SelectProps={{
                        multiple: true,
                    }}
                    size='small'
                    color="success"
                    helperText="Please select the countries."
                >
                    <MenuItem value="USA">USA</MenuItem>
                    <MenuItem value="IN">India</MenuItem>
                    <MenuItem value="AS">Australia</MenuItem>
                </TextField>
            </Box>
        </>
    );
}
