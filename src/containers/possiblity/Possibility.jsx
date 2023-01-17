import React from 'react';
import caving from '../../assets/caving.jpg';
import './possibility.css';

const Possibility = () => (
    <div className='pt_possibility section_padding' id='possibility'>
        <div className='pt_possibility-image'>
            <img src={caving} alt="caving" />
        </div>
        <div className='pt_possibility-content'>
            <h4>Check out our latest line up of caving gear.</h4>
            <h1 className='gradient_text'>Exploration underground done right.</h1>
            <p>With the demands and wear tear caving brings, we have engineered top of the line products with our
                 propietary cordura fabric. Long gone are the days of tearing through endless shirts and getting cold. 
                 Our suits will keep you warm and protected regardless of the terrain. 
            </p>
            <h4>Learn more about our propietary cordura fabric.</h4>
        </div>
    </div>
)

export default Possibility;