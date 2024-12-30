import React from 'react';
import HeaderContent from '../components/HeaderContent';
import FooterContent from '../components/FooterContent';
import background from '../images/404.png'

function ErrorPage() {

	return (
		<>
			<div id="wrapper">
				<HeaderContent />
				<div id="content" className="container">
					<section className="error-404 not-found" style={{ backgroundImage: `url(${background})`, minHeight: `600px`, backgroundSize: `100%`}}>
					</section>
				</div>
			</div>
			<FooterContent />
		</>
	)

}

export default ErrorPage;