import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './styles/header.scss'

class Header extends React.Component {
	componentDidMount() {
		this.headerScroll()
	}

	headerScroll() {
		const headerElem = document.querySelector('.header');

		window.addEventListener('scroll', function(e) {
			window.scrollY > 200 ? headerElem.classList.add('scrolled') : headerElem.classList.remove('scrolled')
		})
	}

	render() {
		return (

			<header className='header'>
				<div className="header-container">
					<h1 style={{ margin: 0 }}>
						<Link to="/" style={{ textDecoration: `none`}} >
						{this.props.siteTitle}
						</Link>
					</h1>

					<div className="header-links">
						<Link to="/projects/">Projects</Link>
						<Link to="/art/">Art</Link>
					</div>
				</div>
			</header>
		)
	}
}


Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}


export default Header
