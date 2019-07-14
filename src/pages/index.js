import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './css/index.scss'

import qoinsLogo from '../images/qoins/title1.png'
import qoinsLogo2 from '../images/qoins/title2.png'
import recycleLogo from '../images/recycleatl/logo.png'
import recycleLogo3 from '../images/recycleatl/logo3.png'
import comingSoon from '../images/projects/coming-soon.png'

import linkedin from '../images/linked.png'
import twitter from '../images/twitter.png'
import gmail from '../images/gmail.png'

class Home extends React.Component {

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
				<div className="home-page">
					<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
					<section className="hero">
						{/* <h1>About Me</h1> */}
					</section>

					<section className="content">
						<section className="brief-text">
							<p>A creative thinker and artist dedicated to the user centered process of research and design</p>
						</section>

						{/* <section className="project-tiles">
							<img className="project-tile" data-project="1" src={qoinsLogo} alt=""/>
							<img className="project-tile" data-project="2" src={recycleLogo3} alt=""/>
							<img className="project-tile" data-project="3" src={comingSoon} alt=""/>
						</section> */}

						<section className="intro-text">
							<p>I'm an emerging UX Designer passionate about people, proficient with research, with a creative mind and spirit, and an eye for detail ready to create beautiful experiences. I'm pretty great at research including competative audits, user interviews based on demographics, synthesizing qualitative and quantitative data, and using all that information to start getting down to the beautiful design of an awesome product and experience. An artist at heart with a customer service background, I bring the dynamic combination of creativity and understanding to the design process of the user’s experience. See my latest <Link className="text-link" to="/projects/">projects</Link> and how I might be able to help your team on your next venture.</p>


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

							{/* <article className="project"  data-project="3">
								<div className="project-image">
									<img src={comingSoon} alt=""/>
								</div>
								<div className="project-description">
									<h1>Coming Soon</h1>
									<p>Check back soon to see my upcoming project!</p>
								</div>
							</article> */}
						</section>


						<section className="contact">
							<h1 className="title">Contact Me
								<span className="contact-icons"><img src={gmail}></img></span>
								<span className="contact-icons"><img src={linkedin}></img></span>
								<span className="contact-icons"><img src={twitter}></img></span>
							</h1>

							<ul>
								<li>Email: <span>brianasbrock@gmail.com</span></li>
								<li>Phone: <span>770.845.2311</span></li>
								<li>LinkedIn: <span>https://www.linkedin.com/in/briana-brock/</span></li>
								<li>Twitter: <span>https://twitter.com/BrianaBW1</span></li>
								{/* <li><Link to="https://www.linkedin.com/in/briana-brock/"></Link></li> */}
							</ul>



						</section>
					</section>

				</div>
			</Layout>
		)
	}
}

export default Home
