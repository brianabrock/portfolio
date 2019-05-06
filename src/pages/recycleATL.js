import React, { Component } from 'react'; 
import Layout from "../components/layout"
import { Link } from "gatsby"

import './css/recycleATL.css'

import projKicker1 from '../images/projects/recycleKicker.png'
import projTile1 from '../images/projects/proj1Home.png'
import pdf from '../images/pdf/Recycle_ATL.pdf';


class RecycleATL extends Component {
    
    componentDidMount() {
        // this.projectScroll();
    }


    render() {
        return (
            <Layout>
                <div className="recycleATL-page">
                    <section className="hero">
                    </section>

                    <section className="recycleATL-content">
                        <article className="features">
                            <h3>Key Features</h3>
                            <div className="inner-content">
                                <ul>
                                    <li>Drop-off locator- search by zip code or specific item</li>
                                    <li>Education- learn about recycling best practices</li>
                                    <li>Daily Tips- with option for push notification</li>
                                </ul>
                                <img src="" alt=""/>
                            </div>
                        </article>
                        <article className="design">
                            <h3>Design Process</h3>
                            <div className="inner-content">
                                <img src="" alt=""/>
                                <ul>
                                    <li>First week dedicated to research and synthesis</li>
                                    <ul>
                                        <li>Survey</li>
                                        <li>Competitive Audit</li>
                                        <li>User interviews</li>
                                        <li>Value Proposition</li>
                                        <li>Affinity Mapping</li>
                                    </ul>
                                    <li>Second week focused on ideating, wireframes, usability testing, iterating, and prototyping</li>
                                </ul>
                            
                            </div>

                        </article>
                        <article className="discovery">
                            <h3>Discovery/Research</h3>
                            <div className="inner-content">
                                <img src="" alt=""/>
                                <img src="" alt=""/>
                                <img src="" alt=""/>
                                <img src="" alt=""/>
                                <img src="" alt=""/>
                                <img src="" alt=""/>
                            
                            </div>

                        </article>
                        <article className="compare">
                            <h3>Competitive Analysis</h3>
                            <div className="inner-content">
                                <img src="" alt=""/>
                                <ul>
                                    <li>A few apps available, but with limited features</li>
                                    <li>Recycle Nation is the most equipped, with features including drop off locations, sections for education, tips, and facts; articles; tracts positive environmental impact of the recycled item; and even offers creative “up-cycling” ideas for arts and crafts. Negatives of the many features is that it feels overwhelming just looking at it</li>
                                    <li>Recycle Right is another great app with similar features, only available in Australia</li>
                                </ul>
                            </div>

                        </article>
                        <article className="interviews">
                            <h3>User Interview</h3>
                            <div className="inner-content">
                            
                                <p>I conducted interviews with 6 participants of various backgrounds who did and did not recycle on a regular basis. It was not targeted to pecific audience.</p>
                                <p>4 recycle, 2 do not</p>

                                <h4>Reasons for not recycling include</h4>
                                <ul>
                                    <li>Inconvenient</li>
                                    <li>Doesn’t know where to recycle</li>
                                    <li>Doesn’t think about it</li>
                                </ul>

                                <h4>Reasons for recycling include</h4>
                                <ul>
                                    <li>Good for the environment</li>
                                    <li>Keeps trash out of landfills</li>
                                    <li>They feel it’s their responsibility</li>
                                    <li>It’s part of their everyday life</li>
                                    <li>Believes in saving the planet</li>
                                </ul>
                            </div>

                        </article>
                        <article className="define">
                            <h3>Define/Interpret</h3>
                            <div className="inner-content">
                                <img src="" alt=""/>
                                <img src="" alt=""/>
                            </div>


                        </article>
                        <article className="insights">
                            <h3>Additional Insights</h3>
                            <div className="inner-content">
                                <ul>
                                    <li>Wants to know where to take recyclables</li>
                                    <li>Is glass recyclable?</li>
                                    <li>People want more sustainable options</li>
                                        <ul>
                                            <li>Theory vs practice, input as well as demand</li>
                                        </ul>
                                    <li>Recycling/waste management issues not taken seriously</li>
                                    <li>Want clear understanding of what is recyclable</li>
                                    <li>How to properly prepare recyclables</li>
                                    <li>What are the positive and negative impact on the environment</li>
                                </ul>
                            
                            </div>

                        </article>
                        <article className="opportunities">
                            <h3>Opportunities</h3>
                            <div className="inner-content">
                                <ul>
                                    <li>How to make recycling a habit</li>
                                    <li>How to make recycling easier</li>
                                    <li>Are there recycling places on the way to work (partnership with store helping as drop-off station)</li>
                                    <li>4 out of 6 reported they would use a mobile app to learn more about recycling</li>
                                    <li>The importance for recycling tips and articles was mixed, but in interviews it was expressed that most wanted to learn more about what was recyclable</li>
                                </ul>
                            
                            </div>

                        </article>
                        <article className="persona">
                            <h3>Persona</h3>
                            <div className="inner-content">
                                <ul>
                                    <li>Max Hartwell</li>
                                    <li>34 years old</li>
                                    <li>IT Support</li>
                                    <li>Lives near The Battery</li>
                                </ul>
                                <p>He’s an avid runner, has two pet turtle named Toby and Tammy, and drinks Starbucks coffee every morning. He believes it is important to recycle for the sake of the planet, and is frustrated by the lack of information there is on what is recyclable and how to properly prepare items before recycling. He feels guilty that he chooses to purchase bud lite in the bottle vs the can, knowing glass is not accepted at most recycling facilities in Atlanta. His goal is to become informed on recycling best practices and feel better about his commitment to the environment.</p>
                            
                            </div>

                        </article>
                        <article className="problem">
                            <h3>Problem Statement</h3>
                            <div className="inner-content">
                                <p>Users need a way to find out where they can drop off recyclables so they can become more environmentally conscious and reduce their carbon footprint</p>
                            </div>

                        </article>
                        <article className="solution">
                            <h3>Solution/Hypothesis</h3>
                            <div className="inner-content">
                                <p>We believe by building a mobile app that lets users know where to drop off recyclables, users will become more informed and recycle on a daily basis. We will know this to be true, when users use the app to locate drop off locations.</p>
                            </div>

                        </article>
                        <article className="wireframes">
                            <h3>Wireframes</h3>
                            <div className="inner-content">
                                <img src="" alt=""/>
                                <img src="" alt=""/>
                                <img src="" alt=""/>
                                <img src="" alt=""/>
                                <img src="" alt=""/>
                                <img src="" alt=""/>
                                <img src="" alt=""/>
                                <img src="" alt=""/>
                            
                            </div>

                        </article>
                        <article className="testing">
                            <h3>Usability Testing</h3>
                            <div className="inner-content">
                                <img src="" alt=""/>
                                <img src="" alt=""/>
                                <img src="" alt=""/>
                                <p>Confusion with maps, pop-ups menus, and specific pages</p>
                            </div>

                        </article>
                        <article className="prototype">
                            <h3>Prototype</h3>
                            <div className="inner-content">
                                <img src="" alt=""/>
                                <img src="" alt=""/>
                                <img src="" alt=""/>
                                <img src="" alt=""/>
                                <img src="" alt=""/>
                                <img src="" alt=""/>
                                <img src="" alt=""/>
                                <img src="" alt=""/>
                            
                            </div>


                        </article>
                        <article className="next">
                            <h3>Next Steps</h3>
                            <div className="inner-content">
                                <ul>
                                    <li>Conduct more usability tests with target users</li>
                                    <li>Check-In to drop-off locations for points</li>
                                    <li>Recycle pick up like UBER for recycling</li>
                                </ul>
                            </div>

                        </article>
                    
                    
                    
                    </section>
                </div>
            </Layout>
        )
    }
}

export default RecycleATL;