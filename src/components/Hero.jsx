import React from 'react'
import img from "../assets/images/hero-bg.jpg"
const Hero = () => {
    return (
        <div class="hero_area">
            <div class="bg-box">
                <img src={img} alt=""/>
            </div>
            {/* <!-- header section strats --> */}
            <header class="header_section">
                <div class="container">
                    <nav class="navbar navbar-expand-lg custom_nav-container ">
                        <a class="navbar-brand" href="index.html">
                            <span>
                                get-together
                            </span>
                        </a>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class=""> </span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav  mx-auto ">
                                <li class="nav-item active">
                                    <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="menu.html">Menu</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="about.html">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="book.html">Book Table</a>
                                </li>
                            </ul>
                            <div class="user_option">
                                <a href="" class="order_online">
                                    Order Online
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            {/* <!-- end header section --> */}
            {/* <!-- slider section --> */}
            <section class="slider_section ">
                <div id="customCarousel1" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="container ">
                                <div class="row">
                                    <div class="col-md-7 col-lg-6 ">
                                        <div class="detail-box">
                                            <h1>
                                                Fast Food Restaurant
                                            </h1>
                                            <p>
                                                Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                                            </p>
                                            <div class="btn-box">
                                                <a href="" class="btn1">
                                                    Order Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item ">
                            <div class="container ">
                                <div class="row">
                                    <div class="col-md-7 col-lg-6 ">
                                        <div class="detail-box">
                                            <h1>
                                                Fast Food Restaurant
                                            </h1>
                                            <p>
                                                Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                                            </p>
                                            <div class="btn-box">
                                                <a href="" class="btn1">
                                                    Order Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="container ">
                                <div class="row">
                                    <div class="col-md-7 col-lg-6 ">
                                        <div class="detail-box">
                                            <h1>
                                                Fast Food Restaurant
                                            </h1>
                                            <p>
                                                Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                                            </p>
                                            <div class="btn-box">
                                                <a href="" class="btn1">
                                                    Order Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <ol class="carousel-indicators">
                            <li data-target="#customCarousel1" data-slide-to="0" class="active"></li>
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