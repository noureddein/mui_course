import { useState } from "react";
import { Stack, Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function MuiRating() {
    const [rating, setRating] = useState<number | null>(3);

    const handleRatingChange = (
        _event: React.ChangeEvent<{}>,
        newValue: number | null
    ) => setRating(newValue);

    console.log({ rating });
    return (
        <Stack spacing={2}>
            <Rating
                value={rating}
                onChange={handleRatingChange}
                precision={0.5}
                size="large"
                icon={<FavoriteIcon fontSize="inherit" color="error"/>}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                // readOnly={true} ==> the item will not be changed
                highlightSelectedOnly={true}  // This will highlight only the selected item
            />
        </Stack>
    );
}
