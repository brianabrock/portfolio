import React, { Component } from 'react'; 
import Layout from "../components/layout"
import { Link } from "gatsby"

import './css/projects.css'

import projKicker1 from '../images/projects/recycleKicker.png'
import projTile1 from '../images/projects/proj1Home.png'
import pdf from '../images/pdf/Recycle_ATL.pdf';


class Projects extends Component {
    
    componentDidMount() {
        this.projectScroll();
    }

    projectScroll() {
        const projects = document.querySelectorAll('.project-tile')
        console.log(projects)
        projects.forEach(project => {
            project.addEventListener('click', function() {
                console.log('clicked')
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
                        {/* <img className="project-tile" data-project="1" src="https://via.placeholder.com/300C/O" alt=""/> */}
                        <div className="project-tile" data-project="1" > 
                            <img src={projTile1} alt=""/>
                        </div>
                        {/* <img className="project-tile" data-project="1" src={projTile1} alt=""/> */}
                        <img className="project-tile" data-project="2" src="https://via.placeholder.com/300C/O" alt=""/>
                        <img className="project-tile" data-project="3" src="https://via.placeholder.com/300C/O" alt=""/>
                        {/* <img className="project-tile" data-project="4" src="https://via.placeholder.com/300C/O" alt=""/>
                        <img className="project-tile" data-project="5" src="https://via.placeholder.com/300C/O" alt=""/>
                        <img className="project-tile" data-project="6" src="https://via.placeholder.com/300C/O" alt=""/> */}
                    </section>

                    <section className="projects-container">
                        <article className="project" data-project="1">
                            <a href={pdf} target="_blank">
                                <div className="project-image">
                                    {/* <img src="https://via.placeholder.com/500x400" alt=""/> */}
                                    <img src={projKicker1} alt=""/>
                                </div>
                            </a>
                            <div className="project-description">
                                <h2>Recycle ATL Mobile App</h2>
                                <p>Users need a way to find out where they can drop off recyclables so they can become more environmentally conscious and reduce their carbon footprint. We believe by building a mobile app that lets users know where to drop off recyclables, users will become more informed and recycle on a daily basis. </p>
                            </div>
                            <div className="project-tags">
                                <p>My Role: UX Researcher & Designer</p>
                                <p>2 Week Sprint</p>
                                <p>Tools: Figma</p>
                            </div>
                        </article>

                        <article className="project" data-project="2">
                            <div className="project-description">
                                <h1>TITLE</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla libero at dolor consequuntur dolores impedit pariatur recusandae maxime inventore praesentium iste sunt unde, iusto commodi esse nostrum aliquam beatae repellendus?</p>
                            </div>
                            <div className="project-image">
                                <img src="https://via.placeholder.com/500x400" alt=""/>
                            </div>
                            <div className="project-tags">
                                <p>role</p>
                                <p>features</p>
                                <p>other stuff</p>
                            </div>
                        </article>

                        <article className="project"  data-project="3">
                            <div className="project-image">
                                <img src="https://via.placeholder.com/500x400" alt=""/>
                            </div>
                            <div className="project-description">
                                <h1>TITLE</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla libero at dolor consequuntur dolores impedit pariatur recusandae maxime inventore praesentium iste sunt unde, iusto commodi esse nostrum aliquam beatae repellendus?</p>
                            </div>
                            <div className="project-tags">
                                <p>role</p>
                                <p>features</p>
                                <p>other stuff</p>
                            </div>
                        </article>
                    </section>
                </div>
            </Layout>
        )
    }
}

export default Projects
