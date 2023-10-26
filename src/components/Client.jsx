import React from 'react'
import client1 from "../assets/images/client1.jpg"
import client2 from "../assets/images/client2.jpg"
import OwlCarousel from 'react-owl-carousel';

const Client = () => {
    return (
        <section class="client_section layout_padding-bottom">
            <div class="container">
                <div class="heading_container heading_center psudo_white_primary mb_45">
                    <h2>
                        What Says Our Customers
                    </h2>
                </div>
                <div class="carousel-wrap row ">
                    <OwlCarousel class="owl-carousel client_owl-carousel" loop nav autoPlay autoplayHoverPause responsive={{0: {
                        items: 1
        },
                    768: {
                        items: 2
        },
                    1000: {
                        items: 2
        }}}>
                    <div class="item">
                        <div class="box">
                            <div class="detail-box">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                                <h6>
                                    Moana Michell
                                </h6>
                                <p>
                                    magna aliqua
                                </p>
                            </div>
                            <div class="img-box">
                                <img src={client2} alt="" class="box-img" />
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="box">
                            <div class="detail-box">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                                <h6>
                                    Mike Hamell
                                </h6>
                                <p>
                                    magna aliqua
                                </p>
                            </div>
                            <div class="img-box">
                                <img src={client1} alt="" class="box-img" />
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
        </section >
    )
}

export default Client