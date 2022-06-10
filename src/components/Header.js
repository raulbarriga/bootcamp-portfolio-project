import React, { Component } from 'react';
// import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{
    // constructor(props) {
    //     super(props);

    //     this.toggleNav = this.toggleNav.bind(this);
    //     this.state = {
    //       isNavOpen: false
    //     };
    // }

    // toggleNav() {
    //     this.setState({
    //         isNavOpen: !this.state.isNavOpen
    //     });
    // }

    render(){
        return (
            <React.Fragment>
                <header>
                    <nav className="navbar navbar-expand-custom navbar-dark" role="navigation">
                        <div id="container-fluid-nav" className="container-fluid">
                        <NavLink to='/bootcamp-portfolio-project/home' className="navbar-brand">LOGO</NavLink>
                        
                        {/* Collapse Button Toggler */}
                        <button
                            className="navbar-toggler ml-auto"
                            type="button"
                            data-toggle="collapse"
                            data-target="#toggle-btn"
                            aria-expanded="false"
                            aria-controls="toggle-btn"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div id="toggle-btn" className="collapse navbar-collapse">
                            <ul id="nav-css" className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to='/bootcamp-portfolio-project/home'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to='/bootcamp-portfolio-project/listings'>Listings</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to='/bootcamp-portfolio-project/aboutus'>About Us</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link text-white" to='/bootcamp-portfolio-project/login'>Log In</NavLink>
                            </li> */}
                            {/* <li id="nav-item-btn" className="nav-item">
                                <button className="btn btn-primary text-white" onclick="window.location.href='register.html'"><a href="register.html">Register</a></button>
                            </li> */}
                            </ul>
                        </div>
                    </div>
                    </nav>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;