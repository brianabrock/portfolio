import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"
import './styles/index.scss'

import ProjectsList from '../components/projects-list';

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
                projectDiv.scrollIntoView({ block: "center", behavior: 'smooth' });
            })
        })
    }


	render() {
		return (
			<Layout>
				<div className="home-page">
					{/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
					<section className="hero" />

					<section className="content">
						<section className="brief-text">
							<p>A creative thinker and artist dedicated to the user centered process of research and design</p>
						</section>

						<section className="intro-text">
							<p>I'm an emerging UX Designer passionate about people, proficient with research, with a creative mind and spirit, and an eye for detail ready to create beautiful experiences. I'm skilled at various research methodologies including competitive audits, user interviews based on demographics, synthesizing qualitative and quantitative data, and using all that information to start getting down to the beautiful design of an awesome product and experience.</p>

							<p>An artist at heart with a customer service background, I bring the dynamic combination of creativity and understanding to the design process of the user’s experience. See my latest <Link className="text-link" to="/projects/">projects</Link> and how I might be able to help your team on your next venture.</p>
						</section>


						<ProjectsList />

						<section className="contact">
							<h1 className="title">Contact Me
								<span className="contact-icons"><img src={gmail} alt="gmail" /></span>
								<span className="contact-icons"><img src={linkedin} alt="linkedin" /></span>
								<span className="contact-icons"><img src={twitter} alt="twitter" /></span>
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

export default Home;
