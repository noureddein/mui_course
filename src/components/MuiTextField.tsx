import { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function MuiTextField() {
    const [value, setValue] = useState("");

    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction="row">
                <TextField label="Outlined" variant="outlined" />
                <TextField label="Filled" variant="filled" />
                <TextField label="Standard" variant="standard" />
            </Stack>

            <Stack spacing={2} direction="row">
                <TextField
                    label="Small secondary"
                    color="secondary"
                    size="small"
                />
            </Stack>

            <Stack spacing={2} direction="row">
                <TextField
                    label="Small secondary"
                    color="info"
                    size="medium"
                    required
                />

                <TextField
                    label="Password"
                    color="info"
                    size="medium"
                    required
                    type="password"
                    helperText="Disabled field"
                    disabled={true}
                />

                <TextField
                    label="Read Only"
                    color="info"
                    size="medium"
                    required
                    // type="password"
                    helperText="Do not share your password!"
                    InputProps={{ readOnly: true }}
                    value="Hello"
                />
            </Stack>

            <Stack spacing={2} direction="row">
                <TextField
                    label="Amount"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">$</InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label="Weight"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">kg</InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label="Weight"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <VisibilityIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>

            <Stack spacing={2} direction="row">
                <TextField
                    label="Form input"
                    variant="outlined"
                    error={!value}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    helperText={!value ? 'Required' : 'Do not share your password.'}
                />
            </Stack>
        </Stack>
    );
}
