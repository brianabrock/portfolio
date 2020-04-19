import React from 'react';
import Layout from "../components/layout";
import { Link } from "gatsby"

import yaystackLogo from '../images/yaystack/yay.jpg';
import nerd from '../images/yaystack/nerd-face-min.png';
import yayPhone from '../images/yaystack/yay_phone.png';
import user1 from '../images/yaystack/user1.png';
import user2 from '../images/yaystack/user2.png';
import user3 from '../images/yaystack/user3.png';
import scriptP1 from '../images/yaystack/script_p1.png';
import scriptP2 from '../images/yaystack/script_p2.png';
import summaryReport from '../images/yaystack/summary_report.png';

import SummaryReport from '../images/pdf/yaystack_usability_testing_summary_report_compressed.pdf';
import ScriptGuide from '../images/pdf/yaystack_usability_testing_script_compressed.pdf';

import './styles/yaystack.scss';

const YayStack = () => {

    return (
        <Layout>
            <div className="yaystack-page">
                <h1>Yaystack</h1>
                <section id="title">
                    <div className="image">
                        <img src={yaystackLogo} alt="yaystack logo" />
                    </div>
                    <div className="text">
                        <h3>Yaystack is an app where you find recommendations and deals from your friends.</h3>
                        <h3>“The best finds from your best friends. Yaystack is a social network for referrals and recommendations.”</h3>
                        <h3>Users will post recommendations for their favorite goods and services, and once shared, will activate deals.</h3>
                    </div>
                </section>

                <section id="role">
                    <div>
                        <img src={nerd} alt="smiley nerd" />
                    </div>
                    <div>
                        <h3>My Role</h3>
                        <p>UX Designer Consultant</p>

                        <h3>Goal</h3>
                        <p>Conduct Usability Testing on beta before product launch</p>
                    </div>
                    <div>
                        <img src={yayPhone} alt="yaystack app" />
                    </div>
                </section>

                <section id="scripts">
                    <h3>Usabilty Test Script Guide</h3>
                    <a href={ScriptGuide} download>
                        <p>Read full script</p>
                        <div>
                            <img src={scriptP1} alt="script page 1"/>
                            <img src={scriptP2} alt="script page 2"/>
                        </div>
                    </a>

                </section>

                <section id="testing">
                    <h3>Testing & Key Findings</h3>
                    <ul>
                        <li className="finding">
                            <h4>Lack of Clarity on Product Information</h4>
                            <ul>
                                <li>the users wanted to be able to click on the image for more information on the products, services, experiences</li>
                                <li>few posts had links</li>
                                <li>the home page seemed unorganized and it was unclear if posts were from people they were following</li>
                            </ul>
                        </li>
                        <li className="finding">
                            <h4>Lack of Search Options Create Difficulity Navigating</h4>
                            <ul>
                                <li>no way to search for specific items</li>
                                <li>no search by location</li>
                            </ul>
                        </li>
                        <li className="finding">
                            <h4>Lack of Confirmation of Actions</h4>
                            <ul>
                                <li>users wanted confirmation after posting recommendations</li>
                                <li>it is confusing, when adding (inviting) a friend, that the entire slide up menu pulled up</li>
                                <li>a confirmation after sending text invite was wanted, it was unclear if invitation was successfully sent</li>
                            </ul>
                        </li>
                        <li className="finding">
                            <h4>Trust</h4>
                            <ul>
                                <li>all 3 users would trust a recommendation from a friend</li>
                                <li>2 out of 3 users would not trust a recommendation from an “influencer” or person of status on social media</li>
                            </ul>
                        </li>
                    </ul>

                    <div>
                        <figure>
                            <img src={user1} alt="user 1 testing"/>
                            <figcaption>User 1: Full Stack Web Developer</figcaption>
                        </figure>
                        <figure>
                            <img src={user2} alt="user 2 testing"/>
                            <figcaption>User 2: UX Designer, Illustrator</figcaption>
                        </figure>
                        <figure>
                            <img src={user3} alt="user 3 testing"/>
                            <figcaption>User 3: Software Engineer</figcaption>
                        </figure>
                    </div>
                </section>

                <section id="summary">
                    <h3>Summary Report</h3>
                    <a href={SummaryReport} download>
                        <p>Read full report</p>
                        <img src={summaryReport} alt="summary report"/>
                    </a>
                </section>

                <div className="back-link" style={{textAlign: 'center', marginBottom: '40px'}}>
                    <Link to="/projects">Back to Projects Page</Link>
                </div>

            </div>
        </Layout>
    )

};

export default YayStack;
