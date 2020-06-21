import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link }from 'react-router-dom';

function Home() {
    return (
        <div className="container-fluid">
            {/* Image Banner */}
            <div className="row">
                <div id="home-banner" className="col-12 px-0">
                    <div className="overlay"></div>
                    {/* Search form */}
                    <div className="row">
                        <div className="col search-box ml-auto">
                            <form>
                                <div className="form-row">
                                    <div className="col-7">
                                        <input className="form-control mr-3" type="search" placeholder="Enter City or Zip Code"
                                        aria-label="Search" />
                                    </div>
                                    <button className="btn bg-white"><Link to='/listings'><FontAwesomeIcon className="fas" icon={faSearch} /></Link></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;   