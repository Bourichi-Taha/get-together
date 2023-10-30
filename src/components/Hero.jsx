import React from 'react'
import img from "../assets/images/hero.jpg"
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
const Hero = () => {
    return (
        <div className="hero_area">
            <div className="bg-box">
                <img src={img} alt=""/>
            </div>
            <Navbar />
            {/* <!-- slider section --> */}
            <section className="slider_section ">
                <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container ">
                                <div className="row">
                                    <div className="col-md-7 col-lg-6 ">
                                        <div className="detail-box">
                                            <h1>
                                                get-together Restaurant
                                            </h1>
                                            <p>
                                            Indulge in Culinary Excellence: Our Hotel Restaurant Awaits Your Palate.
                                            </p>
                                            <div className="btn-box">
                                                <Link to="/booking" className="btn1">
                                                    Order Now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <div className="container ">
                                <div className="row">
                                    <div className="col-md-7 col-lg-6 ">
                                        <div className="detail-box">
                                            <h1>
                                            get-together Restaurant
                                            </h1>
                                            <p>
                                            Culinary Delights at Your Doorstep: Savor the Flavors of Our Hotel Restaurant.
                                            </p>
                                            <div className="btn-box">
                                            <Link to="/booking" className="btn1">
                                                    Order Now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container ">
                                <div className="row">
                                    <div className="col-md-7 col-lg-6 ">
                                        <div className="detail-box">
                                            <h1>
                                                Fast Restaurant
                                            </h1>
                                            <p>
                                            Elevate Your Dining Experience: Discover the Finest Cuisine at Our Hotel Restaurant.
                                            </p>
                                            <div className="btn-box">
                                                <Link to="/booking" className="btn1">
                                                    Order Now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <ol className="carousel-indicators">
                            <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
                            <li data-target="#customCarousel1" data-slide-to="1"></li>
                            <li data-target="#customCarousel1" data-slide-to="2"></li>
                        </ol>
                    </div>
                </div>

            </section>
            {/* <!-- end slider section --> */}
        </div>
    )
}

export default Hero