import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faToilet, faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



class Listings extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

    //     const listings = () => {
    //     return (
            
    //     )
    // }

        return (
            <div className="container-fluid">
                {/* Location search box */}
                <div className="row">
                    <div className="col-md-12 align-items-end">
                        <div className="form-group">
                            <div className="form-field search-box">
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Enter City or Zip Code"/>
                                <FontAwesomeIcon className="fas" icon={faSearch} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filter & Sort Toggle Buttons/Row */}
                <div id="filter-and-sort-row" className="row">
                    <div className="col-sm-12 d-flex flex-nowrap float-right justify-content-end dropdown">
                        <button id="filter-btn" className="btn order-1 mr-2" type="button">Filter</button>
                        <button id="sort-btn" className="btn order-2 dropdown-toggle" type="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort</button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="sort-btn">
                            <a className="dropdown-item" href="#">Price (High to Low)</a>
                            <a className="dropdown-item" href="#">Price (Low to High)</a>
                            <a className="dropdown-item" href="#">Newest</a>
                            <a className="dropdown-item" href="#">Sqaure Feet</a>
                            <a className="dropdown-item" href="#">Bedrooms</a>
                            <a className="dropdown-item" href="#">Bathrooms</a>
                        </div>
                    </div>
                </div>

                {/* Filter row/Toggle Menu/Row */}
                <div id="filter property-cards-content" className="row">

                    <div className="col-md-3 bg-light">
                        <form action="#" className="search-property">
                            <div className="row">

                                {/* Property Type */}
                                <div className="col-md-12 align-items-end">
                                    <div className="form-group">
                                        <label id="property-label" for="#">Property Type</label>
                                        <div className="form-field">
                                            <button id="property-btn" className="btn bg-white text-left w-100"
                                            type="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">Property Type</button>
                                            <ul className="dropdown-menu checkbox-menu w-100"
                                            aria-labelledby="property-btn">
                                                <span className="dropdown-menu-arrow"></span>
                                                <li id="property-type" className="ml-2">
                                                    <label>
                                                        <input type="checkbox" />
                                                        Houses
                                                    </label>
                                                </li>
                                                <li id="property-type" className="ml-2">
                                                    <label>
                                                        <input type="checkbox" />
                                                        Manufactured
                                                    </label>
                                                </li>
                                                <li id="property-type" className="ml-2">
                                                    <label>
                                                        <input type="checkbox" />
                                                        Condos&#47;co&#45;ops
                                                    </label>
                                                </li>
                                                <li id="property-type" className="ml-2">
                                                    <label>
                                                        <input type="checkbox" />
                                                        Multi&#45;family
                                                    </label>
                                                </li>
                                                <li id="property-type" className="ml-2">
                                                    <label>
                                                        <input type="checkbox" />
                                                        Apartments
                                                    </label>
                                                </li>
                                                <li id="property-type" className="ml-2">
                                                    <label>
                                                        <input type="checkbox" />
                                                        Lots&#47;Land
                                                    </label>
                                                </li>
                                                <li id="property-type" className="ml-2">
                                                    <label>
                                                        <input type="checkbox" />
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
                                        <label for="property-status">Property Status</label>
                                        <div className="form-field">
                                            <div className="select-wrap">
                                                <select name="property-status" id="property-status" className="form-control">
                                                    <option value="">Type</option>
                                                    <option value="">Rent</option>
                                                    <option value="">Sale</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Bedrooms */}
                                <div className="col-md-12 align-items-end">
                                    <div className="form-group">
                                        <label for="bedrooms">Bedrooms</label>
                                        <div className="form-field">
                                            <div className="select-wrap">
                                                <div className="icon">
                                                    <span className="ion-ios-arrow-down"></span>
                                                </div>
                                                <select name="bedrooms" id="bedrooms" className="form-control">
                                                    <option value="">Any</option>
                                                    <option value="">1&#43;</option>
                                                    <option value="">2&#43;</option>
                                                    <option value="">3&#43;</option>
                                                    <option value="">4&#43;</option>
                                                    <option value="">5&#43;</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Baths */}
                                <div className="col-md-12 align-items-end">
                                    <div className="form-group">
                                        <label for="baths">Bathrooms</label>
                                        <div className="form-field">
                                            <div className="select-wrap">
                                                <div className="icon">
                                                    <span className="ion-ios-arrow-down"></span>
                                                </div>
                                                <select name="baths" id="baths" className="form-control">
                                                    <option value="">Any</option>
                                                    <option value="">1&#43;</option>
                                                    <option value="">1.5&#43;</option>
                                                    <option value="">2&#43;</option>
                                                    <option value="">3&#43;</option>
                                                    <option value="">4&#43;</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Min Price */}
                                <div className="col-md-12 align-items-end">
                                    <div className="form-group">
                                        <label for="min-price">Min Price</label>
                                        <div className="form-field">
                                            <div className="select-wrap">
                                                <div className="icon">
                                                    <span className="ion-ios-arrow-down"></span>
                                                </div>
                                                <select name="min-price" id="min-price" className="form-control">
                                                    <option value="">Min Price</option>
                                                    <option value="">&#36;0&#43;</option>
                                                    <option value="">&#36;100&#44;000&#43;</option>
                                                    <option value="">&#36;200&#44;000&#43;</option>
                                                    <option value="">&#36;300&#44;000&#43;</option>
                                                    <option value="">&#36;400&#44;000&#43;</option>
                                                    <option value="">&#36;500&#44;000&#43;</option>
                                                    <option value="">&#36;600&#44;000&#43;</option>
                                                    <option value="">&#36;700&#44;000&#43;</option>
                                                    <option value="">&#36;800&#44;000&#43;</option>
                                                    <option value="">&#36;900&#44;000&#43;</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Max Price */}
                                <div className="col-md-12 align-items-end">
                                    <div className="form-group">
                                        <label for="max-price">Max Price</label>
                                        <div className="form-field">
                                            <div className="select-wrap">
                                                <div className="icon">
                                                    <span className="ion-ios-arrow-down"></span>
                                                </div>
                                                <select name="max-price" id="max-price" className="form-control">
                                                    <option value="">Max Price</option>
                                                    <option value="">&#36;500&#44;000</option>
                                                    <option value="">&#36;600&#44;000</option>
                                                    <option value="">&#36;700&#44;000</option>
                                                    <option value="">&#36;800&#44;000</option>
                                                    <option value="">&#36;900&#44;000</option>
                                                    <option value="">&#36;1M</option>
                                                    <option value="">&#36;1&#46;25M</option>
                                                    <option value="">&#36;1&#46;50M</option>
                                                    <option value="">&#36;1&#46;75M</option>
                                                    <option value="">Any Price</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Min Area */}
                                <div className="col-md-12 align-items-end">
                                    <div className="form-group">
                                        <label for="min-area">Min Area <span>&#40;sq&#46; ft&#46;&#41;</span></label>
                                        <div className="form-field">
                                            <div className="icon"><span className="icon-pencil"></span></div>
                                            <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Min Area"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* Max Area */}
                                <div className="col-md-12 align-items-end">
                                    <div className="form-group">
                                        <label for="max-area">Max Area <span>&#40;sq&#46; ft&#46;&#41;</span></label>
                                        <div className="form-field">
                                            <div className="icon"><span className="icon-pencil"></span></div>
                                            <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Max Area"
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

                    <div id="card-columns" className="col-md">
                        
                        <div className="card">
                            <Link to="/">
                                <img src="https://media.remax-dev.booj.io/33bc3bcd-2ab4-322f-af04-9120fbedfd46/01_NewListings.jpg" className="card-img-top" alt="..." />
                            </Link>
                            <div id="card-body" className="card-body">
                                <div className="row d-flex justify-content-between">
                                    <div className="col-sm-auto">
                                        <h5 className="card-title">&#36;500&#44;000</h5>
                                    </div>
                                    <div className="col-sm-auto">
                                        <h6 className="card-title"><FontAwesomeIcon className="fas" icon={faBed} /> 2 bds &#124; <FontAwesomeIcon className="fas" icon={faToilet} /> 2 ba &#124; 1&#44;120 sqft</h6>
                                    </div>
                                </div>
                                <Link to="/" className="text-decoration-none text-dark">
                                    <strong className="card-text">
                                        <FontAwesomeIcon className="fas" icon={faMapMarkerAlt} /> 
                                        250 Lassen Ct&#46; Hollister&#44; CA 95023
                                    </strong>
                                </Link>
                            </div>
                        </div>
                    
                    </div>

                </div>

                {/* Property Listings */}
                <div id="property-cards-content" className="row">
                    
                    
                
                </div>

            </div>
        )
    };
}

export default Listings;