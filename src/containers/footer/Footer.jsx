import React from 'react';
import { GiEgyptianBird } from 'react-icons/gi';
import ptLogo from '../../logo.svg';
import './footer.css';

const Footer = () => (
        <div className='pt_footer section_padding'>
            <div className='pt_footer-heading'>
                <h1 className='gradient_text'> Lets get geared up.</h1>
            </div>
            
            <div className='pt_footer-btn'>
                <p>Shop our collection</p>
            </div>

            <div className='pt_footer-links'>
                <div className='pt_footer-links_logo section_padding'>
                    <GiEgyptianBird size="4em" />
                </div>
                <div className='pt_footer-links_div'>
                    <h4>Shipping and Delivery</h4>
                    <p>Order Tracking</p>
                    <p>Refunds and returns</p>
                    <p>Who we are</p>
                    <p>Pro Program</p>
                </div>
                <div className='pt_footer-links_div'>
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className='pt_footer-links_div'>
                    <h4>Get in touch</h4>
                    <p>Careers</p>
                    <p>Newsroom</p>
                    <p>Customer Service</p>
                </div>
            </div>

            <div className='pt_footer-copyright'>
                <p>@2023 Park'teryx All Rights Reserved</p>
            </div>
        </div>
);

export default Footer;