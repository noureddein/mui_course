import { Typography } from "@mui/material";

export default function MuiTypography() {
    return (
        <div>
            <Typography variant="h1">h1 Heading</Typography>
            <Typography variant="h2">h2 Heading</Typography>
            <Typography variant="h3">h3 Heading</Typography>
            <Typography variant="h4" component='h1' gutterBottom>h4 Heading</Typography>
            <Typography variant="h5">h5 Heading</Typography>
            <Typography variant="h6">h6 Heading</Typography>

            <Typography variant="subtitle1">Sub title 1</Typography>
            <Typography variant="subtitle2">Sub title 2</Typography>

            <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae voluptatum fuga iusto, ipsum modi provident
                laboriosam repellat id, dicta voluptatem rem est, molestias ex
                consequuntur illo excepturi dignissimos magnam saepe?
            </Typography>
            <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi quam nihil dolor dolorum animi natus maiores illo
                rerum ut nulla earum, eius optio hic neque temporibus, mollitia
                fugit repellendus enim?
            </Typography>
        </div>
    );
}
