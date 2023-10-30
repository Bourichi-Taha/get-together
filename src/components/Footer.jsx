import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 footer-col">
                        <div className="footer_contact">
                            <h4>
                                Contact Us
                            </h4>
                            <div className="contact_link_box">
                                <Link to="https://maps.app.goo.gl/iRcH5nPY31LVf5gf9">
                                    <LocationOnIcon style={{marginRight:10}}/>
                                    <span>
                                        Location
                                    </span>
                                </Link>
                                <a href="">
                                    <LocalPhoneIcon style={{marginRight:10}}/>
                                    <span>
                                        Call +212 661 681 420
                                    </span>
                                </a>
                                <a href="">
                                    <MailIcon style={{marginRight:10}}/>
                                    <span>
                                        tangerapphotel@gmail.com
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 footer-col">
                        <div className="footer_detail">
                            <a href="" className="footer-logo">
                                get-together
                            </a>
                            <p>
                            Feel free to join us on our social media platforms to stay updated with the latest news, offers, and culinary inspirations. Follow our journey, and be part of our vibrant online community. Your support and engagement mean the world to us!
                            </p>
                            <div className="footer_social">
                                <a href="">
                                    <FacebookIcon />
                                </a>
                                <a href="">
                                    <TwitterIcon />
                                </a>
                                <a href="">
                                    <InstagramIcon />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 footer-col">
                        <h4>
                            Opening Hours
                        </h4>
                        <p>
                            Everyday
                        </p>
                        <p>
                            10.00 Am -10.00 Pm
                        </p>
                    </div>
                </div>
                <div className="footer-info">
                    <p>
                        &copy; <span id="displayYear"></span> All Rights Reserved By
                        <a href="#">Overlord</a><br /><br />
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer