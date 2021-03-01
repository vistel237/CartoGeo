import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
                <div className="row collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="col-9">
                        <a className="navbar-brand" href="#">
                            <img src="https://cdn3.iconfinder.com/data/icons/back-to-school-80/32/orbit_moon_earth_geography-256.png" width={30} height={30} className="d-inline-block align-top" alt />
                            CartoGéo
                        </a>
                    </div>
                    <div className="col-3">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Acceuille <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>  
                </div>
            </nav>
        </div>
    );
};

export default Navbar;