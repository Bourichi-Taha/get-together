import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
    return (
        <footer class="footer_section">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 footer-col">
                        <div class="footer_contact">
                            <h4>
                                Contact Us
                            </h4>
                            <div class="contact_link_box">
                                <a href="">
                                    <LocationOnIcon style={{marginRight:10}}/>
                                    <span>
                                        Location
                                    </span>
                                </a>
                                <a href="">
                                    <LocalPhoneIcon style={{marginRight:10}}/>
                                    <span>
                                        Call +01 1234567890
                                    </span>
                                </a>
                                <a href="">
                                    <MailIcon style={{marginRight:10}}/>
                                    <span>
                                        demo@gmail.com
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 footer-col">
                        <div class="footer_detail">
                            <a href="" class="footer-logo">
                                get-together
                            </a>
                            <p>
                                Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
                            </p>
                            <div class="footer_social">
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
                    <div class="col-md-4 footer-col">
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
                <div class="footer-info">
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