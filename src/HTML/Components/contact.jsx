import React, { useState } from 'react';

export const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [disabled, setDisabled] = useState(false);
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (disabled) {
			return;
		}
		// Use EmailJS to send the email
		setDisabled(true);
		window.emailjs
			.send(
				'service_w1a0u4k', // your service ID
				'template_s2hrwjr', // your template ID
				formData, // the form data
				'J69lp0Ht1sH3-qKQ5'
			)
			.then((response) => {
				console.log('Email successfully sent!', response);
				setFormData({
					name: '',
					email: '',
					message: '',
				});
				// Disable form submission for 10 seconds

				setTimeout(() => setDisabled(false), 10000);
			})
			.catch((error) => {
				console.error('Error sending email:', error);
			});
	};

	return (
		<form onSubmit={handleSubmit}>
			{' '}
			<div className="form-name-field form-input-field">
				<label>Name:</label>
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="form-email-field form-input-field">
				<label>Email:</label>
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="form-message-field">
				<label>Message:</label>
				<textarea
					name="message"
					value={formData.message}
					onChange={handleChange}
					required
				></textarea>
			</div>
			<div className="form-submit-button">
				<button type="submit" disabled={disabled}>
					Submit
				</button>
				{/* <p className="warning-message">
					Please wait 10 seconds before sending again.
				</p> */}
				{disabled && (
					<p className="warning-message">
						Please wait 10 seconds before sending again.
					</p>
				)}
			</div>
		</form>
	);
};
