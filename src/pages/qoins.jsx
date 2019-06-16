import React from 'react';
import Layout from "../components/layout"
// import { Link } from "gatsby"
import './css/qoins.scss'

// import infinityMap from '../images/qoins/title9.png'
// import team from '../images/qoins/team.png'
// import team2 from '../images/qoins/team2.png'
// import team3 from '../images/qoins/team3.png'
// import img2 from '../images/qoins/img2.png'
// import img3 from '../images/qoins/img3.png'
// import img4 from '../images/qoins/img4.png'
// import img5 from '../images/qoins/img5.png'

import img1 from '../images/qoins/update/1-QOINS-Logo.png';
import img2 from '../images/qoins/update/2-Qoins-Image.png';
import img3 from '../images/qoins/update/3.png';
import img4 from '../images/qoins/update/4.png';
import img5 from '../images/qoins/update/5.png';
import img6 from '../images/qoins/update/6-Rounding-Up.png';
import img7 from '../images/qoins/update/7-Smart-Savings.png';
import img8 from '../images/qoins/update/8-Set-Money-Aside.png';
import img9 from '../images/qoins/update/9-Pay-Off-Debt.png';
import img10 from '../images/qoins/update/10-identity.png';
import img11 from '../images/qoins/update/11-cc.png';
import img12 from '../images/qoins/update/12-funding.png';
import img13 from '../images/qoins/update/13-Competative-Analysis-Chart.png';
import img14 from '../images/qoins/update/14-SurveyImage.png';
import img15 from '../images/qoins/update/15-Usability-Testing.jpg';
import img16 from '../images/qoins/update/16-Usability-Testing.png';
import img17desk from '../images/qoins/update/wireframe-desk.png';
import img17tab from '../images/qoins/update/wireframe-tab.png';
import img17mob from '../images/qoins/update/wireframe-mob.png';
import img18 from '../images/qoins/update/18-Affinity-Mapping.jpg';
import img19 from '../images/qoins/update/19-Affinity-Mapping.jpg';
import img20 from '../images/qoins/update/chart.png';
import img21 from '../images/qoins/update/20-Nurse-Qoins-Persona.jpg';
import img22 from '../images/qoins/update/22-Changes.png';
import img23 from '../images/qoins/update/23-Changes.png';
import img24 from '../images/qoins/update/24-Changes.png';
import img25 from '../images/qoins/update/25-Changes.png';
import img26 from '../images/qoins/update/26-F-Credit-Card-Debt.png';
import iteratedesk from '../images/qoins/update/iterate-desk.png';
import iteratetab from '../images/qoins/update/iterate-tab.png';
import iteratemob from '../images/qoins/update/iterate-mob.png';
// import img27 from '../images/qoins/update/.png';
// import img28 from '../images/qoins/update/.png';

