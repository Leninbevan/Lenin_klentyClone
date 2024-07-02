import React from 'react';
import '../styles/explore.css';
import explore from "../assests/explore.png";

const Explorenew = () => {
    return (
        <div className='explore-container fadeIn2'>
            <div className='explore-header'>Unique Klenty Capabilities That Drive Pipeline</div>
            <div className='explore-textContent'>
                <div className='explore-cintent-header'>B2B PROSPECTING DATA</div>
                <div className='explore-verify'>Conquer Your Market With Verified, Accurate Contact Data</div>
                <div className='explore-data'>Klenty swiftly searches through 10+ data providers in a Waterfall Enrichment Model and gives you the most precise emails, direct dial numbers and account insights.</div>
                <div><button className="explore-button">EXPLORE PROSPECTING DATA</button></div>
            </div>
            <div className='exploreImgDiv'><img src={explore} alt="explore" className='explore-img'/></div>
        </div>
    )
}

export default Explorenew