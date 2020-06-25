import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faToilet, faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import $ from "jquery";
// import Filter from './ListingsFilterComponent';
import listingsData from '../Data/listingsData';


class Listings extends Component{
    constructor(props) {
        super(props);
        this.state = {
            listingsData,
            propertyStatus: 'Type',
            city: '',
            houses: false,
            manufactured: false,
            condosCoOps: false,
            multiFamily: false,
            apartments: false,
            lotsLand: false,
            townhomes: false,
            bedrooms: 0,
            bathrooms: 0,
            minPrice: 0,
            maxPrice: 100000000,
            minArea: 0,
            maxArea: 50000,
            filteredData: listingsData
        }
    }
    UNSAFE_componentWillMount = () => {
        // Filter Toggle Button
            $(function(){
            $("#filter-btn").click(function(){
            $("#filter").toggle();
            });
        });

        // Property Type Button Dropdown Remains Open on Checkbox Selection
        $(".checkbox-menu").on("change", "input[type='checkbox']", function() {
            $(this).closest("li").toggleClass("active", this.checked);
         });

         $(document).on('click', '.allow-focus', function (e) {
            e.stopPropagation();
          });

        this.setState({
            listingsData
        })
    }

    handleInputChange = (event) => {
        // console.log(event.target.value)

        const name = event.target.name;
        const value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;
        
        this.setState({
          [name]: value
        }, () => {
            console.log(this.state)
            this.filteredData();
        })

        // this.componentDidUpdate = () => {

        //     return (
        //         {[name]: value}
                
        //         )
        //         
        // }
    }

    filteredData = () => {
        const { listingsData } = this.state

        var newData = listingsData.filter((item) => {
            return (
                item.price >= this.state.minPrice && item.price <= this.state.maxPrice
                && item.area >= this.state.minArea && item.area <= this.state.maxArea
                && item.rooms >= this.state.bedrooms && item.bathrooms >= this.state.bathrooms
                )
        })
    
        // if(this.state.city !== ''){
        //     newData = newData.filter((item) => {
        //         return item.city == this.state.city;
        //     })
        // }
    
        // Rent or Sale
        if(this.state.propertyStatus !== 'Type'){
            newData = newData.filter((item) => {
                return item.propertyStatus == this.state.propertyStatus;
            })
        }
    
        this.setState({
            filteredData: newData
        }, () => {
            console.log(newData)
        })
    }
    
    loopListings = () => {

        const { listingsData } = this.state

        if(listingsData === undefined || listingsData.length == 0){
            return "Sorry your filter did not match any listing."
        }

        var initialView = listingsData.map((listing, index) => {
            return (
                <div className="card" key={index}>
                    <Link to="/">
                        <img src={listing.image} className="card-img-top img-fluid" alt="..." />
                    </Link>
                    <div id="card-body" className="card-body">
                        <div className="row d-flex justify-content-between">
                            <div className="col-sm-auto">
                                <h5 className="card-title price">$ {listing.price.toLocaleString('en')}</h5>
                            </div>
                            <div className="col-sm-auto">
                                <h6 className="card-title details">
                                    <FontAwesomeIcon className="fas" icon={faBed} /> {listing.rooms} bds &#124; <FontAwesomeIcon className="fas" icon={faToilet} /> {listing.bathrooms} ba &#124; {listing.floorSpace} sqft
                                </h6>
                            </div>
                        </div>
                        <Link to="/" className="text-decoration-none text-dark">
                            <strong className="card-text">
                                <FontAwesomeIcon className="fas" icon={faMapMarkerAlt} /> {' '}
                                <span>{listing.address}</span> {' '}
                                <span>{listing.city}</span> {' '} 
                                <span>{listing.state}</span> {' '}
                                <span>{listing.zipCode}</span>                            
                            </strong>
                        </Link>
                    </div>
                </div>
            )
        });

        return initialView;
    }

    render() {

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
                        <div className="btn-group">
                            <button type="button" id="sort-btn" className="btn dropdown-toggle order-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sort
                            </button>
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
                </div>

                {/* Filter row/Toggle Menu/Row */}
                <div className="row">

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
                                            <ul className="dropdown-menu allow-focus checkbox-menu w-100"
                                                aria-labelledby="property-btn"
                                                onChange={this.handleInputChange}
                                                >
                                                <span className="dropdown-menu-arrow"></span>
                                                <li id="property-type" className="ml-2">
                                                    <label>
                                                        <input type="checkbox" name="houses"
                                                        checked={this.state.houses}
                                                        onChange={this.handleInputChange} /> {' '}
                                                        Houses
                                                    </label>
                                                </li>
                                                <li id="property-type" className="ml-2">
                                                    <label>
                                                        <input type="checkbox"
                                                        name="manufactured"
                                                        checked={this.state.manufactured}
                                                        /> {' '}
                                                        Manufactured
                                                    </label>
                                                </li>
                                                <li id="property-type" className="ml-2">
                                                    <label>
                                                        <input type="checkbox"
                                                        name="condosCoOps"
                                                        checked={this.state.condosCoOps}
                                                        /> {' '}
                                                        Condos&#47;co&#45;ops
                                                    </label>
                                                </li>
                                                <li id="property-type" className="ml-2">
                                                    <label>
                                                        <input type="checkbox"
                                                        name="multiFamily"
                                                        checked={this.state.multiFamily}
                                                        /> {' '}
                                                        Multi&#45;family
                                                    </label>
                                                </li>
                                                <li id="property-type" className="ml-2">
                                                    <label>
                                                        <input type="checkbox"
                                                        name="apartments"
                                                        checked={this.state.apartments}
                                                        /> {' '}
                                                        Apartments
                                                    </label>
                                                </li>
                                                <li id="property-type" className="ml-2">
                                                    <label>
                                                        <input type="checkbox"
                                                        name="lotsLand"
                                                        checked={this.state.lotsLand}
                                                        /> {' '}
                                                        Lots&#47;Land
                                                    </label>
                                                </li>
                                                <li id="property-type" className="ml-2">
                                                    <label>
                                                        <input type="checkbox"
                                                        name="townhomes"
                                                        checked={this.state.townhomes}
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
                                                    value={this.state.propertyStatus} 
                                                    onChange={this.handleInputChange}
                                                    >
                                                    <option value="Type">Type</option>
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
                                                value={this.state.bedrooms} onChange={this.handleInputChange}
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
                                                <select name="bathrooms" id="baths" className="form-control"
                                                value={this.state.bathrooms} onChange={this.handleInputChange}
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
                                                className="form-control" value={this.state.minPrice} 
                                                onChange={this.handleInputChange}
                                                >
                                                    <option value="MinPrice">Min Price</option>
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
                                                className="form-control" value={this.state.maxPrice} 
                                                onChange={this.handleInputChange}
                                                >
                                                    <option value="MaxPrice">Max Price</option>
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
                                            value={this.state.minArea} 
                                            onChange={this.handleInputChange}
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
                                            value={this.state.maxArea} 
                                            onChange={this.handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* Search Button on the Filter Menu */}
                                {/* <div className="col-md-12 align-self-end">
                                    <div className="form-group">
                                        <div className="form-field">
                                            <input
                                            type="submit"
                                            value="Search"
                                            className="form-control btn btn-primary"
                                            onClick={this.props.filteredData} />
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </form>
                    </div>
                    {/* Property Listings */}
                    <div id="card-columns" className="col-md">
                        <div className="row">
                            {this.loopListings()}
                            {/* {() => this.filteredData()} */}
                        </div>
                    </div>

                </div>
                {/* property-cards-content */}
                
                

            </div>
        )
    };
}

export default Listings;