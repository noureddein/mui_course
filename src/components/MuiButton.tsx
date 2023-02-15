import { useState } from "react";
import {
    Stack,
    Button,
    IconButton,
    ButtonGroup,
    ToggleButtonGroup,
    ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import {
    FormatItalic,
    FormatBold,
    FormatUnderlined,
} from "@mui/icons-material";

export default function MuiButton() {
    const [format, setFormat] = useState<string[]>([]);
    const [formatWithExclusive, setFormatWithExclusive] = useState<string | null>(null);


    console.log({formatWithExclusive})

    const handleFormatChange = (
        _event: React.MouseEvent<HTMLElement>,
        updatedFormats: string[]
    ) => {
        setFormat(updatedFormats)
    };

    const handleFormatChangeWithExclusive = (
        _event: React.MouseEvent<HTMLElement>,
        updatedFormats: string | null
    ) => {
        setFormatWithExclusive(updatedFormats)
    };

    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction="row">
                <Button variant="text" href="https://www.google.com">
                    Text
                </Button>
                <Button variant="outlined">Outlined</Button>
                <Button variant="contained">Contained</Button>
            </Stack>

            <Stack spacing={2} direction="row">
                <Button variant="contained" color="primary">
                    Primary
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                <Button variant="contained" color="warning">
                    Warning
                </Button>
                <Button variant="contained" color="error">
                    Error
                </Button>
                <Button variant="contained" color="info">
                    Info
                </Button>
                <Button variant="contained" color="success">
                    Success
                </Button>
            </Stack>

            <Stack spacing={2} direction="row">
                <Button variant="text" color="primary">
                    Primary
                </Button>
                <Button variant="text" color="secondary">
                    Secondary
                </Button>
                <Button variant="text" color="warning">
                    Warning
                </Button>
                <Button variant="text" color="error">
                    Error
                </Button>
                <Button variant="text" color="info">
                    Info
                </Button>
                <Button variant="text" color="success">
                    Success
                </Button>
            </Stack>

            <Stack spacing={2} direction="row">
                <Button variant="outlined" color="primary">
                    Primary
                </Button>
                <Button variant="outlined" color="secondary">
                    Secondary
                </Button>
                <Button variant="outlined" color="warning">
                    Warning
                </Button>
                <Button variant="outlined" color="error">
                    Error
                </Button>
                <Button variant="outlined" color="info">
                    Info
                </Button>
                <Button variant="outlined" color="success">
                    Success
                </Button>
            </Stack>

            <Stack display="block" spacing={2} direction="row">
                <Button variant="contained" size="small">
                    Small
                </Button>
                <Button
                    variant="contained"
                    size="medium"
                    disableElevation
                    disableRipple
                >
                    Medium
                </Button>
                <Button variant="contained" size="large">
                    large
                </Button>
            </Stack>

            <Stack spacing={2} direction="row">
                <Button variant="outlined" endIcon={<SendIcon />}>
                    Send
                </Button>
                <Button variant="contained" startIcon={<SendIcon />}>
                    Send
                </Button>
            </Stack>

            <Stack spacing={2} direction="row">
                <IconButton aria-label="arrow">
                    <ArrowCircleDownIcon />
                </IconButton>
                <IconButton aria-label="arrow" size="small" color="success">
                    <ArrowCircleDownIcon />
                </IconButton>
                <IconButton aria-label="arrow" size="medium" color="warning">
                    <ArrowCircleDownIcon />
                </IconButton>
                <IconButton aria-label="arrow" size="large" color="info">
                    <ArrowCircleDownIcon />
                </IconButton>
            </Stack>

            <Stack direction="row">
                <ButtonGroup
                    variant="contained"
                    orientation="vertical"
                    size="small"
                    color="secondary"
                    aria-label="alignment button group"
                >
                    <Button onClick={() => alert("Left button clicked!")}>
                        Left
                    </Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>

            <Stack direction="row">
                <ToggleButtonGroup
                    aria-label="text formatting"
                    value={format}
                    onChange={handleFormatChange}
                    size="small"
                    color="success"
                    orientation="vertical"
                >
                    <ToggleButton value="italic" aria-label="italic">
                        <FormatItalic />
                    </ToggleButton>
                    <ToggleButton value="underlined" aria-label="underlined">
                        <FormatUnderlined />
                    </ToggleButton>
                    <ToggleButton value="bold" aria-label="bold">
                        <FormatBold />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>

            <Stack direction="row">
                <ToggleButtonGroup
                    aria-label="text formatting"
                    value={formatWithExclusive}
                    onChange={handleFormatChangeWithExclusive}
                    size="small"
                    color="success"
                    orientation="vertical"
                    exclusive
                >
                    <ToggleButton value="italic" aria-label="italic">
                        <FormatItalic />
                    </ToggleButton>
                    <ToggleButton value="underlined" aria-label="underlined">
                        <FormatUnderlined />
                    </ToggleButton>
                    <ToggleButton value="bold" aria-label="bold">
                        <FormatBold />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    );
}
