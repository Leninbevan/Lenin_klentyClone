import React from 'react';
import "../styles/salesmarket.css";
import Carousel from 'react-bootstrap/Carousel';
import BlueInk from "../assests/BlueInk.png";
import Double_donation from "../assests/Double_donation.png";
import First_Due from "../assests/First_Due.png";
import Gti from "../assests/Gti.png";
import Plauti from "../assests/Plauti.png";
import Salescard from './salesCard';

const Salesmarket = () => {
    const cardItems = [
        {
            img: BlueInk
        },
        {
            img: Double_donation
        },
        {
            img: First_Due
        },
        {
            img: Gti
        },
        {
            img: Plauti
        }
    ]
    return (
        <div className='sales-container'>
            <div className='sales-content fadeIn2'>
                <div className='sales-header'>See How World-Class Sales Teams Dominate Their Market</div>
                <div className='sales-dsec'>Hear our customers explaining the sales strategies, tactics and approaches that helped them create and close more pipeline.</div>
            </div>
            <div>
                <Carousel>
                    {
                        cardItems.map((item) => {
                            return (

                                <Carousel.Item>
                                    <div className='d-flex justify-content-center w-100'>
                                        <Salescard item={item} />
                                    </div>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
                {/* <Salescard /> */}
            </div>
        </div>
    )
}

export default Salesmarket