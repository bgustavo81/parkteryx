import React from "react";
import Feature from '../../components/feature/Feature';
import './whatPT.css';

const WhatPT = () => (
    <div className="pt_whatpt section_margin" id="whatpt">
        <div className="pt_whatpt-feature">
            <Feature title="What is Park'teryx" text="In 1997, Park'teryx opened shop in Atlanta, Georgia with one vision. The vision to provide the highest quality outdoor gear for world class athletes and regular people alike." />
        </div>
        <div className="pt_whatpt-heading">
            <h1 className="gradient_text">But we are more than just an outdoor apparel brand.</h1>
            <p>Explore our collection</p>
        </div>
        <div className="pt_whatpt-container">
            <Feature title="Conservation" text="We are a proponent for conservation and in doing so we donate substantial amount of our profits to conservation efforts. We believe in a future of climbing, caving, and outback preserves the future generation can enjoy." />
            <Feature title="Lifestyle" text="Enjoy our products out in the mountains or out in the busy city. Our products are designed to meet your everyday needs and more." />
            <Feature title="Affordability" text="With affordability in mind, we have sought out the most cost effective manufacturing solutions and pass the saving onto our consumers." />
        </div>
    </div>
);

export default WhatPT;