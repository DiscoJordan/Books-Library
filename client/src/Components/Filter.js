import React from "react";
import {
  resetFilters,
  setTitleFilter,
  setAuthorFilter,
  toggleFavFilter
} from "../Redux/slices/filterSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectFavoriteFilter
} from "../Redux/slices/filterSlice";

function Filter() {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const favoriteFilter = useSelector(selectFavoriteFilter);

  const handleChangeTitle = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };
  const handleChangeAuthor = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };
  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  const handleToggleFavFilter = () => {
    dispatch(toggleFavFilter());
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
        <div className="filter-group">
          <label htmlFor="checkbox">Only Favorite</label>
          <input
            id="checkbox"
            type="checkbox"

            checked={favoriteFilter}
            placeholder="Filter By Author..."
            onChange={handleToggleFavFilter}
          />
        </div>
        <button onClick={handleResetFilters}>Reset filters</button>
      </div>
    </div>
  );
}

export default Filter;
