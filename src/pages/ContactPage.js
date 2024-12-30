import React from 'react';
import HeaderContent from '../components/HeaderContent';
import FooterContent from '../components/FooterContent';

function ContactPage() {

	return (
		<>
			<div id="wrapper">
				<HeaderContent />
				<div id="content" className="container">
					<h1>Contact Us</h1>

				</div>
			</div>
			<FooterContent />
		</>
	)

}

export default ContactPage;