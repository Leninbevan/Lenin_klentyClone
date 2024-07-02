import React from 'react';
import Homeimg from "../assests/home-mg.png";
import "../styles/home.css";
import Carousel from './carousel';

const Home = () => {

    return (
        <div className='home-container'>
            <div className='contentImg-container fadeIn'>
                <div className='content-container'>
                    <div className='content-header '>SALES ENGAGEMENT AND INTELLIGENCE PLATFORM</div>
                    <div className='font-50'>Find, Engage and Convert Prospects Into Pipeline</div>
                    <div className='font-18'>Klenty combines a B2B prospecting database, multi-channel sequences and AI across the sales cycle to help sales teams predictably hit their number.</div>
                    <div><button className="homeSchedule-button">SCHEDULE A DEMO</button></div>
                </div>
                <div className='img-container'><img src={Homeimg} alt="home" className='home-img' /></div>
            </div>
            <div className='carouselDiv'>
                <div className='carousel-header'>Helping Over 5000+ Fast-Growing Sales Teams Crush Targets</div>
                <div><Carousel/></div>
                <div className='font-32'>Everything You Need to Run Your Sales Process.In One Platform.</div>
            </div>
        </div>
    )
}

export default Home