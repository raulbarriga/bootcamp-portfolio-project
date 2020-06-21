import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faToilet, faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import $ from "jquery";
import Filter from './ListingsFilterComponent';
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
    componentDidMount = () => {
        // Filter Toggle Button
            $(function(){
            $("#filter-btn").click(function(){
            $("#filter").toggle();
            });
        });

        // Property Type Button Dropdown Remains Open on Checkbox Selection
        $('.dropdown-menu').click(function(e) {
            e.stopPropagation();
        });
    }

    handleInputChange = (event) => {
        console.log(event.target.value)

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
        let newData = this.state.listingsData.filter((item) => {
            return (
                item.price >= this.state.minPrice && item.price <= this.state.maxPrice
                && item.area >= this.state.minArea && item.area <= this.state.maxArea
                && item.bedrooms >= this.state.bedrooms && item.bathrooms >= this.state.bathrooms
                )
        })

        if(this.state.city !== ''){
            newData = newData.filter((item) => {
                return item.city == this.state.city;
            })
        }

        // Rent or Sale
        if(this.state.propertyStatus !== 'Type'){
            newData = newData.filter((item) => {
                return item.propertyStatus == this.state.propertyStatus;
            })
        }

        this.setState({
            filteredData: newData
        })
    }
    
    loopListings = () => {

        const { listingsData } = this.props

        if(listingsData === undefined || listingsData == 0){
            return "Sorry your filter did not match any listing."
        }

        return listingsData.map((listing, index) => {
            return (
                <div className="card" key={index}>
                    <Link to="/">
                        <img src={listing.image} className="card-img-top img-fluid" alt="..." />
                    </Link>
                    <div id="card-body" className="card-body">
                        <div className="row d-flex justify-content-between">
                            <div className="col-sm-auto">
                                <h5 className="card-title price">$ {listing.price}</h5>
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

                    <Filter handleInputChange={this.handleInputChange} />
                    {/* Property Listings */}
                    <div id="card-columns" className="col-md">
                        <div className="row">
                            {this.loopListings()}
                        </div>
                    </div>

                </div>
                {/* property-cards-content */}
                
                

            </div>
        )
    };
}

export default Listings;