import React from 'react';
import people from '../../assets/people.png';
import climbingHeader from '../../assets/climbingHeader.jpg';
import './header.css';

const Header = () => (
    <div className='pt_header section_padding' id='home'>
        <div className='pt_header-content'>
            <h1 className='gradient_text'>Professional gear for the highest performing athletes</h1>
            <p>Claim 10% discount on your first order today.</p>

            <div className='pt_header-content_input'>
                <input type="email" placeholder='Your Email Address' />
                <button type='button'>Let's Go</button>
            </div>

            <div className='pt_header-content_people'>
                <img src={people} />
                <p>Outfitting over 1,600 athletes worldwide.</p>
            </div>
        </div>

        <div className='pt_header-image'>
            <img src={climbingHeader} />
        </div>
    </div>
);

export default Header;