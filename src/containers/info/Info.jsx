import React from 'react';
import Feature from '../../components/feature/Feature';
import './info.css';

const featuresData = [
    {
        title: 'Cutting edge cordura fabric',
        text: 'Whether you are backpacking the foothills of the appalachian mountains or caving in the north east Alabama our cordura fabric products have you covered.',
      },
      {
        title: 'Carbon fiber',
        text: 'Whether you are trailrunning that ultramarathon or hauling gear up a wall. Our carbon fiber products provide the rigidity you deserve.',
      },
      {
        title: 'Free from PVC',
        text: 'All of our products are free from PVC and will provide exceptional resistance to the elements.',
      },
      {
        title: 'Made here in North America',
        text: 'We take pride in sourcing and manufacturing our products in North America.',
      },
];

const Info = () => (
    <div className='pt_features section_padding' id='features'>
        <div className='pt_features-heading'>
            <h1 className='gradient_text'>
            Cutting edge technology and advancement for lasting and exceptional performance.
            <p>Take a look at the latest materials implemented in our products.</p>
            </h1>
        </div>
        <div className='pt_features-container'>
            {featuresData.map((item, index) => (
                <Feature title={item.title} text={item.text} key={item.title + index} />
            ))}
        </div>
    </div>
);

export default Info;