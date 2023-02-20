import { useState } from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

/* 
    Accordion:
        - The Accordion component allow the user to show and 
        hide related content.

        - The default expand for accordion is to expand
        all accordions together, but with the handleChange function 
        we control that to open one accordion only.

*/

function AccordionDemo(props: {
    no: string;
    handleChange: Function;
    expanded: boolean | string;
}) {
    const { no, handleChange, expanded } = props;

    return (
        <Accordion
            expanded={expanded === `panel${no}`}
            onChange={(event, isExpanded) =>
                handleChange(isExpanded, `panel${no}`)
            }
        >
            <AccordionSummary
                id={`panel${no}`}
                aria-controls={`panel-${no}-content`}
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Accordion {`${no}`}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Iusto, at neque impedit dolore nostrum aut suscipit sed
                    voluptas laudantium saepe numquam corporis repellendus modi
                    atque nesciunt architecto voluptatibus delectus dolores.
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}

export default function MuiAccordion() {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (isExpanded: boolean, panel: string) =>
        setExpanded(isExpanded ? panel : false);

    return (
        <div>
            <AccordionDemo
                no="1"
                expanded={expanded}
                handleChange={handleChange}
            />
            <AccordionDemo
                no="2"
                expanded={expanded}
                handleChange={handleChange}
            />
        </div>
    );
}
