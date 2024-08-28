import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import NewsCard from "../components/NewsCard";
import Loader from "../components/Loader";
import NewsPagination from "../components/Pagination";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const query = useQuery().get("q");
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
        `https://newsapi.org/v2/everything?q=${query}&page=${page}&pageSize=12&apiKey=5946def052e54cf38e8c4e129dd56134`
      );
      setArticles(response.data.articles);
      setTotalResults(response.data.totalResults);
      setLoading(false);
    };

    fetchNews();
  }, [query, page]);

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

export default SearchResults;
