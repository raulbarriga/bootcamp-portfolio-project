import React from 'react'

// todo: pass data here
const FilterSortBtns = () => {

  const sortDropdown = (sort) => {
    const { filteredData } = this.state;
    //Low to high
    if (sort === "price-dsc") {
      sort = filteredData.sort((a, b) => {
        return a.price - b.price;
      });
    }
    //High to low
    if (sort === "price-asc") {
      sort = filteredData.sort((a, b) => {
        return b.price - a.price;
      });
    }
    //Square feet from high to low
    if (sort === "area-asc") {
      sort = filteredData.sort((a, b) => {
        return b.area - a.area;
      });
    }
    //Bedrooms from high to low
    if (sort === "beds-asc") {
      sort = filteredData.sort((a, b) => {
        return b.rooms - a.rooms;
      });
    }
    //Bathrooms from high to low
    if (sort === "bath-asc") {
      sort = filteredData.sort((a, b) => {
        return b.bathrooms - a.bathrooms;
      });
    }
    // this.setState({
    //   filteredData: sort,
    // });
  };

  return (
    <div id="filter-and-sort-row" className="row">
        <div className="col-sm-12 d-flex flex-nowrap float-right justify-content-end dropdown">
          <button id="filter-btn" className="btn order-1 mr-2" type="button">
            Filter
          </button>
          <div className="btn-group">
            <button
              type="button"
              id="sort-btn"
              className="btn dropdown-toggle order-2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{
                backgroundColor: "#f8f9fa",
                borderColor: "#ced4da",
              }}
            >
              Sort
            </button>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="sort-btn"
            >
              <button
                className="dropdown-item"
                type="button"
                onClick={() => sortDropdown("price-asc")}
              >
                Price (High to Low)
              </button>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => sortDropdown("price-dsc")}
              >
                Price (Low to High)
              </button>
              {/* <button className="dropdown-item" type="button">Newest</button> */}
              <button
                className="dropdown-item"
                type="button"
                onClick={() => sortDropdown("area-asc")}
              >
                Sqaure Feet
              </button>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => sortDropdown("beds-asc")}
              >
                Bedrooms
              </button>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => sortDropdown("bath-asc")}
              >
                Bathrooms
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default FilterSortBtns