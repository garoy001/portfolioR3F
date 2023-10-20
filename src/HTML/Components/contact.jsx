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
				setDisabled(true);
				setTimeout(() => setDisabled(false), 10000);
			})
			.catch((error) => {
				console.error('Error sending email:', error);
			});
	};

	return (
		<form onSubmit={handleSubmit}>
			{' '}
			<div>
				<label>Name:</label>
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label>Email:</label>
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label>Message:</label>
				<textarea
					name="message"
					value={formData.message}
					onChange={handleChange}
					required
				></textarea>
			</div>
			<div>
				<button type="submit" disabled={disabled}>
					Submit
				</button>
				{disabled && <p>Please wait 10 seconds before sending again.</p>}
			</div>
		</form>
	);
};
