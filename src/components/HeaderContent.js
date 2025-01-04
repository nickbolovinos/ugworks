import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import logo from '../images/ugworks_logo.png';
import LoginModal from '../components/LoginModal';


function HeaderContent() {

	const canonicalUrl = window.location.href

	const topnav = [
		{ 'title': 'home', 'url': '/' },
		{ 'title': 'stocks', 'url': '/stocks' },
		{ 'title': 'portfolio', 'url': '/portfolio' },
		{ 'title': 'contact', 'url': '/contact' }
	]

	const active = (val) => {
		const url = window.location.pathname;
		if (url.indexOf(val) > -1) {
			return 'current'
		} else if (url === '/' && val === 'home') {
			return 'current'
		}
	}

	const [showLoginModal, setShowLoginModal] = useState(false);

	const handleLogin = (userData) => {
		console.log('User Logged in:', userData);
		// Here you would make your api call to login the user.
	};

	const handleSignup = (userData) => {
		console.log('New User Registered:', userData);
			// Here you would make your api call to register the user.
	};

	const handleModalClose = () => setShowLoginModal(false);

	return (
		<HelmetProvider>
			<Helmet>
				<link rel="canonical" href={canonicalUrl} />
			</Helmet>
			<div className="container-fluid" id="header">
				<div className="container">
					<ul id="topnav" className="row">
						{topnav.map((item, index) => (
							<li className="col" key={index}>
								<Link to={item.url} className={active(item.title)} >{item.title}</Link>
							</li>
						))}
						<li className="col">
							<Link onClick={() => setShowLoginModal(true)} >Login</Link>
						</li>
						<LoginModal
							show={showLoginModal}
							onClose={handleModalClose}
							onLogin={handleLogin}
							onSignup={handleSignup}
						/>
					</ul>
					<div id="logo">
						<a href="/"><img className="img-fluid" src={logo} alt="logo" width="692" height="139" /></a>
					</div>
					<h2 className="d-none d-lg-block">We specialize in small businesses that need a beautiful, <br />yet functional web presence to help their business grow!</h2>
				</div>
			</div>
		</HelmetProvider>
	)

}

export default HeaderContent;