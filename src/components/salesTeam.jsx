import React from 'react';
import "../styles/salesteam.css";
import salesTeam1 from "../assests/salesTeam1.png";
import salesTeam2 from "../assests/salesTeam2.png";
import salesTeam_Design from "../assests/salesTeam_Design.png";
import Carousel from 'react-bootstrap/Carousel';

const Salesteam = () => {
    const cartItems = [
        { img: salesTeam1 },
        { img: salesTeam2 }
    ];
    return (
        <div className='salesteam-container'>
            <div className='salesteam-mainHeader'>Rated Highly By Growing Sales Teams With Varying Use-Cases</div>
            <Carousel>
                {
                    cartItems.map((item) => {
                        return (

                            <Carousel.Item>
                                <div className='salesTeam-card'>
                                    <img src={salesTeam_Design} alt="salesTeam_Design" style={{ width: "97px", height: "57px" }} />
                                    <div className='testimonialcard-container'>
                                        <div className='salesTeam-header'>Klenty has helped us
                                            engage a far greater number of leads per week, resulting in an outbound revenue jump of <span>93%</span>.</div>
                                        <div>
                                            <div className='sales-name'>Adam Weinger</div>
                                            <div>President, Double The Donation  </div>
                                        </div>
                                    </div>
                                    <div className='salesTeam-imgContainer'><img src={item.img} alt="salesTeam1" className='salesTeam-img' /></div>
                                </div>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Salesteam