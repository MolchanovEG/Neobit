/* eslint-disable react/prop-types */
import { Pagination } from "@mui/material";

const NewsPagination = ({ page, totalPages, onChange }) => {
  return (
    <Pagination
      count={totalPages}
      size="small"
      page={page}
      onChange={(event, value) => onChange(value)}
      color="primary"
      style={{ margin: "20px 0", display: "flex", justifyContent: "center" }}
    />
  );
};

export default NewsPagination;
