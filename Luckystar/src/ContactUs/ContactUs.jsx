import React, { useState } from "react";
import {
	MapPin,
	Phone,
	Clock,
	Mail,
	MessageSquare,
	Send,
	CheckCircle,
	Search,
	Globe,
} from "lucide-react";
import Breadcrumbs from "../breadcrums/breadcrum";

const ContactPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
		saveInfo: false,
	});
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleInputChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitted(true);
		setTimeout(() => {
			setIsSubmitted(false);
			setFormData({
				name: "",
				email: "",
				phone: "",
				subject: "",
				message: "",
				saveInfo: false,
			});
		}, 3000);
	};

	const navItems = [
		"Home",
		"Skilled",
		"Work Permit",
		"Investment",
		"Visa",
		"About",
		"Connect",
	];

	return (
		<div className="min-h-screen bg-white">
			{/* Header Section */}
			<div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-10">
					<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+')]"></div>
				</div>

				{/* Curved Bottom */}
				<div className="absolute bottom-0 left-0 right-0">
					<svg
						className="w-full h-12 text-white"
						viewBox="0 0 1440 120"
						preserveAspectRatio="none">
						<path
							fill="currentColor"
							d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
							opacity=".25"></path>
						<path
							fill="currentColor"
							d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
							opacity=".5"></path>
						<path
							fill="currentColor"
							d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
					</svg>
				</div>

				<div className="relative z-10">
					{/* Page Header */}
					<div className="text-center py-16 px-6">
						<h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
							Contact Us
						</h1>
						<Breadcrumbs />
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="container mx-auto px-6 lg:px-12 py-16">
				<div className="grid lg:grid-cols-2 gap-16">
					{/* Left Column - Contact Information */}
					<div className="space-y-12">
						{/* Quick Contact Section */}
						<div>
							<div className="flex items-center space-x-2 mb-4">
								<div className="w-8 h-1 bg-blue-600 rounded-full"></div>
								<span className="text-blue-600 font-medium text-sm tracking-wider uppercase">
									QUICK CONTACT
								</span>
								<div className="w-2 h-2 bg-blue-600 rounded-full"></div>
							</div>

							<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
								Have Questions?
								<br />
								<span className="text-blue-900">
									Don't Hesitate to Contact Us
								</span>
							</h2>

							<p className="text-gray-600 text-lg leading-relaxed mb-8">
								Get in touch with our expert team for personalized guidance on
								your immigration journey. We're here to help you achieve your
								dreams.
							</p>

							{/* Location Card */}
							<div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
								<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
									<MapPin className="text-blue-600" size={24} />
								</div>
								<div>
									<h3 className="text-xl font-semibold text-gray-900 mb-2">
										Location
									</h3>
									<p className="text-gray-600 leading-relaxed">
										141, First Floor, 12 St Roots Terrace, Los Angeles 90010
										<br />
										United States of America.
									</p>
								</div>
							</div>
						</div>

						{/* Contact Details Grid */}
						<div className="grid sm:grid-cols-2 gap-8">
							{/* Quick Contact */}
							<div className="p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
								<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
									<MessageSquare className="text-blue-600" size={24} />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									Quick Contact
								</h3>
								<div className="space-y-2">
									<div>
										<span className="text-gray-700 font-medium">Phone:</span>
										<p className="text-blue-600 font-semibold">
											+1 89-636-48018
										</p>
									</div>
									<div>
										<span className="text-gray-700 font-medium">Email:</span>
										<p className="text-blue-600 font-semibold">
											info@aurorabusiness.com
										</p>
									</div>
								</div>
							</div>

							{/* Opening Hours */}
							<div className="p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
								<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
									<Clock className="text-blue-600" size={24} />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									Opening Hours
								</h3>
								<div className="space-y-2">
									<div>
										<span className="text-gray-700 font-medium">
											Mon - Friday:
										</span>
										<p className="text-gray-600">09:00 am to 07:00 pm</p>
									</div>
									<div>
										<span className="text-gray-700 font-medium">Weekend:</span>
										<p className="text-gray-600">Closed</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-100 rounded-full opacity-40 blur-3xl z-0 pointer-events-none"></div>

					{/* Right Column - Contact Form */}
					<div className="lg:pl-8">
						<div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
							{/* Form Header */}
							<div className="p-8 pb-0">
								<div className="flex items-center space-x-2 mb-4">
									<div className="w-8 h-1 bg-blue-600 rounded-full"></div>
									<span className="text-blue-600 font-medium text-sm tracking-wider uppercase">
										LET'S CONNECT
									</span>
									<div className="w-2 h-2 bg-blue-600 rounded-full"></div>
								</div>

								<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
									Send Your Message
								</h2>
								<p className="text-blue-600 mb-8">
									Fill out the form below and we'll get back to you within 24
									hours.
								</p>
							</div>

							{/* Form Content */}
							<div className="px-8 pb-8">
								{isSubmitted ? (
									<div className="text-center py-12">
										<div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
											<CheckCircle className="text-green-600" size={32} />
										</div>
										<h3 className="text-2xl font-semibold text-gray-900 mb-2">
											Message Sent Successfully!
										</h3>
										<p className="text-gray-600">
											Thank you for contacting us. We'll get back to you within
											24 hours.
										</p>
									</div>
								) : (
									<form onSubmit={handleSubmit} className="space-y-6">
										{/* Name and Email Row */}
										<div className="grid sm:grid-cols-2 gap-4">
											<div>
												<label className="block text-sm font-medium text-gray-700 mb-2">
													Name
												</label>
												<input
													type="text"
													name="name"
													value={formData.name}
													onChange={handleInputChange}
													className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all"
													placeholder="Your name"
													required
												/>
											</div>
											<div>
												<label className="block text-sm font-medium text-gray-700 mb-2">
													Email
												</label>
												<input
													type="email"
													name="email"
													value={formData.email}
													onChange={handleInputChange}
													className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all"
													placeholder="Your email"
													required
												/>
											</div>
										</div>

										{/* Phone and Subject Row */}
										<div className="grid sm:grid-cols-2 gap-4">
											<div>
												<label className="block text-sm font-medium text-gray-700 mb-2">
													Phone
												</label>
												<input
													type="tel"
													name="phone"
													value={formData.phone}
													onChange={handleInputChange}
													className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all"
													placeholder="Your phone"
													required
												/>
											</div>
											<div>
												<label className="block text-sm font-medium text-gray-700 mb-2">
													Subject
												</label>
												<input
													type="text"
													name="subject"
													value={formData.subject}
													onChange={handleInputChange}
													className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all"
													placeholder="Subject"
													required
												/>
											</div>
										</div>

										{/* Message */}
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												Your message
											</label>
											<textarea
												name="message"
												value={formData.message}
												onChange={handleInputChange}
												rows={6}
												className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all resize-none"
												placeholder="Write your message..."
												required></textarea>
										</div>

										{/* Checkbox */}
										<div className="flex items-start space-x-3">
											<input
												type="checkbox"
												name="saveInfo"
												checked={formData.saveInfo}
												onChange={handleInputChange}
												className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
											/>
											<label className="text-sm text-gray-600 leading-relaxed">
												Save my name, email, and website in this browser for the
												next time I comment.
											</label>
										</div>

										{/* Submit Button */}
										<button
											type="submit"
											className="w-full bg-blue-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 transition-all duration-200 flex items-center justify-center space-x-2 group">
											<span>Send Message</span>
											<Send
												size={18}
												className="group-hover:translate-x-1 transition-transform"
											/>
										</button>
									</form>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Find Us on Map Section */}
			<div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-7xl mx-auto mt-20 mb-20">
				{/* Header */}
				<div className="p-8 border-b bg-gradient-to-r from-blue-900 to-blue-800 border-gray-200 text-white">
					<div className="flex items-center justify-between">
						<div>
							<h3 className="text-2xl font-bold">Find Us on the Map</h3>
							<p className="text-blue-100 mt-2">
								Visit our office or get directions
							</p>
						</div>
						<div className="flex items-center space-x-4">
							<a
								href="https://maps.google.com/?q=34.0522,-118.3062"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors">
								<Globe size={20} />
								<span>Open in Maps</span>
							</a>
						</div>
					</div>
				</div>

				{/* Map Container */}
				<div className="relative w-full" style={{ height: "500px" }}>
					<iframe
						className="absolute inset-0 w-full h-full"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.4967!2d-118.3062!3d34.0522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1639000000000!5m2!1sen!2sus"
						title="Aurora Business Location"
						loading="lazy"
						allowFullScreen
						referrerPolicy="no-referrer-when-downgrade"
						style={{
							border: 0,
							borderBottomLeftRadius: "1rem",
							borderBottomRightRadius: "1rem",
						}}></iframe>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			<div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
				<div className="flex justify-around">
					{navItems.slice(0, 5).map((item, index) => (
						<a
							key={index}
							href="#"
							className={`text-xs font-medium py-2 px-3 rounded-full transition-colors ${
								item === "Connect"
									? "text-blue-600 bg-blue-50"
									: "text-gray-600 hover:text-blue-600"
							}`}>
							{item}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