const Qoins = () => (
    <Layout>
        <div className="qoins-page">

            <section className="qoins1">
                <div className="top">
                    <div className="col col-l">
                        <img src={img1} alt=""/>
                        <p>“Pay off debt faster, without thinking about it."</p>
                        <p>"Use spare change from everyday transactions to make an extra payment towards your debt, every month.”</p>
                    </div>
                    <div className="col col-r">
                        <img src={img2} alt=""/>
                    </div>
                </div>
                <div className="bottom">
                    <p className="heading un">Meet the Team</p>
                    <div className="team">
                        <div className="member">
                            <img src={img3} alt=""/>
                            <p>Morgan Breier</p>
                        </div>
                        <div className="member">
                            <img src={img4} alt=""/>
                            <p>Ashton Cheeks</p>
                        </div>
                        <div className="member">
                            <img src={img5} alt=""/>
                            <p>Briana Brock</p>
                        </div>
                    </div>
                    <p className="info">We worked along side a client with their existing product to find out how we could improve their user’s on-boarding experience and increase their active user base, increasing revenue.</p>
                </div>
            </section>

            <section className="divide main divide1">
                <p className="heading up">Got Debt?</p>
                <p>The average American has between $67,000-$134,000 worth of debt.</p>
                <p>Americans have about $3 trillion worth of interest alone, that’s about $10K per person.</p>
                <p>While people are aware, they don’t really talk about the psychological effect massive debt has.</p>
                <p>The emotional effects of debt include denial, stress, fear and panic, anger and depression.</p>
                <p>But there’s a sense of relief, freedom, and accomplishment from paying off debt</p>
            </section>

            <section className="qoins2">
                <p className="heading up">What is Qoins?</p>
                <p className="info">A financial management mobile app that rounds up your individual purchases and allows you to set up automatic payments to set money aside in order for you to pay off your debt faster.</p>
                <p className="heading up">How Qoins Works</p>
                <div className="tags">
                    <div className="tag">
                        <img src={img6} alt=""/>
                        <p>Round-Up</p>
                    </div>
                    <div className="tag">
                        <img src={img7} alt=""/>
                        <p>Smart-Savings</p>
                    </div>
                    <div className="tag">
                        <img src={img8} alt=""/>
                        <p>Set Money Aside</p>
                    </div>
                    <div className="tag">
                        <img src={img9} alt=""/>
                        <p>Pay Off Debt</p>
                    </div>
                </div>

                <div className="box">
                    <p>Qoins has over 60,000 downloads, but only 12,000 active users</p>
                    <p>Qoins measure of success is a 3 step process:</p>
                    <div className="tags">
                        <div className="tag">
                            <img src={img10} alt=""/>
                            <p>Identification Verification</p>
                        </div>
                        <div className="tag">
                            <img src={img11} alt=""/>
                            <p>Set up your Creditor/ Lender</p>
                        </div>
                        <div className="tag">
                            <img src={img12} alt=""/>
                            <p>Set up your Funding Source</p>
                        </div>
                    </div>
                </div>

                <p className="heading">Problem</p>
                <p className="info">Qoins needs a way to streamline the on boarding process to increase their active users</p>

                <p className="heading">Solution</p>
                <p className="info">We believe that by consolidating screens, it will lead to an easier more enjoyable experience </p>

            </section>

            <section className="divide main divide2">
                <p className="heading up">The Process: 2 Week Sprint</p>

                <p>Week 1</p>
                <p>Competitive analysis,  Survey, Interviews, User Testing on Existing Product, Synthesis/Ideation</p>
                <p>Week 2</p>
                <p>Iterations on product for final mockup, Testing, Delivery to Client </p>
            </section>


            <section className="qoins3">
                <div className="col col-l">
                    <p className="heading un">Competitive Analysis</p>

                    <p>Competitors vary with:</p>
                    <p>Monthly/various fees</p>
                    <p>Abilities and offers</p>
                    <p>Number of on-boarding screens</p>
                    <p>All having the ability to sign up after the first screen, something that Qoins does not offer</p>

                </div>
                <div className="col col-r">
                    <img src={img13} alt=""/>
                </div>

            </section>

            <section className="divide"></section>

            <section className="qoins4">
                <div className="col col-l">
                    <p className="heading un">Survey</p>
                    <p>During our client meeting we requested access to their current client list to submit a survey to gauge customer interactions with the app.</p>
                    <p>We received 0 responses to the survey…</p>
                    <p>We then realized we needed access to the users who bailed on the on boarding process.  While Qoins had the email addresses on those who did not complete the on boarding process, we were denied access to them.</p>
                </div>
                <div className="col col-r">
                    <img src={img14} alt=""/>
                </div>
            </section>

            <section className="divide"></section>

            <section className="qoins5">
                <p className="heading un">Interviews</p>
                <p>We interviewed 8 people with varying backgrounds, all with some form of debt</p>
                <ul>
                    <li>Each individual had multiple forms of debt, such as credit cards, student loans, car loans, and/or mortgages</li>
                    <li>90% expressed they were paying off debt slowing, minimum payments: interest and time being issues</li>
                    <li>90% expressed they were paying off debt slowing, minimum payments: interest and time being issues</li>
                    <li>60% expressed interest in speeding up the process to reduce interest</li>
                </ul>
            </section>

            <section className="divide"></section>

            <section className="qoins6">
                <div className="col col-l">
                    <p className="heading un">User Testing</p>
                    <p>We tested with Qoins existing app; we used paper prototypes since users must enter sensitive financial information to sign up</p>
                    <p>Usability tests proved that users became frustrated, confused, and hostile with the existing on-boarding process.</p>
                </div>
                <div className="col col-r">
                    <div className="top">
                        <img src={img15} alt=""/>
                    </div>
                    <div className="bottom">
                        <img src={img16} alt=""/>
                    </div>
                </div>
            </section>

            <section className="divide"></section>

            <section className="qoins7">
                <p className="heading">QOINS existing user flow</p>

                <div className="images">
                    <img className="wire-desk" src={img17desk} alt=""/>
                    <img className="wire-tab" src={img17tab} alt=""/>
                    <img className="wire-mob" src={img17mob} alt=""/>
                </div>


                <p className="info">The on boarding process takes 20 screens to get to the homepage, with 2 separate points where adding financial lender adds 3 more screens and the funding source can add up to 10 additional screens depending on the financial institution</p>
            </section>

            <section className="divide"></section>

            <section className="qoins8">
                <div className="col col-l">
                    <p className="heading un">Synthesis</p>
                    <p>With affinity mapping, we synthesized the qualitative data gathered during usability testing</p>

                    <p className="heading un">Findings</p>
                    <p>4/8- skipped/did not read tutorial</p>
                    <p>6/8- wanted the option to sign up on the tutorial screen instead of waiting until the end of tutorial</p>
                    <p>5/8- were confused by having to enter certain personal information</p>
                    <p>3/8- stopped the on-boarding after being prompted to enter their Social Security number</p>
                    <p>2/8- thought there were too many screens overall</p>
                    <p>6/8- thought there were a lot of screens, but they were necessary</p>
                    <p>6/8- wanted more information overall, especially about “Smart Savings” </p>

                </div>
                <div className="col col-r">
                    <div className="top">
                        <img src={img18} alt=""/>
                        <img src={img19} alt=""/>
                    </div>
                    <div className="bottom">
                        <img src={img20} alt=""/>
                    </div>
                </div>
            </section>

            <section className="divide"></section>

            <section className="qoins9">
                <p>One prominent issue kept getting brought up:</p>
                <p className="heading up">Trust</p>
                <p>Users were apprehensive submitting personal financial information for an app on their phone</p>
                <p>How do you build trust in a brand with an application you only have access to from your phone?</p>
                <p>This is an issue we were not able to address due to time during our 2 week sprint, we will continue looking into brand trust for our next steps</p>
            </section>

            <section className="divide main divide3">
                <p className="heading">Based on synthesis from interviews, Qoins target audience, and user testing, we developed our persona</p>
            </section>

            <section className="qoins10">
                <div className="frame">
                    <div className="col col-l">
                        <div className="container">
                            <img src={img21} alt=""/>
                            <div className="text">
                                <p>Age: 29</p>
                                <p>Occupation: Registered Nurse</p>
                                <p>Status: Engaged</p>
                                <p>Location: Marietta, Ga</p>
                                <p>Salary: $55,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-r">
                        <div className="top">
                            <div className="box">
                                <p className="un">Kristin Bradshaw</p>
                                <p>Kristin recently graduated from the Wellstar Program at Kennesaw State University with a Bachelor of Science in Nursing.  Upon graduating, she landed a job at Emory in Midtown.</p>
                                <p>While in school, Kristin accumulated student loan debt.  She and her fiancé want to get married in the next 3-5 years, and want to be debt free before they marry.  After marriage, they want to buy a house together and need a good credit score for a loan. </p>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="box">
                                <p className="un">Goals</p>
                                <p>Reduce monthly interest fees</p>
                                <p>Pay off and be debt free</p>
                                <p>Get married and buy a house</p>
                                <p>Build good credit</p>
                            </div>
                            <div className="box">
                                <p className="un">Pain Points</p>
                                <p>High interest rates </p>
                                <p>Minimum payments delaying paying off debt</p>
                                <p>Paying on time</p>
                                <p>Debt collectors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="divide main divide4"></section>

            <section className="qoins11">
                <p className="heading un">Iterations</p>
                <p className="info">Based on our users’ needs, we eliminated and consolidated certain screen, with optional on-boarding tutorial, and were able to streamline the on-boarding experience</p>
                <ul>
                    <li>We added the option to sign up right on the first screen</li>
                    <li>Tutorial screens are optional, with a sign up button on every tutorial page</li>
                    <li>Personal information and telephone number are combined into one page</li>
                    <li>Date of birth page is removed as it is redundant since users have to enter the last 4 digits of their social security number</li>
                    <li>A progress bar is added to “Let’s Make a Payment” indicating how far along users are in the process of signing up</li>
                    <li>Additional information is added to “Smart Savings” and “Round Up” page</li>
                </ul>
                <div className="image">
                    <img className="iterate-desk" src={iteratedesk} alt=""/>
                    <img className="iterate-tab" src={iteratetab} alt=""/>
                    <img className="iterate-mob" src={iteratemob} alt=""/>
                </div>
            </section>

            <section className="divide"></section>

            <section className="qoins12">
                <p className="heading">Changes per screen</p>
                <img src={img22} alt=""/>
                <img src={img23} alt=""/>
                <img src={img24} alt=""/>
                <img src={img25} alt=""/>
            </section>

            <section className="divide"></section>

            <section className="qoins13">
                <p className="heading">Next Steps</p>
                <p>Conduct additional usability testing</p>
                <p>Add/Subtract feature based on users’ needs</p>
                <p>How to build trust in a brand?</p>
                <img src={img26} alt=""/>
            </section>



            {/* <section className="hero"></section>

            <section className="slides">
                <div className="slide slide1">
                    <div className="container">

                        <div className="team">
                            <h1>The Team</h1>
                            <div className="member">
                                <img src={team3} alt=""/>
                                <p>Morgan Breier</p>
                            </div>
                            <div className="member">
                                <img src={team} alt=""/>
                                <p>Ashton Cheeks</p>
                            </div>
                            <div className="member">
                                <img src={team2} alt=""/>
                                <p>Briana Brock</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="slide slide2">
                    <div className="container">
                        <div className="text1">
                            <h1>GOT DEBT?</h1>
                            <p>The average American has between $67- $134,000 worth of debt</p>
                        </div>

                        <div className="text2">
                            <p>A financial management mobile app that rounds up your individual purchases and allows you to set up automatic payments to set money aside in order for you to pay off your debt faster</p>
                        </div>

                    </div>
                </div>

                <div className="slide slide3">
                    <div className="container">
                        <div className="text1">
                            <p>Qoins has over 60, 000 downloads, but only 12,000 active users</p>
                            <p>The company’s measure of success for an active user is in 3 steps:</p>
                            <img src={img2} alt=""/>
                        </div>
                    </div>
                </div>

                <div className="spacer"></div>

                <div className="slide slide4">
                    <div className="container">
                        <div className="text1">
                            <h3>Problem</h3>
                            <p>Qoins needs a way to streamline the onboarding process to increase their active users</p>
                            <h3>Our Solution</h3>
                            <p>We believe that by consolidating screens, it will lead to an easier and more enjoyable experience</p>

                        </div>
                    </div>
                </div>

                <div className="slide slide5">
                    <div className="container">

                        <div className="text1">
                            <h1>Our Process</h1>
                            <ul>
                                <li>Research</li>
                                <li>Synthesis and Ideation</li>
                                <li>Testing and Iteration</li>
                                <li>Final Mock Ups</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="slide slide6">
                    <div className="container">

                        <div className="text1">
                            <h1>Competative Analysis</h1>
                            <p>Competitors vary with:</p>
                            <ul>
                                <li>Monthly/various fees</li>
                                <li>Abilities and offers</li>
                                <li>Number of onboarding screens</li>
                            </ul>
                            <p>All having the ability to sign up after the first screen, something that Qoins does not offer</p>
                        </div>

                        <img src={img3} alt=""/>
                    </div>

                </div>

                <div className="slide slide7">
                    <div className="container">
                        <div className="text1">
                            <h1>Interviews</h1>
                            <ul>
                                <li>Individuals had multiple forms of debt: cc, student loans</li>
                                <li>90% expressed they were paying off debt slowing, minimum payments: interest and time being issues</li>
                                <li>Most expressed they felt it was “never ending”, they were never going to get out of debt</li>
                                <li>Expressed interest in speeding up the process to reduce interest</li>
                            </ul>

                        </div>

                        <div className="images">
                            <img src={img4} alt=""/>
                            <img src={img5} alt=""/>
                        </div>

                    </div>

                </div>

                <div className="slide slide8">
                    <div className="text1">
                        <h1>Persona</h1>
                        <p>Based on the information gathered in our interviews, and Qoins target audience, we were able to create our persona</p>
                    </div>
                    <div className="container">
                    </div>

                </div>

                <div className="slide slide9">
                    <div className="container">
                    </div>
                </div>

                <div className="slide slide10">
                    <div className="container">
                        <h4>Usability tests proved that users became frustrated, confused, and hostile with the existing onboarding process. </h4>
                        <div className="text1">
                            <ul>
                                <li>Users were surprised with the number of tutorial screens, skipping them and not reading</li>
                                <li>No sign up button on tutorial screens</li>
                                <li>Concern and distrust entering personal information, users expressed confusion, frustrations, and even stopped the onboarding process when prompted to enter their social security number</li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="slide slide11">
                    <div className="container">
                        <h2>With affinity mapping, we synthesized the qualitative data gathered during usability testing</h2>
                        <img src={infinityMap} alt=""/>

                    </div>

                </div>

                <div className="slide slide12">
                    <div className="container"></div>

                </div>

                <div className="slide slide13">
                    <div className="container">
                        <div className="text1">
                            <p>Based on our users’ needs, we eliminated and consolidated certain screen, with optional onboarding tutorial, and were able to streamline the onboarding experience</p>
                        </div>
                    </div>

                </div>

                <div className="slide slide14">
                    <div className="container">
                        <h1>Changes made per screen</h1>
                    </div>

                </div>

                <div className="slide slide15">
                    <div className="container">
                        <h1>New user flow</h1>
                    </div>

                </div>

                <div className="slide slide16">
                    <div className="container">
                        <div className="text1">
                            <h1>Next Steps:</h1>
                            <ul>
                                <li>More usability testing</li>
                                <li>Add/subtract features based on users’ needs</li>
                                <li>How to build trust in a brand?</li>
                            </ul>
                        </div>
                    </div>

                </div>



            </section> */}

        </div>
    </Layout>
)

export default Qoins;
