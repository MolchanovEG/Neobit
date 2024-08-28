import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Grid } from "@mui/material";
import NewsCard from "../components/NewsCard";
import NewsPagination from "../components/Pagination";
import Loader from "../components/Loader";

const Category = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(
    Number(new URLSearchParams(location.search).get("page")) || 1
  );
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${category}&page=${page}&pageSize=12&apiKey=5946def052e54cf38e8c4e129dd56134`
      );
      setArticles(response.data.articles);
      setTotalResults(response.data.totalResults);
      setLoading(false);
    };

    fetchNews();
  }, [category, page]);

  const totalPages = Math.ceil(totalResults / 12);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Grid container spacing={2}>
            {articles.map((article, index) => (
              <NewsCard
                key={index}
                article={article}
                id={index + (page - 1) * 12}
                currentPage={page}
              />
            ))}
          </Grid>
          <NewsPagination
            page={page}
            totalPages={totalPages}
            onChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default Category;
