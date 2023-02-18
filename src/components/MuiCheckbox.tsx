import { useState } from "react";
import {
    Box,
    FormControlLabel,
    Checkbox,
    FormControl,
    FormLabel,
    FormGroup,
    FormHelperText,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export default function MuiCheckbox() {
    const [acceptTnC, setAcceptTnc] = useState(false);
    const [skills, setSkills] = useState<string[]>([]);

    console.log({ skills });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setAcceptTnc(e.target.checked);

    const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const index = skills.indexOf(value);

        if (index === -1) {
            setSkills([...skills, value]);
        } else {
            setSkills(skills.filter((skill) => skill !== value));
        }
    };

    return (
        <Box>
            <Box>
                <FormControlLabel
                    label="I accept the terms and conditions"
                    control={
                        <Checkbox
                            checked={acceptTnC}
                            onChange={handleChange}
                            size="small"
                            color="secondary"
                        />
                    }
                />
            </Box>

            <Box>
                <Checkbox
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                    checked={acceptTnC}
                    onChange={handleChange}
                />
            </Box>

            <Box>
                <FormControl error={skills.length ? false : true}>
                    <FormLabel>Skills</FormLabel>

                    <FormGroup row>
                        <FormControlLabel
                            label="HTML"
                            control={
                                <Checkbox
                                    value="html"
                                    checked={skills.includes("html")}
                                    onChange={handleSkillChange}
                                    color="success"
                                />
                            }
                        />

                        <FormControlLabel
                            label="CSS"
                            control={
                                <Checkbox
                                    value="css"
                                    checked={skills.includes("css")}
                                    onChange={handleSkillChange}
                                    color="success"
                                />
                            }
                        />

                        <FormControlLabel
                            label="Javascript"
                            control={
                                <Checkbox
                                    value="javascript"
                                    checked={skills.includes("javascript")}
                                    onChange={handleSkillChange}
                                    color="success"
                                />
                            }
                        />
                    </FormGroup>
                    {skills.length ? null: (
                        <FormHelperText>Invalid selection</FormHelperText>
                    ) }
                </FormControl>
            </Box>
        </Box>
    );
}
