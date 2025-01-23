import { Card, Typography } from "@mui/material";

const NewsCard = ({title, description, imgUrl, url}) => {
    return (
        <Card sx={{
            p: 2
        }}>
            <img src={imgUrl} alt="img" />
            <Typography variant="h4">{title}</Typography>
            <Typography variant="bodu1">{description}</Typography>

        </Card>
    );
};

export default NewsCard;