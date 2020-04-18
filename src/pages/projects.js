import React, { Component } from 'react';
import Layout from "../components/layout"
import ProjectsList from '../components/projects-list';

import './styles/projects.scss'

import qoinsLogo from '../images/qoins/title1.png'
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
                projectDiv.scrollIntoView({ block: "center", behavior: 'smooth' });
            })
        })
    }

    render() {
        return (
            <Layout>
                <div className="projects-page">
                    <section className="hero" />

                    <section className="project-tiles">
                        <img className="project-tile" data-project="1" src={qoinsLogo} alt="qoins"/>
                        <img className="project-tile" data-project="2" src={recycleLogo3} alt="recycle atl"/>
                        <img className="project-tile" data-project="3" src="https://thumbnails-photos.amazon.com/v1/thumbnail/whR6DYFsRKm2WfUgj7Yipg?viewBox=512%2C512&ownerId=A1VFC1KOR2FJO4" alt="yay stack"/>
                    </section>

                    <ProjectsList />

                </div>
            </Layout>
        )
    }
}

export default Projects
