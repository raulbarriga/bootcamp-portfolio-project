import React from "react";

const ListingsFilter = () => {
  return (
    <div className="col-md bg-light">
      <form action="#" className="search-property">
        <div className="row">
          {/* Property Type */}
          <div className="col-md-12 align-items-end">
            <div className="form-group">
              <label id="property-label" htmlFor="#">
                Property Type
              </label>
              <div className="form-field">
                <button
                  id="property-btn"
                  className="btn bg-white text-left w-100"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Property Type
                </button>
                <ul
                  className="dropdown-menu allow-focus checkbox-menu w-100"
                  aria-labelledby="property-btn"
                  onChange={this.handleInputChange}
                >
                  <span className="dropdown-menu-arrow"></span>
                  <li id="property-type" className="ml-2">
                    <label>
                      <input
                        type="checkbox"
                        name="houses"
                        checked={this.state.houses}
                        onChange={this.handleInputChange}
                      />{" "}
                      Houses
                    </label>
                  </li>
                  <li id="property-type" className="ml-2">
                    <label>
                      <input
                        type="checkbox"
                        name="manufactured"
                        checked={this.state.manufactured}
                        onChange={this.handleInputChange}
                      />{" "}
                      Manufactured
                    </label>
                  </li>
                  <li id="property-type" className="ml-2">
                    <label>
                      <input
                        type="checkbox"
                        name="condosCoOps"
                        checked={this.state.condosCoOps}
                        onChange={this.handleInputChange}
                      />{" "}
                      Condos&#47;co&#45;ops
                    </label>
                  </li>
                  <li id="property-type" className="ml-2">
                    <label>
                      <input
                        type="checkbox"
                        name="multiFamily"
                        checked={this.state.multiFamily}
                        onChange={this.handleInputChange}
                      />{" "}
                      Multi&#45;family
                    </label>
                  </li>
                  <li id="property-type" className="ml-2">
                    <label>
                      <input
                        type="checkbox"
                        name="apartments"
                        checked={this.state.apartments}
                        onChange={this.handleInputChange}
                      />{" "}
                      Apartments
                    </label>
                  </li>
                  <li id="property-type" className="ml-2">
                    <label>
                      <input
                        type="checkbox"
                        name="lotsLand"
                        checked={this.state.lotsLand}
                        onChange={this.handleInputChange}
                      />{" "}
                      Lots&#47;Land
                    </label>
                  </li>
                  <li id="property-type" className="ml-2">
                    <label>
                      <input
                        type="checkbox"
                        name="townhomes"
                        checked={this.state.townhomes}
                        onChange={this.handleInputChange}
                      />{" "}
                      Townhomes
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Property Status */}
          <div className="col-md-12 align-items-end">
            <div className="form-group">
              <label htmlFor="property-status">Property Status</label>
              <div className="form-field">
                <div className="select-wrap">
                  <select
                    name="propertyStatus"
                    id="property-status"
                    className="form-control"
                    value={this.state.propertyStatus}
                    onChange={this.handleInputChange}
                  >
                    <option value="Type">Type</option>
                    <option value="rent">Rent</option>
                    <option value="sale">Sale</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* Bedrooms */}
          <div className="col-md-12 align-items-end">
            <div className="form-group">
              <label htmlFor="bedrooms">Bedrooms</label>
              <div className="form-field">
                <div className="select-wrap">
                  <div className="icon">
                    <span className="ion-ios-arrow-down"></span>
                  </div>
                  <select
                    name="bedrooms"
                    id="bedrooms"
                    className="form-control"
                    value={this.state.bedrooms}
                    onChange={this.handleInputChange}
                  >
                    <option value="0">Any</option>
                    <option value="1">1&#43;</option>
                    <option value="2">2&#43;</option>
                    <option value="3">3&#43;</option>
                    <option value="4">4&#43;</option>
                    <option value="5">5&#43;</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* Baths */}
          <div className="col-md-12 align-items-end">
            <div className="form-group">
              <label htmlFor="baths">Bathrooms</label>
              <div className="form-field">
                <div className="select-wrap">
                  <div className="icon">
                    <span className="ion-ios-arrow-down"></span>
                  </div>
                  <select
                    name="bathrooms"
                    id="baths"
                    className="form-control"
                    value={this.state.bathrooms}
                    onChange={this.handleInputChange}
                  >
                    <option value="0">Any</option>
                    <option value="1">1&#43;</option>
                    <option value="1.5">1.5&#43;</option>
                    <option value="2">2&#43;</option>
                    <option value="3">3&#43;</option>
                    <option value="4">4&#43;</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* Min Price */}
          <div className="col-md-12 align-items-end">
            <div className="form-group">
              <label htmlFor="min-price">Min Price</label>
              <div className="form-field">
                <div className="select-wrap">
                  <div className="icon">
                    <span className="ion-ios-arrow-down"></span>
                  </div>
                  <select
                    name="minPrice"
                    id="min-price"
                    className="form-control"
                    value={this.state.minPrice}
                    onChange={this.handleInputChange}
                  >
                    <option value="0">Min Price</option>
                    <option value="0">&#36;0&#43;</option>
                    <option value="100000">&#36;100&#44;000&#43;</option>
                    <option value="200000">&#36;200&#44;000&#43;</option>
                    <option value="300000">&#36;300&#44;000&#43;</option>
                    <option value="400000">&#36;400&#44;000&#43;</option>
                    <option value="500000">&#36;500&#44;000&#43;</option>
                    <option value="600000">&#36;600&#44;000&#43;</option>
                    <option value="700000">&#36;700&#44;000&#43;</option>
                    <option value="800000">&#36;800&#44;000&#43;</option>
                    <option value="900000">&#36;900&#44;000&#43;</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* Max Price */}
          <div className="col-md-12 align-items-end">
            <div className="form-group">
              <label htmlFor="max-price">Max Price</label>
              <div className="form-field">
                <div className="select-wrap">
                  <div className="icon">
                    <span className="ion-ios-arrow-down"></span>
                  </div>
                  <select
                    name="maxPrice"
                    id="max-price"
                    className="form-control"
                    value={this.state.maxPrice}
                    onChange={this.handleInputChange}
                  >
                    <option value="75000000">Max Price</option>
                    <option value="500000">&#36;500&#44;000</option>
                    <option value="600000">&#36;600&#44;000</option>
                    <option value="700000">&#36;700&#44;000</option>
                    <option value="800000">&#36;800&#44;000</option>
                    <option value="900000">&#36;900&#44;000</option>
                    <option value="1000000">&#36;1M</option>
                    <option value="1250000">&#36;1&#46;25M</option>
                    <option value="1500000">&#36;1&#46;50M</option>
                    <option value="1750000">&#36;1&#46;75M</option>
                    <option value="75000000">Any Price</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* Min Area */}
          <div className="col-md-12 align-items-end">
            <div className="form-group">
              <label htmlFor="min-area">
                Min Area <span>&#40;sq&#46; ft&#46;&#41;</span>
              </label>
              <div className="form-field">
                <div className="icon">
                  <span className="icon-pencil"></span>
                </div>
                <input
                  type="text"
                  name="minArea"
                  className="form-control"
                  placeholder="Min Area"
                  value={this.state.minArea}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
          </div>
          {/* Max Area */}
          <div className="col-md-12 align-items-end">
            <div className="form-group">
              <label htmlFor="max-area">
                Max Area <span>&#40;sq&#46; ft&#46;&#41;</span>
              </label>
              <div className="form-field">
                <div className="icon">
                  <span className="icon-pencil"></span>
                </div>
                <input
                  type="text"
                  name="maxArea"
                  className="form-control"
                  placeholder="Max Area"
                  value={this.state.maxArea}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ListingsFilter;
