import React from 'react'
import logo from "../Icon/logo.svg"


function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img src={logo} alt="Logo" style={{marginRight:  "20rem" }} className='ml-5'/>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent ">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Job Listings</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Applied jobs</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Created jobs</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Audit Troll</a>
                            </li>
                        </ul>
                        <button type="button" style={{marginLeft:  "10rem"}}className="btn btn-outline-secondary mr-5">Log Out</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar