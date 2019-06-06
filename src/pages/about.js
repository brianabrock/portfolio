import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Chart from 'chart.js';
import './css/index.scss'

class About extends React.Component {

	componentDidMount() {
		this.chartjs()
		this.homeScroll()
	}

	homeScroll() {
		const wh = window.innerHeight;
		let textLinks = document.querySelectorAll('.text-link');
		let homeKickers = document.querySelectorAll('.kicker');

		window.addEventListener('scroll', function(e) {
			let scrollPosLow = window.scrollY + (wh * .66);
			let scrollPosCenter = window.scrollY + (wh /2);

			textLinks.forEach( (link, i) => {
                scrollPosCenter >= link.offsetTop ? link.classList.add('scrolled') : link.classList.remove('scrolled');
            })

            homeKickers.forEach( (kicker, i) => {
                scrollPosLow >= kicker.offsetTop ? kicker.classList.add('scrolled') : kicker.classList.remove('scrolled');
            })
		})
	}

	chartjs() {
		const ctx = document.getElementById('life-chart');
		// eslint-disable-next-line
		let doughnutChart = new Chart(ctx, {
			type: "doughnut",
			data: {
				labels: ["this", "that", "the other", "more stuff", "other stuff"],
				datasets: [
					{
						label: "These things...",
						data: [12, 19, 3, 14, 7],
						backgroundColor: ['rgba(0, 150, 0, .5)'],
					},
				]
			}
		});
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
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, voluptate?</p>
						</section>

						<section className="intro-text">
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ratione, tempora nisi perspiciatis illum officia fugiat explicabo, voluptatum sunt corporis similique deserunt accusantium itaque sed rerum et quidem? Fuga delectus quaerat qui iure quae laudantium provident maxime nam dignissimos. Animi <Link className="text-link" to="/projects/">projects</Link> saepe, magnam consequatur repudiandae illum eligendi, est corrupti dolores rerum modi vitae similique sapiente quod non laudantium omnis ullam iste molestiae at tenetur mollitia veniam. Accusamus corporis eius alias architecto sunt, maiores doloribus maxime officiis, nihil ducimus eos suscipit doloremque cumque voluptatum inventore quidem mollitia labore necessitatibus cum culpa? Iste voluptate minus, quos dignissimos earum atque tempora obcaecati minima.</p>
						</section>

						<section className="followup-text">

							<div className="chart">
								<canvas id="life-chart" height="400px" width="400px"></canvas>
							</div>

							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quaerat eum recusandae molestias! Aspernatur, iure. Ipsa, vel quae placeat saepe magni eligendi ab ex quas, magnam officiis tempora recusandae dolorem exercitationem sapiente doloribus expedita omnis totam vero possimus labore sunt odio. Doloribus <Link className="text-link" to="/art/">art</Link> perspiciatis incidunt possimus facere rerum porro, asperiores, laboriosam laborum sint reiciendis dolore eius a praesentium, dolorem similique et quos vitae enim. Labore unde consectetur qui inventore ipsa assumenda cumque sed repellendus sunt tenetur! Quos obcaecati quaerat aut.</p>
						</section>

						<section className="skill-badges">
							<div className="badge">
								<img src="https://via.placeholder.com/150" alt=""/>
								<p>Lorem ipsum dolor sit amet.</p>
							</div>
							<div className="badge">
								<img src="https://via.placeholder.com/150" alt=""/>
								<p>Lorem ipsum dolor sit amet.</p>
							</div>
							<div className="badge">
								<img src="https://via.placeholder.com/150" alt=""/>
								<p>Lorem ipsum dolor sit amet.</p>
							</div>
						</section>

						<section className="bottom-kickers">
							<div className="kicker" id="kicker1">
								<img src="https://via.placeholder.com/300" alt=""/>
								<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, quo?</p>
							</div>
							<div className="kicker" id="kicker2">
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, a.</p>
								<img src="https://via.placeholder.com/300C/O" alt=""/>
							</div>
						</section>

					</section>
				</div>
			</Layout>
		)
	}
}

export default About;
