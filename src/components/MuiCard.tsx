import {
    Box,
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Button,
    Typography,
    Grid,
} from "@mui/material";

function DemoCard() {
    return (
        <Box width="500px">
            <Card>
                <CardMedia
                    component="img"
                    height="300px"
                    src="https://source.unsplash.com/random"
                    alt="Unsplash image"
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        React
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iusto eum accusantium quae earum. Id quidem possimus
                        aliquam reprehenderit facilis doloribus tenetur
                        molestias vero assumenda ratione, inventore, nemo illum
                        eaque! Debitis!
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn more</Button>
                </CardActions>
            </Card>
        </Box>
    );
}

export default function MuiCard() {
    return (
        <Grid container columnSpacing={2} rowSpacing={4} direction="row">
            <Grid item>
                <DemoCard />
            </Grid>
            <Grid item>
                <DemoCard />
            </Grid>

            <Grid item>
                <DemoCard />
            </Grid>
            <Grid item>
                <DemoCard />
            </Grid>

            <Grid item>
                <DemoCard />
            </Grid>
        </Grid>
    );
}
