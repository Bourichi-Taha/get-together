import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../assets/images/logo app.png"
const Navbar = () => {
    const location = useLocation();
console.log(location.pathname)
    return (
        <div>
            <header className="header_section" style={{background:"#0b0d10"}}>
                <div className="container">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <Link className="navbar-brand" to={'/'}>
                            <img src={logo} alt="" style={{height:"80px"}} />
                        </Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className=""> </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav  mx-auto ">
                                <li className={"nav-item " + (location.pathname === "/" ? "active" : "")}>
                                    <Link className="nav-link" to={"/"}>Home {location.pathname === "/" ? (<span className="sr-only">(current)</span>) : null}</Link>
                                </li>
                                <li className={"nav-item " + (location.pathname === "/menu" ? "active" : "")}>
                                    <Link className="nav-link" to={'/menu'}>Menu {location.pathname === "/menu" ? (<span className="sr-only">(current)</span>) : null}</Link>
                                </li>
                                <li className={"nav-item " + (location.pathname === "/about" ? "active" : "")}>
                                    <Link className="nav-link" to={"/about"}>About {location.pathname === "/about" ? (<span className="sr-only">(current)</span>) : null}</Link>
                                </li>
                                <li className={"nav-item " + (location.pathname === "/booking" ? "active" : "")}>
                                    <Link className="nav-link" to={"/booking"}>Book Table {location.pathname === "/booking" ? (<span className="sr-only">(current)</span>) : null}</Link>
                                </li>
                            </ul>
                            <div className="user_option">
                                <Link to={"/booking"} className="order_online">
                                    Order Online
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar