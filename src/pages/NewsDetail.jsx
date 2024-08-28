import { useLocation, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Box,
} from "@mui/material";

const NewsDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;
  const queryParams = new URLSearchParams(location.search);
  const currentPage = queryParams.get("page") || 1;

  const handleBack = () => {
    navigate(-1, { state: { page: currentPage } });
  };

  return (
    <div>
      <Card style={{ margin: "20px 0" }}>
        {article.urlToImage && (
          <CardMedia
            component="img"
            height="300"
            image={article.urlToImage}
            alt={article.title}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {article.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {article.content}
          </Typography>
        </CardContent>
      </Card>
      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={handleBack}
        >
          Back
        </Button>
      </Box>
    </div>
  );
};

export default NewsDetail;
