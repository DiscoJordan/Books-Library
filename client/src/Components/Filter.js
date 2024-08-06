import React from "react";
import { resetFilters, setTitleFilter, setAuthorFilter } from "../Redux/slices/filterSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectTitleFilter, selectAuthorFilter } from "../Redux/slices/filterSlice";

function Filter() {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);

  const handleChangeTitle = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };
  const handleChangeAuthor = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };
  const handleResetFilters = () => {
    dispatch(resetFilters());
  };
  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            value={titleFilter}
            placeholder="Filter By Title..."
            onChange={handleChangeTitle}
          />
        </div>
        <div className="filter-group">
          <input
            type="text"
            value={authorFilter}
            placeholder="Filter By Author..."
            onChange={handleChangeAuthor}
          />
        </div>
         <button onClick={handleResetFilters}>Reset filters</button>
      </div>
    </div>
  );
}

export default Filter;
