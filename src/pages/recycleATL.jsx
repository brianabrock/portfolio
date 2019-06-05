import React from 'react';
import Layout from "../components/layout"
import './css/recycle.scss'

import flow2 from '../images/recycleatl/flow2.png'
import graph1 from '../images/recycleatl/graph1.png'
import graph2 from '../images/recycleatl/graph2.png'
import graph3 from '../images/recycleatl/graph3.png'
import img1 from '../images/recycleatl/img1.png'
import img2 from '../images/recycleatl/img2.png'
import img3 from '../images/recycleatl/img3.png'
import img4 from '../images/recycleatl/img4.png'
import img5 from '../images/recycleatl/img5.png'
import img6 from '../images/recycleatl/img6.png'
import img7 from '../images/recycleatl/img7.png'
import img8 from '../images/recycleatl/img8.png'
import img9 from '../images/recycleatl/img9.png'
import logo from '../images/recycleatl/logo.png'
import logo2 from '../images/recycleatl/logo2.png'
import photo1 from '../images/recycleatl/photo1.png'
import photo2 from '../images/recycleatl/photo2.png'
import photo3 from '../images/recycleatl/photo3.png'
import photo4 from '../images/recycleatl/photo4.png'
import use2 from '../images/recycleatl/use2.png'
import use3 from '../images/recycleatl/use3.png'


