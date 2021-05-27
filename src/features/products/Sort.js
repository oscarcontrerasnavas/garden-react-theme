import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectProducts,
  selectFilters,
  updateFilters,
  changeView,
} from "./productsSlice";

const Sort = () => {
  const length = useSelector(selectProducts).length;
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  const updateFilter = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch(updateFilters({ name, value }));
  };

  return (
    <div className="row mb-4">
      <div className="row align-item-center">
        <div className="col-1 d-flex align-items-center justify-content-between">
          <button
            className="btn  btn-light  py-1 px-2 me-2"
            onClick={() => dispatch(changeView(false))}
          >
            <i className="bi bi-list-ul"></i>
          </button>
          <button
            className="btn  btn-light  py-1 px-2"
            onClick={() => dispatch(changeView(true))}
          >
            <i className="bi bi-grid"></i>
          </button>
        </div>
        <div className="col-11 d-flex align-items-center justify-content-between pe-0">
          <span className="d-block ms-4">{`${length} product${
            length === 1 ? "" : "s"
          } found`}</span>
          <form>
            <div className="row">
              <div className="col-4">
                <label className="col-form-label" htmlFor="sort">
                  sort by
                </label>
              </div>
              <div className="col pe-0">
                <select
                  className="form-select"
                  name="sort"
                  id="sort"
                  value={filters.sort}
                  onChange={(e) => {
                    updateFilter(e);
                  }}
                >
                  <option value="price-lowest">price (lowest)</option>
                  <option value="price-highest">price (highest)</option>
                  <option value="name-a">name (a-z)</option>
                  <option value="name-z">name (z-a)</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sort;
