import React from 'react'
import about from "../assets/images/about-img.png"
const About = () => {
    return (
        <section className="about_section layout_padding">
            <div className="container  ">

                <div className="row">
                    <div className="col-md-6 ">
                        <div className="img-box">
                            <img src={about} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="detail-box">
                            <div className="heading_container">
                                <h2>
                                    We Are get-together
                                </h2>
                            </div>
                            <p>
                            Our commitment to hospitality extends beyond what's on your plate. We understand that a great dining experience is about more than just the food. Our dedicated staff is here to ensure your time at get-together is nothing short of exceptional. From the moment you walk in, you're not just a guest; you're part of our family.
                            </p>
                            <a href="">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About