const Recycle = () => (
    <Layout>
        <div className="recycle-atl-page">
            <section className="hero"></section>
            <section className="slides">

                <div className="slide slide1">
                    <div className="container">
                        <div className="l">
                            <img src={logo} alt=""/>
                            <div className="contain">
                                <img src={img1} alt=""/>
                            </div>
                        </div>
                        <div className="r">
                            <div className="contain">
                                <img src={logo2} alt=""/>
                                <p>Recycle ATL is a mobile application designed to locate recycling drop-off locations and offers educational articles on environmental issues</p>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="slide slide2">
                    <div className="container">
                        <div className="contain">
                            <div className="l">
                                <img src={photo1} alt=""/>
                            </div>
                            <div className="r">
                                <img className="logo" src={logo2} alt=""/>
                                <img src={img2} alt=""/>
                            </div>
                        </div>

                        <div className="text1">
                            <h3 className="section-heading">Summary</h3>
                            <p>Recycle ATL is what we call a passion project.  It comes out of my need to know where I can specifically recycle glass, since the city of Atlanta no longer recycles glass.  Not only that, but also for users living in locations that do not offer curbside recycling.</p>
                        </div>
                    </div>


                </div>
                <div className="slide slide3">
                    <div className="container">
                        <h3 className="section-heading">Process</h3>
                        <div className="text1">
                            <p>This project was a 2 week sprint.  The first week dedicated to research and synthesis, and the second week focused on ideating, wireframes, usability testing, iterating, and prototyping and final mockups</p>
                        </div>
                        <h4>The Progess</h4>
                        <div className="bubbles">
                            <div className="bubble">
                                <img src="" alt=""/>
                                <p>Research</p>
                            </div>
                            <div className="bubble">
                                <img src="" alt=""/>
                                <p>Synthesis & Ideation</p>
                            </div>
                            <div className="bubble">
                                <img src="" alt=""/>
                                <p>Wireframe & Testing</p>
                            </div>
                            <div className="bubble">
                                <img src="" alt=""/>
                                <p>Iteration & Prototyping</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide slide4">
                    <div className="container">
                        <h3 className="section-heading">Research</h3>
                        <div className="text1">
                            <p className="section-subheading">Survey: </p>
                            <p>I conducted a survey to gauge interest in environmental and animal rights issues</p>
                        </div>
                        <div className="top-imgs">
                            <img src={graph1} alt=""/>
                            {/* <img src={img3} alt=""/> */}
                        </div>
                        <div className="middle-imgs">
                            {/* <img src={photo2} alt=""/> */}
                            <img src={graph2} alt=""/>
                        </div>
                        <div className="bottom-imgs">
                            <p>Based on the results, I proceeded with an environmental issue project for a mobile device</p>
                            <img src={graph3} alt=""/>
                        </div>
                        <div className="text2">
                            <p className="section-subheading">Survey Findings:</p>
                            <p>There is a strong interest from 95% (20 surveyed) who are concerned with environmental issues</p>
                            <p>For the 45% who said “sometimes”, 60% reported it wasn’t available, 30% stated it was an inconvenience </p>
                            <p>To find out more about environmental issues, 70% were interested in using their mobile device</p>
                        </div>
                        <div className="text3">
                            <p className="section-subheading">Competitive Analysis:</p>
                            <p>I proceeded with a competitive audit of similar mobile applications</p>
                            <div className="innerText">
                                <p>A few apps available, but with limited features</p>
                                <p>Recycle Nation is the most equipped, with features including :</p>
                                <ul>
                                    <li>Drop off locations</li>
                                    <li>Education, tips, and facts </li>
                                    <li>Tracts positive environmental impact of the recycled item</li>
                                    <li>Creative “up-cycling” ideas for arts and crafts </li>
                                </ul>
                                <p>Negatives of the many features is that it feels overwhelming just looking at it</p>
                                <p>Recycle Right is another great app with similar features, only available in Australia</p>
                            </div>
                            <img src={img4} alt=""/>
                        </div>
                        <div className="text4">
                            <p className="section-subheading">Interviews:</p>
                            <p>I conducted interviews with 6 participants of various backgrounds who did and did not recycle on a regular basis, not targeted to a specific audience; 4 participants recycled, 2 did not</p>
                            <div className="contain">
                                <img src={img5} alt=""/>
                                <img src={photo3} alt=""/>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide slide5">
                    <div className="container">
                        <h3 className="section-heading">Affinity Mapping & Synthesis</h3>
                        <img src={flow2} alt=""/>
                        <div className="text1">
                            <p>Reasons for not recycling include:</p>
                            <ul>
                                <li>Inconvenient</li>
                                <li>Doesn’t know where to recycle</li>
                                <li>Doesn’t think about it</li>
                            </ul>
                        </div>
                        <div className="text2">
                            <p>Reasons for recycling include:</p>
                            <ul>
                                <li>Good for the environment</li>
                                <li>Keeps trash out of landfills</li>
                                <li>They feel it’s their responsibility</li>
                                <li>It’s part of their everyday life</li>
                                <li>Believes in saving the planet</li>
                            </ul>
                        </div>
                        <div className="text3">
                            <p>From the findings from sythensis, I came up with our persona, with his pain points and needs</p>
                            <p className="section-subheading">Persona:</p>
                            <div className="persona">
                                <div className="l">
                                    <img src={photo4} alt=""/>
                                    <div className="textbox">
                                        <ul>
                                            <li>Max Hartwell</li>
                                            <li>35 years old</li>
                                            <li>IT Support</li>
                                            <li>Lives near The Battery</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="r">
                                    <div className="textbox textbox-top">
                                        <p>Max is an avid runner who has just started learning about the importance of recycling, but his apartment complex doesn’t offer curbside recycling.</p>
                                        <p>He’s frustrated with the lack of information on what is recyclable and where to take them. He feels guilty that he still chooses Bud Lite in the bottle, even though he now knows glass is not recyclable in ATL </p>
                                    </div>
                                    <div className="textbox">
                                        <p>Goals:</p>
                                        <ul>
                                            <li>Know more about recycling</li>
                                            <li>Find out where to take glass</li>
                                            <li>Make recycling a habit</li>
                                        </ul>
                                    </div>
                                    <div className="textbox">
                                        <p>Pain Points:</p>
                                        <ul>
                                            <li>Lack of information</li>
                                            <li>Doesn’t know where to take recycles</li>
                                            <li>Doesn’t know how to properly prepare recyclables</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text4">
                            <p className="section-subheading">Problem Statement:</p>
                            <p>Users need a way to find out where they can drop off recyclables and make recycling a habit, so they can address the serious issue of waste and reduce their carbon footprint.</p>
                        </div>
                        <div className="text5">
                            <p className="section-subheading">Solution/Hypothesis</p>
                            <p>We believe by building a mobile app that lets users know where to drop off recyclables, users will become more informed and recycle on a daily basis. We will know this to be true, when users use the app to locate drop off locations.</p>
                        </div>
                        <div className="text6">
                            <p className="section-subheading">  Product Key Features</p>
                            <ul>
                                <li>Drop-off locator- search by zip code or specific item</li>
                                <li>Education- learn about recycling best practices</li>
                                <li>Daily Tips- with option for push notification</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="slide slide6">
                    <div className="container">
                        <h3 className="section-heading">Wireframes</h3>
                        <div className="wireframes">
                            <img src={img6} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="slide slide7">
                    <div className="container">
                        <h3 className="section-heading">Usability Testing</h3>
                        <div className="text1">
                            <p>During testing, users had issues with specific wording, maps, pop-up windows, and specific pages</p>
                            <div className="imgs">
                                <img src={use2} alt=""/>
                                <img src={use3} alt=""/>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide slide8">
                    <div className="container">
                        <h3 className="section-heading">Final Mockups</h3>
                        <img src={img7} alt=""/>
                        <img src={img8} alt=""/>
                        <img src={img9} alt=""/>
                    </div>
                </div>
                <div className="slide slide9">
                    <div className="container">
                        <h3 className="section-heading">Next Steps</h3>
                        <ul>
                            <li>Conduct more usability tests with target users</li>
                            <li>Check-In to drop-off locations for points</li>
                            <li>Recycle pick up like UBER for recycling</li>
                        </ul>
                        <img src={logo2} alt=""/>
                    </div>
                </div>

            </section>
        </div>
    </Layout>
);


export default Recycle;
