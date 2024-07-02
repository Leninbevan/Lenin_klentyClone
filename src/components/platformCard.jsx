import React from 'react';
import "../styles/platformcard.css";
import Find from "../assests/find-img.png";
import coach from "../assests/coach.png";
import engage from "../assests/engage.png";
import route from "../assests/route.png";
import Arrow from "../assests/card-arrow.png";

const Platformcard = () => {
    const cardItems = [
        {
            img: Find,
            head:"Find",
            content: "Get accurate emails and direct-dial mobile numbers for your ideal prospects,verified using the Waterfall Enrichment Model",
            nav: "EXPLORE SALES INTELLIGENCE",
            nvaIcon: Arrow
        },
        {
            img: engage,
            head:"Engage",
            content: "Reach out to prospects across email, phone, LinkedIn, WhatsApp and SMS. Follow-up consistently and systematically.",
            nav: "EXPLORE MULTI-CHANNEL OUTREACH",
            nvaIcon: Arrow
        },
        {
            img: route,
            head:"Route",
            content: "Turn every interested website visitor into a booked meeting. Assign the right lead to the right rep based on availability,form answers.",
            nav: "EXPLORE LEAD ROUTING",
            nvaIcon: Arrow
        },
        {
            img: coach,
            head:"Coach",
            content: "Automatically record, transcribe and analyze every sales conversation. Coach reps to adopt the strategies.",
            nav: "EXPLORE CONVERSATION INTELLIGENCE",
            nvaIcon: Arrow
        }

    ]
    return (
        <div className='card-container'>
            {
                cardItems.map((item, index) => {
                    return (
                        <>
                            <div className='platform-card' key={index}>
                                <div className='platformImg-container'>
                                    <div className='card-header'>{item.head}</div>
                                    <img src={item.img} alt="platformimg" className='main-img' />
                                </div>
                                <div className='info-content'>{item.content}</div>
                                <div className='navigation'>
                                    <div className='nav-text'>{item.nav}</div>
                                    <div><img src={item.nvaIcon} alt="arrow" style={{ width: "20px" }} /></div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>

    )
}

export default Platformcard