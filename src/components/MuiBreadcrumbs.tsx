import { Box, Breadcrumbs, Typography, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
/* 

    * - Breadcrumbs:
            - Breadcrumbs is a type of a navigation scheme
            that reveals the users location in a website

            - separator: Default is forward slash /
                it can be / | - | icon
            - maxItems: is the number of links to show,
                default is 8 links
            - itemsAfterCollapse: is the items to show after the collapse
            - itemsBeforeCollapse: is the items to show before the collapse



*/

export default function MuiBreadcrumbs() {
    return (
        <Box m={2}>
            <Breadcrumbs
                aria-label="Breadcrumbs"
                separator={<NavigateNextIcon fontSize="small" />}
                maxItems={2}
                itemsAfterCollapse={}
                itemsBeforeCollapse={}
            >
                <Link href="#">Home</Link>
                <Link href="#">Category</Link>
                <Link href="#">Accessories</Link>
                <Typography color="text.primary">Shoes</Typography>
            </Breadcrumbs>
        </Box>
    );
}
