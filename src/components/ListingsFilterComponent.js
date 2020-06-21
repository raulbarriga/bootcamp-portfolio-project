import React, { Component } from 'react';

class Filter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }



    render(){
        return (
            <div className="col-md bg-light">
                <form action="#" className="search-property">
                    <div className="row">

                        {/* Property Type */}
                        <div className="col-md-12 align-items-end">
                            <div className="form-group">
                                <label id="property-label" htmlFor="#">Property Type</label>
                                <div className="form-field">
                                    <button id="property-btn" className="btn bg-white text-left w-100"
                                        type="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >Property Type</button>
                                    <ul className="dropdown-menu checkbox-menu w-100"
                                        aria-labelledby="property-btn"
                                        onChange={this.props.handleInputChange}
                                        >
                                        <span className="dropdown-menu-arrow"></span>
                                        <li id="property-type" className="ml-2">
                                            <label>
                                                <input type="checkbox" name="houses"
                                                checked={this.props.houses}
                                                onChange={this.props.handleInputChange} /> {' '}
                                                Houses
                                            </label>
                                        </li>
                                        <li id="property-type" className="ml-2">
                                            <label>
                                                <input type="checkbox"
                                                name="manufactured"
                                                checked={this.props.manufactured}
                                                /> {' '}
                                                Manufactured
                                            </label>
                                        </li>
                                        <li id="property-type" className="ml-2">
                                            <label>
                                                <input type="checkbox"
                                                name="condosCoOps"
                                                checked={this.props.condosCoOps}
                                                /> {' '}
                                                Condos&#47;co&#45;ops
                                            </label>
                                        </li>
                                        <li id="property-type" className="ml-2">
                                            <label>
                                                <input type="checkbox"
                                                name="multiFamily"
                                                checked={this.props.multiFamily}
                                                /> {' '}
                                                Multi&#45;family
                                            </label>
                                        </li>
                                        <li id="property-type" className="ml-2">
                                            <label>
                                                <input type="checkbox"
                                                name="apartments"
                                                checked={this.props.apartments}
                                                /> {' '}
                                                Apartments
                                            </label>
                                        </li>
                                        <li id="property-type" className="ml-2">
                                            <label>
                                                <input type="checkbox"
                                                name="lotsLand"
                                                checked={this.props.lotsLand}
                                                /> {' '}
                                                Lots&#47;Land
                                            </label>
                                        </li>
                                        <li id="property-type" className="ml-2">
                                            <label>
                                                <input type="checkbox"
                                                name="townhomes"
                                                checked={this.props.townhomes}
                                                /> {' '}
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
                                        <select name="propertyStatus"
                                            id="property-status"
                                            className="form-control"
                                            value={this.props.propertyStatus} 
                                            onChange={this.props.handleInputChange}
                                            >
                                            <option value="Type" selected>Type</option>
                                            <option value="Rent">Rent</option>
                                            <option value="Sale">Sale</option>
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
                                        <select name="bedrooms" id="bedrooms" className="form-control"
                                        value={this.props.bedrooms} onChange={this.props.handleInputChange}
                                        >
                                            <option value="0" selected>Any</option>
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
                                        <select name="bathrooms" id="baths" className="form-control"
                                        value={this.props.bathrooms} onChange={this.props.handleInputChange}
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
                                        <select name="minPrice" id="min-price" 
                                        className="form-control" value={this.props.minPrice} 
                                        onChange={this.props.handleInputChange}
                                        >
                                            <option value="MinPrice" selected>Min Price</option>
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
                                        <select name="maxPrice" id="max-price" 
                                        className="form-control" value={this.props.maxPrice} 
                                        onChange={this.props.handleInputChange}
                                        >
                                            <option value="MaxPrice" selected>Max Price</option>
                                            <option value="500000">&#36;500&#44;000</option>
                                            <option value="600000">&#36;600&#44;000</option>
                                            <option value="700000">&#36;700&#44;000</option>
                                            <option value="800000">&#36;800&#44;000</option>
                                            <option value="900000">&#36;900&#44;000</option>
                                            <option value="1000000">&#36;1M</option>
                                            <option value="25000000">&#36;1&#46;25M</option>
                                            <option value="50000000">&#36;1&#46;50M</option>
                                            <option value="75000000">&#36;1&#46;75M</option>
                                            <option value="75000000">Any Price</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Min Area */}
                        <div className="col-md-12 align-items-end">
                            <div className="form-group">
                                <label htmlFor="min-area">Min Area <span>&#40;sq&#46; ft&#46;&#41;</span></label>
                                <div className="form-field">
                                    <div className="icon"><span className="icon-pencil"></span></div>
                                    <input
                                    type="text"
                                    name="minArea"
                                    className="form-control"
                                    placeholder="Min Area"
                                    value={this.props.minArea} 
                                    onChange={this.props.handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Max Area */}
                        <div className="col-md-12 align-items-end">
                            <div className="form-group">
                                <label htmlFor="max-area">Max Area <span>&#40;sq&#46; ft&#46;&#41;</span></label>
                                <div className="form-field">
                                    <div className="icon"><span className="icon-pencil"></span></div>
                                    <input
                                    type="text"
                                    name="maxArea"
                                    className="form-control"
                                    placeholder="Max Area"
                                    value={this.props.maxArea} 
                                    onChange={this.props.handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Search Button on the Filter Menu */}
                        <div className="col-md-12 align-self-end">
                            <div className="form-group">
                                <div className="form-field">
                                    <input
                                    type="submit"
                                    value="Search"
                                    className="form-control btn btn-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Filter;