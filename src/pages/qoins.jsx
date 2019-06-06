import React from 'react';
import Layout from "../components/layout"
// import { Link } from "gatsby"
import './css/qoins.scss'

import infinityMap from '../images/qoins/title9.png'
import team from '../images/qoins/team.png'
import team2 from '../images/qoins/team2.png'
import team3 from '../images/qoins/team3.png'
import img2 from '../images/qoins/img2.png'
import img3 from '../images/qoins/img3.png'
import img4 from '../images/qoins/img4.png'
import img5 from '../images/qoins/img5.png'


const Qoins = () => (
    <Layout>
        <div className="qoins-page">
            <section className="hero"></section>

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
                        {/* <h1>Qoins Existing User Flow</h1>

                        <div className="text1">
                            <p>Users must navigate through 20 Qoins screens, in addition to between 5-10 more screens depending on their funding source, for the onboarding process to reach the home screen</p>
                        </div> */}
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



            </section>

        </div>
    </Layout>
)

export default Qoins;
