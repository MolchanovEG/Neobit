/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  Box,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

import noImage from "../assets/noimage.png";

import "./NewsCard.css";
const NewsCard = ({ article, id, currentPage }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <Box>
          {article.urlToImage ? (
            <CardMedia
              component="img"
              height="180px"
              image={article.urlToImage}
              alt="Image not found"
            />
          ) : (
            <CardMedia
              component="img"
              height="180px"
              image={noImage}
              alt="Image not found"
            />
          )}
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {article.title}
          </Typography>
          <Typography
            className="description"
            variant="body2"
            color="text.secondary"
            minHeight="4rem"
          >
            {article.description}
          </Typography>
        </CardContent>
        <Box height="100%" display="flex" justifyContent="left" padding="16px">
          <Button
            component={Link}
            to={`/news/${id}?page=${currentPage}`}
            state={{ article }}
            variant="contained"
            size="large"
            color="primary"
          >
            Read more →
          </Button>
        </Box>
      </Card>
    </Grid>
  );
};

export default NewsCard;
