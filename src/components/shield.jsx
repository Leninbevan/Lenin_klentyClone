import React from 'react';
import shield_background from "../assests/shield_background.png";
import shield from "../assests/shield.png";
import headset from "../assests/headset.png";
import customer from "../assests/customer-care.png";
import book from "../assests/book.png";
import direction from "../assests/direction.png";
import Iso from "../assests/Iso.png";
import gdpr from "../assests/gdpr.png";
import rating_card from "../assests/rating_card.png";
import clock from "../assests/clock.png";
import security_lock from "../assests/security_lock.png";
import security_man from "../assests/security_man.png";


import "../styles/shield.css";

const Shieldcomponent = () => {
    return (
        <div className='shield-container fadeIn2'>
            <div className='shieldcontent-container'>
                <div className='shieldcontent-containerHeader'>SUPPORT AND ONBOARDING</div>
                <div className='shieldcontent-containerHeader2'>Not Just a Software. A True Partner In Your Sales Success.</div>
                <div className='shieldcontent-container-cards'>
                    <div className='shieldcontentContainer-card'>
                        <div className='service-container'><img src={customer} alt="customer" className='service-img' /></div>
                        <div className='service-name'>Free, 24/7 support
                            across email, chat and phone</div>
                    </div>
                    <div className='shieldcontentContainer-card'>
                        <div className='service-container'><img src={book} alt="customer" className='service-img' /></div>
                        <div className='service-name'>Hand-held
                            onboarding and product workshops</div>
                    </div>
                    <div className='shieldcontentContainer-card'>
                        <div className='service-container'><img src={direction} alt="customer" className='service-img' /></div>
                        <div className='service-name'>Free white-gove
                            migration</div>
                    </div>
                </div>
            </div>
            <div className='security-shield' style={{ backgroundImage: `url(${shield_background})` }}>
                <img src={shield} alt="shield" className='shieldimg-container' />
                <img src={headset} alt="headset" className='shield-headimg' />
                <div className='shieldContent'>
                    <div className='security-shield-content'>
                        <div className='shieldcontent-containerHeader'>SECURITY AND PRIVACY</div>
                        <div className='shieldcontent-containerHeader2'>Enterprise-Grade Security And Reliable Platform Uptime</div>
                        <div className='security-shieldDsec'>So you face zero lags, zero downtime and zero data concerns. Keep selling like clockwork.</div>
                    </div>
                    <div className='security-services'>
                        <div>
                            <div><img src={clock} alt="clock" /></div>
                            <div className='service-percentage'>2.5 min</div>
                            <div className='service-security-name'>Support Response Time</div>
                        </div>
                        <div>
                            <div><img src={rating_card} alt="rating_card" /></div>
                            <div className='service-percentage'>99.5%</div>
                            <div className='service-security-name'>Platform Uptime</div>
                        </div>
                        <div>
                            <div><img src={security_lock} alt="security_lock" /></div>
                            <div className='service-percentage'>Configurable</div>
                            <div className='service-security-name'>Roles and Admin Permissions</div>
                        </div>
                        <div>
                            <div><img src={security_man} alt="security_man" /></div>
                            <div className='service-percentage'>Dedicated</div>
                            <div className='service-security-name'>Success Manager</div>
                        </div>
                        <div>
                            <div><img src={Iso} alt="Iso" style={{ width: "80px" }} /></div>
                        </div>
                        <div>
                            <div><img src={gdpr} alt="gdpr" style={{ width: "80px" }} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shieldcomponent