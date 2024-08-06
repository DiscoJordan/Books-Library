import React from "react";
import { setTitleFilter } from "../Redux/slices/filterSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectTitleFilter } from "../Redux/slices/filterSlice";

function Filter() {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter)

  const handleChangeTitle = (e) => {
    dispatch(setTitleFilter(e.target.value))
  };
  return (
    <div className="app-block filter">
      <div className="filter-group">
        <input
          type="text"
          value={titleFilter}
          placeholder="Filter By Title..."
          onChange={ handleChangeTitle}
        />
      </div>
    </div>
  );
}

export default Filter;
