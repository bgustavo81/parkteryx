import React from 'react';
import Article from '../../components/article/Article';
import { greenCave, bigWalling, iceClimbing, canyoneering, skiing } from './imports';
import './blog.css';

const Blog = () => (
    <div className="pt_blog section_padding" id="blog">
        <div className="pt_blog-heading">
            <h1 className='gradient_text'>Stay up to date with <br/> our the latest reports.</h1>
        </div>
        <div className='pt_blog-container'>
            <div className='pt_blog-container_groupA'>
                <Article imgUrl={greenCave} date="Dec 22, 2022" text="Cave conservation efforts in Vietnam go big."/>
            </div>
            <div className='pt_blog-container_groupB'>
                <Article imgUrl={bigWalling} date="Jan 02, 2023" text="Alex Honald sets a new time record at the Nose." />
                <Article imgUrl={iceClimbing} date="Jan 07, 2023" text="Ice climbing is in full swing." />
                <Article imgUrl={canyoneering} date="Jan 17, 2023" text="Clean up at the Black Canyon, Gunnison." />
                <Article imgUrl={skiing} date="Jan 01, 2023" text="New trails are blazed on the slopes." />
            </div>
        </div>
    </div>
);

export default Blog;