import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { FaLinkedin, FaPhone } from 'react-icons/fa';
import { MdOutlineEmail, MdOutlineTextsms } from "react-icons/md";
import Email_tab from "../assests/Email_tab.png";
import Arrow from "../assests/card-arrow.png";
import linkedIn from "../assests/linkedIn.png";
import phone from "../assests/phone.png";
import sms_tab from "../assests/sms_tab.png";
import "../styles/media.css";


const Mediatabs = () => {
    function TabTitleWithIcon({ icon, title }) {
        return (
            <span className="tab-title-with-icon">
                <span className="icon-circle">{icon}</span>
                <span style={{ marginLeft: '8px' }}>{title}</span>
            </span>
        );
    }

    return (
        <div className='media-container'>
            <div className='media-contents'>
                <div className='media-header'>MULTI-CHANNEL OUTREACH</div>
                <div className='media-active'>Reach Prospects Wherever They’re Active</div>
                <div className='media-channels'>Unite your sales workflows across 5+ channels into one platform. With 1-click automation , blitz through activities across channels, saving hours.</div>
            </div>
            <div>
                <Tabs
                    defaultActiveKey="home"
                    id="uncontrolled-tab-example"
                    style={{ borderBottom: 'none' }}
                >
                    <Tab
                        eventKey="home"
                        title={<TabTitleWithIcon icon={<FaPhone />} title="Powerful Sales Dialer" />}
                        tabClassName="no-border-tab"
                    >
                        <div className='tab-container'>
                            <div className='tabContent'>
                                <div className='tabContent-header'>Powerful Sales Dialer</div>
                                <div>Place call after call without dialing.
                                    Use voicemails to increase call connect rates.
                                    Sync all notes to CRM.
                                </div>
                                <div className='media-nav'>
                                    <div style={{ fontSize: "14px", fontWeight: "600", color: "#504EE4" }}>LEARN MORE</div>
                                    <div><img src={Arrow} alt="Arrow" style={{ width: "20px" }} /></div>
                                </div>
                                <div className="loader"></div>
                            </div>
                            <div className='mediaImg-container'>
                                <img src={phone} alt="phone" className='media-image' />
                            </div>
                        </div>
                    </Tab>
                    <Tab
                        eventKey="profile"
                        title={<TabTitleWithIcon icon={<FaLinkedin />} title="LinkedIn" />}
                        tabClassName="no-border-tab"
                    >
                        <div className='tab-container'>
                            <div className='tabContent'>
                                <div className='tabContent-header'>LinkedIn</div>
                                <div>Klenty types and personalizes LinkedIn
                                    connect requests, InMails, and Messages for you.
                                    Just hit send.
                                </div>
                                <div className='media-nav'>
                                    <div style={{ fontSize: "14px", fontWeight: "600", color: "#504EE4" }}>LEARN MORE</div>
                                    <div><img src={Arrow} alt="Arrow" style={{ width: "20px" }} /></div>
                                </div>
                                <div className="loader"></div>
                            </div>
                            <div className='mediaImg-container'>
                                <img src={linkedIn} alt="phone" className='media-image' />
                            </div>
                        </div>
                    </Tab>
                    <Tab
                        eventKey="contact"
                        title={<TabTitleWithIcon icon={<MdOutlineEmail />} title="Email" />}
                        tabClassName="no-border-tab"
                    >
                        <div className='tab-container'>
                            <div className='tabContent'>
                                <div className='tabContent-header'>Email</div>
                                <div>Built for personalization-first sales teams.
                                    Insert prospect information, contextual snippets, videos, and well-researched openers into sales emails.
                                </div>
                                <div className='media-nav'>
                                    <div style={{ fontSize: "14px", fontWeight: "600", color: "#504EE4" }}>LEARN MORE</div>
                                    <div><img src={Arrow} alt="Arrow" style={{ width: "20px" }} /></div>
                                </div>
                                <div className="loader"></div>
                            </div>
                            <div className='mediaImg-container'>
                                <img src={Email_tab} alt="phone" className='media-image' />
                            </div>
                        </div>
                    </Tab>
                    <Tab
                        eventKey="whatsapp"
                        title={<TabTitleWithIcon icon={<MdOutlineTextsms />} title="SMS And WhatsApp" />}
                        tabClassName="no-border-tab"
                    >
                        <div className='tab-container'>
                            <div className='tabContent'>
                                <div className='tabContent-header'>SMS And Whatsapp</div>
                                <div>Add quick SMS and WhatsApp follow-ups
                                    for mobile-savvy prospects (that’s everyone, btw).
                                    Gently nudge prospects towards a conversation.
                                </div>
                                <div className='media-nav'>
                                    <div style={{ fontSize: "14px", fontWeight: "600", color: "#504EE4" }}>LEARN MORE</div>
                                    <div><img src={Arrow} alt="Arrow" style={{ width: "20px" }} /></div>
                                </div>
                                <div className="loader"></div>
                            </div>
                            <div className='mediaImg-container'>
                                <img src={sms_tab} alt="phone" className='media-image' />
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Mediatabs