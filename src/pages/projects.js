import React, { Component } from 'react';
import { Link } from "gatsby"
import Layout from "../components/layout"
import './css/projects.scss'

import qoinsLogo from '../images/qoins/title1.png'
import qoinsLogo2 from '../images/qoins/title2.png'
import recycleLogo from '../images/recycleatl/logo.png'
import recycleLogo2 from '../images/recycleatl/logo2.png'
import recycleLogo3 from '../images/recycleatl/logo3.png'


class Projects extends Component {

    componentDidMount() {
        this.projectScroll();
    }

    projectScroll() {
        const projects = document.querySelectorAll('.project-tile')
        projects.forEach(project => {
            project.addEventListener('click', function() {
                let projectDiv = document.querySelector(`.project[data-project="${this.dataset.project}"]`)
                console.log(projectDiv)
                // projectDiv.scrollIntoView(false);
                projectDiv.scrollIntoView({ block: "center", behavior: 'smooth' });
            })
        })
    }

    render() {
        return (
            <Layout>
                <div className="projects-page">
                    <section className="hero">
                    </section>

                    <section className="project-tiles">
                        <img className="project-tile" data-project="1" src={qoinsLogo} alt=""/>
                        <img className="project-tile" data-project="2" src={recycleLogo3} alt=""/>
                        <img className="project-tile" data-project="3" src="https://via.placeholder.com/300C/O" alt=""/>
                        {/* <img className="project-tile" data-project="4" src="https://via.placeholder.com/300C/O" alt=""/>
                        <img className="project-tile" data-project="5" src="https://via.placeholder.com/300C/O" alt=""/>
                        <img className="project-tile" data-project="6" src="https://via.placeholder.com/300C/O" alt=""/> */}
                    </section>

                    <section className="projects-container">
                        <article className="project" data-project="1">
                            <Link to="/qoins">
                                <div className="project-image">
                                    <img src={qoinsLogo2} alt=""/>
                                </div>
                                <div className="project-description">
                                    <h1>Qoins</h1>
                                    <p>A financial management mobile app that rounds up your individual purchases and allows you to set up automatic payments to set money aside in order for you to pay off your debt faster</p>
                                </div>
                                {/* <div className="project-tags">
                                    <p>role</p>
                                    <p>features</p>
                                    <p>other stuff</p>
                                </div> */}
                            </Link>
                        </article>

                        <article className="project" data-project="2">
                            <Link to="/recycleATL">

                                <div className="project-description">
                                    <h1>Recycle ATL</h1>
                                    <p>Recycle ATL is what we call a passion project.  It comes out of my need to know where I can specifically recycle glass, since the city of Atlanta no longer recycles glass.  Not only that, but also for users living in locations that do not offer curbside recycling.</p>
                                </div>
                                <div className="project-image">
                                    <img src={recycleLogo} alt=""/>
                                </div>
                                {/* <div className="project-tags">
                                    <p>role</p>
                                    <p>features</p>
                                    <p>other stuff</p>
                                </div> */}
                            </Link>
                        </article>

                        <article className="project"  data-project="3">
                            <div className="project-image">
                                <img src="https://via.placeholder.com/500x400" alt=""/>
                            </div>
                            <div className="project-description">
                                <h1>TITLE</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla libero at dolor consequuntur dolores impedit pariatur recusandae maxime inventore praesentium iste sunt unde, iusto commodi esse nostrum aliquam beatae repellendus?</p>
                            </div>
                            {/* <div className="project-tags">
                                <p>role</p>
                                <p>features</p>
                                <p>other stuff</p>
                            </div> */}
                        </article>
                    </section>
                </div>
            </Layout>
        )
    }
}

export default Projects
