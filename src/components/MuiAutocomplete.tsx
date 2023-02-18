import { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";

/*
    * Autocomplete:
        There is two mandatory props:
            - options => []
            - renderInput => function return a component
        
        freeSolo prop allow the user to enter a text and select it

*/

type Skill = {
    id: number;
    label: string;
};

const skills = ["HTML", "CSS", "JavaScript", "Python", "React", "NextJS"];
const skillsOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,
}));
export default function MuiAutocomplete() {
    const [value, setValue] = useState<string | null>(null);
    const [skill, setSkill] = useState<Skill | null>(null);

    const handleChange = (event: any, newValue: string | null) =>
        setValue(newValue);

    const handleChangeSkill = (event: any, newValue: Skill | null) =>
        setSkill(newValue);

    console.log({ skill });

    return (
        <Stack spacing={2} maxWidth="250px">
            <Autocomplete
                options={skills.sort()}
                renderInput={(params) => (
                    <TextField {...params} label="Skills" />
                )}
                value={value}
                onChange={handleChange}
                freeSolo
            />

            <Autocomplete
                options={skillsOptions.sort((a, b) =>
                    a.label > b.label ? 1 : b.label > a.label ? -1 : 0
                )}
                renderInput={(params) => (
                    <TextField {...params} label="Skills" />
                )}
                value={skill}
                onChange={handleChangeSkill}
            />
        </Stack>
    );
}
