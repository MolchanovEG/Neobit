/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActionArea,
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
        <CardActionArea
          component={Link}
          to={`/news/${id}?page=${currentPage}`}
          state={{ article }}
          style={{ flex: 1 }}
        >
          {article.urlToImage ? (
            <CardMedia
              component="img"
              height="180"
              image={article.urlToImage}
              alt="Image not found"
            />
          ) : (
            <CardMedia
              component="img"
              height="180"
              image={noImage}
              alt="Image not found"
            />
          )}
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" noWrap>
              {article.title}
            </Typography>
            <Typography
              className="description"
              variant="body2"
              color="text.secondary"
            >
              {article.description}
            </Typography>
          </CardContent>
          <Box display="flex" justifyContent="left">
            <Button variant="contained" size="large" color="primary">
              Read more →
            </Button>
          </Box>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default NewsCard;
