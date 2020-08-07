import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Listings from "./ListingsComponent";
import listingsData from "../Data/listingsData";
import ListingDetails from "./ListingDetailsComponent";
/* import Contact from './ContactComponent';*/
/* import About from './AboutComponent'; */

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listingsData,
        };
    }

    render() {
        const SinglePropertyInfo = ({ match }) => {
            console.log(match.params);

            return (
                <ListingDetails
                    data={
                        this.state.listingsData.filter(
                            (listing) => listing.id === +match.params.listingId
                        )[0]
                    }
                />
            );
        };

        return (
            <div className="main-container">
                <Header />
                <div className="content-wrap">
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route
                            exact
                            path="/listings"
                            render={() => (
                                <Listings
                                    listingsData={this.state.listingsData}
                                />
                            )}
                        />
                        {/* <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
                        <Route exact path='/contactus' component={Contact} />
                        <Route exact path='/aboutus' render={() => <About partners={this.state.partners} />} /> */}
                        <Route
                            path="/listings/:listingId"
                            component={SinglePropertyInfo}
                        />
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Main;
