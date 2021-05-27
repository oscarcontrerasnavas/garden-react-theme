import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFilters,
  selectCategories,
  selectCompanies,
  selectColors,
  updateFilters,
  clearFilters,
} from "./productsSlice";
import styled from "styled-components";
import { formatPrice } from "../../utils/helpers";

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const categories = useSelector(selectCategories);
  const companies = useSelector(selectCompanies);
  const colors = useSelector(selectColors);

  const updateFilter = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "shipping") {
      value = e.target.checked;
    }

    dispatch(updateFilters({ name: name, value: value }));
  };

  return (
    <Wrapper className="mb-8 pb-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <article className="mb-5">
          <input
            type="text"
            name="search"
            id="search"
            className="form-control"
            placeholder="Search"
            value={filters.search}
            onChange={(e) => updateFilter(e)}
          />
        </article>
        <article className="mb-5">
          <h3 className="mb-4">Catergory</h3>
          {categories.map((cat, index) => {
            return (
              <div className="mb-2" key={index}>
                <button
                  className={`btn btn-link btn-category me-4 p-0 ${
                    cat.toLowerCase() === filters.category ? "active" : null
                  }`}
                  onClick={() =>
                    dispatch(updateFilters({ name: "category", value: cat }))
                  }
                >
                  {cat}
                </button>
              </div>
            );
          })}
        </article>
        <article className="mb-5">
          <h3 className="mb-4">Company</h3>
          <select
            name="company"
            className="form-select"
            value={filters.company}
            onChange={(e) => {
              updateFilter(e);
            }}
          >
            {companies.map((company, index) => {
              return (
                <option value={company} key={index}>
                  {company}
                </option>
              );
            })}
          </select>
        </article>
        <article className="mb-5">
          <h3 className="mb-4">Colors</h3>
          <div className="colors d-flex justify-content-between align-items-center">
            {colors.map((color, index) => {
              if (color === "all") {
                return (
                  <button
                    className={`btn btn-link p-0 m-0 ${
                      color.toLowerCase() === filters.color ? "active" : null
                    }`}
                    key={index}
                    onClick={() =>
                      dispatch(updateFilters({ name: "color", value: color }))
                    }
                  >
                    {color}
                  </button>
                );
              }
              return (
                <button
                  className={`btn btn-color rounded-circle shadow ${
                    color.toLowerCase() === filters.color ? "active" : null
                  }`}
                  key={index}
                  style={{ backgroundColor: color }}
                  onClick={() =>
                    dispatch(updateFilters({ name: "color", value: color }))
                  }
                ></button>
              );
            })}
          </div>
        </article>
        <article className="mb-5">
          <h3 className="mb-4">Price </h3>
          <p>{formatPrice(filters.price)}</p>
          <input
            type="range"
            name="price"
            id="price"
            className="form-range"
            value={filters.price}
            min={filters.min_price}
            max={filters.max_price}
            onChange={(e) => {
              updateFilter(e);
            }}
          />

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="shipping"
              name="shipping"
              onChange={updateFilter}
              checked={filters.shipping}
            />
            <label className="form-check-label" htmlFor="shipping">
              Free shipping
            </label>
          </div>
        </article>
        <article>
          <button
            className="btn btn-secondary btn-sm text-light"
            onClick={() => {
              dispatch(clearFilters());
            }}
          >
            Clear Filters
          </button>
        </article>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  .colors {
    .btn-color {
      height: 20px;
      margin-left: 0.2rem;
      margin: 0;
      padding: 0;
      width: 20px;

      &.active {
        border: 2px solid black;
      }
    }
  }
`;

export default Filters;
