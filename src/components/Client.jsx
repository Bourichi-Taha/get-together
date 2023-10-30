import React from 'react'
import client1 from "../assets/images/client1.jpg"
import client2 from "../assets/images/client2.jpg"
import OwlCarousel from 'react-owl-carousel';

const Client = () => {
    return (
        <section className="client_section layout_padding-bottom">
            <div className="container">
                <div className="heading_container heading_center psudo_white_primary mb_45">
                    <h2>
                        What Says Our Customers
                    </h2>
                </div>
                <div className="carousel-wrap row ">
                    <OwlCarousel className="owl-carousel client_owl-carousel" loop nav autoPlay autoplayHoverPause responsive={{0: {
                        items: 1
        },
                    768: {
                        items: 2
        },
                    1000: {
                        items: 2
        }}}>
                    <div className="item">
                        <div className="box">
                            <div className="detail-box">
                                <p>
                                The food here is absolutely amazing! Every dish is bursting with flavor, and the service is top-notch.
                                </p>
                                <h6>
                                    Moana Michell
                                </h6>
                                <p>
                                    magna aliqua
                                </p>
                            </div>
                            <div className="img-box">
                                <img src={client2} alt="" className="box-img" />
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="box">
                            <div className="detail-box">
                                <p>
                                The ambiance, the food, the service—everything here is exceptional. It's become our favorite spot for special occasions.
                                </p>
                                <h6>
                                    Moana Michell
                                </h6>
                                <p>
                                    magna aliqua
                                </p>
                            </div>
                            <div className="img-box">
                                <img src={client1} alt="" className="box-img" />
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="box">
                            <div className="detail-box">
                                <p>
                                The Tagine de Bœuf is a must-try. It's like a trip to Morocco on a plate. I keep coming back for more.
                                </p>
                                <h6>
                                    Mike Hamell
                                </h6>
                                <p>
                                    magna aliqua
                                </p>
                            </div>
                            <div className="img-box">
                                <img src={client2} alt="" className="box-img" />
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="box">
                            <div className="detail-box">
                                <p>
                                I can't get enough of the Pizza Margherita. It's the best I've had outside of Italy. The authenticity of this place is impressive.
                                </p>
                                <h6>
                                    Mike Hamell
                                </h6>
                                <p>
                                    magna aliqua
                                </p>
                            </div>
                            <div className="img-box">
                                <img src={client1} alt="" className="box-img" />
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