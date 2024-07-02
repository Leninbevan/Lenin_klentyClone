import React from 'react';
import { FaLongArrowAltUp, FaPhone } from 'react-icons/fa';
import { LuMoveRight } from "react-icons/lu";
import sales from "../assests/sales-card.png";
import "../styles/salescard.css";

const Salescard = ({item}) => {
    return (
        <div className='d-flex salescard-container' style={{backgroundImage: `url(${sales})`}}>
            <div className='salescard-content'>
                <div className='sales-percentageontainer'>
                    <div className='salescard-header'>Double The Donation increases outbound revenue by 93% through systematic outreach</div>
                    <hr></hr>
                    <div className='salesCard-percentageDiv'>
                        <div className='salescard-percentage'>
                            <div style={{color:"white"}}><span className='salescard-icon'><FaPhone style={{fontSize:"20px",color:"#6D50CC"}}/></span>Dails per day</div>
                            <div style={{fontSize:"24px",fontWeight:600,color:"white"}}>1000<span><FaLongArrowAltUp style={{fontSize:"18px",color:"#00E2C7"}}/></span></div>
                        </div>
                        <div className='salescard-percentage'>
                            <div style={{color:"white"}}><span className='salescard-icon'><FaPhone style={{fontSize:"20px",color:"#6D50CC"}}/></span>Increase in email</div>
                            <div style={{fontSize:"24px",fontWeight:600,color:"white"}}>40%<span><FaLongArrowAltUp style={{fontSize:"18px",color:"#00E2C7"}}/></span></div>
                        </div>
                    </div>
                </div>
                <div className='salescard-nav'>
                    <div style={{fontSize:"20px",fontWeight:600,color:"#6DE5FF"}}>READ CASE STUDY</div>
                    <div><LuMoveRight style={{fontSize:"30px",color:"#6DE5FF"}}/></div>
                </div>
            </div>
            <div className='salescard-imgContainer'><img src={item.img} alt="BlueInk" className='salescard-img'/></div>
        </div>
    )
}

export default Salescard