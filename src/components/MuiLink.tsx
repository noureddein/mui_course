import { Stack, Link, Typography } from "@mui/material";

/* 

    * Link
        - The Link component allows you to easily customize 
        the anchor element with theme colors and typography 
        styles

        - Color: Default color is primary
        - Underlined: Default is always, always | hover | none
        - variant: Default is inherit

*/

export default function MuiLink() {
    return (
        <Stack spacing={2} direction="row" m={4}>
            <Link href="#">Link</Link>

            <Link href="#" color="secondary">
                Secondary
            </Link>
            <Link href="#" color="secondary" underline="none">
                Underlined none
            </Link>
            <Link href="#" color="secondary" underline="hover">
                Underlined hover
            </Link>
            <Link href="#" color="secondary" underline="always">
                Underlined always
            </Link>

            <Typography variant="h6">
                <Link href="#" color="secondary" underline="none">
                    Element wrapped with typography
                </Link>
            </Typography>

            <Link href="#" color="secondary" underline="none" variant="h1">
                Anchor with a variant prop of h1
            </Link>
        </Stack>
    );
}
