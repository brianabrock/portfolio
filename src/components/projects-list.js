import React from 'react';
import { Link } from "gatsby"

import qoinsLogo from '../images/qoins/title2.png'
import recycleLogo from '../images/recycleatl/logo.png'
import './styles/projects-list.scss';

const ProjectsList = () => {

    return (
        <section className="projects-container">
            <article className="project" data-project="1">
                <Link to="/qoins">
                    <div className="project-image">
                        <img src={qoinsLogo} alt="qoins"/>
                    </div>
                    <div className="project-description">
                        <h1>Qoins</h1>
                        <p>A financial management mobile app that rounds up your individual purchases and allows you to set up automatic payments to set money aside in order for you to pay off your debt faster</p>
                    </div>
                </Link>
            </article>

            <article className="project" data-project="2">
                <Link to="/recycleATL">

                    <div className="project-description">
                        <h1>Recycle ATL</h1>
                        <p>Recycle ATL is what we call a passion project.  It comes out of my need to know where I can specifically recycle glass, since the city of Atlanta no longer recycles glass.  Not only that, but also for users living in locations that do not offer curbside recycling.</p>
                    </div>
                    <div className="project-image">
                        <img src={recycleLogo} alt="recycle atl"/>
                    </div>
                </Link>
            </article>

            <article className="project" data-project="3">
                <Link to="/YayStack">
                    <div className="project-image">
                        <img src="https://thumbnails-photos.amazon.com/v1/thumbnail/whR6DYFsRKm2WfUgj7Yipg?viewBox=512%2C512&ownerId=A1VFC1KOR2FJO4" alt="yaystack"/>
                    </div>
                    <div className="project-description">
                        <h1>Yay Stack</h1>
                        <p>Check back soon to see my upcoming project!</p>
                    </div>
                </Link>
            </article>
        </section>
    )
}

export default ProjectsList;
