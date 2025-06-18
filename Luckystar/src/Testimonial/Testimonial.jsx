import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteLeft, FaRegStar, FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const testimonials = [
	{
		name: "Arjun Subedi",
		country: "Canada",
		flag: "🇨🇦",
		rating: 5,
		message:
			"My Canadian PR process was smooth and successful thanks to their expert guidance. I got approved in just 5 months!",
		avatar: "https://randomuser.me/api/portraits/men/75.jpg",
		date: "March 2024",
	},
	{
		name: "Priya Sharma",
		country: "Australia",
		flag: "🇦🇺",
		rating: 4,
		message:
			"They guided me through every step of my Student Visa application. I'm now living and studying in Sydney!",
		avatar: "https://randomuser.me/api/portraits/women/44.jpg",
		date: "February 2024",
	},
	{
		name: "Mohammad Rahman",
		country: "UK",
		flag: "🇬🇧",
		rating: 5,
		message:
			"I secured my UK Skilled Worker Visa with zero delays. Professional service and crystal-clear communication!",
		avatar: "https://randomuser.me/api/portraits/men/65.jpg",
		date: "January 2024",
	},
	{
		name: "Sofia Patel",
		country: "USA",
		flag: "🇺🇸",
		rating: 5,
		message:
			"Their team ensured my F-1 Student Visa to the US was a success. Every document and interview step was on point.",
		avatar: "https://randomuser.me/api/portraits/women/55.jpg",
		date: "December 2023",
	},
	{
		name: "Lucas Chen",
		country: "Germany",
		flag: "🇩🇪",
		rating: 5,
		message:
			"Got my Blue Card visa for Germany within 3 months. Their expertise in EU immigration made the process stress-free.",
		avatar: "https://randomuser.me/api/portraits/men/32.jpg",
		date: "November 2023",
	},
	{
		name: "Emma Wilson",
		country: "New Zealand",
		flag: "🇳🇿",
		rating: 5,
		message:
			"Successfully obtained my Work Visa for New Zealand. Their team's knowledge of NZ immigration policies was impressive.",
		avatar: "https://randomuser.me/api/portraits/women/68.jpg",
		date: "October 2023",
	},
	{
		name: "Rajesh Kumar",
		country: "Singapore",
		flag: "🇸🇬",
		rating: 4,
		message:
			"Their guidance helped me secure an Employment Pass in Singapore. Very professional and responsive team.",
		avatar: "https://randomuser.me/api/portraits/men/45.jpg",
		date: "September 2023",
	},
	{
		name: "Maria Garcia",
		country: "Spain",
		flag: "🇪🇸",
		rating: 5,
		message:
			"Got my Spanish Work Visa approved in record time. Their expertise in EU immigration laws was invaluable.",
		avatar: "https://randomuser.me/api/portraits/women/22.jpg",
		date: "August 2023",
	},
	{
		name: "David Kim",
		country: "Japan",
		flag: "🇯🇵",
		rating: 5,
		message:
			"Successfully obtained my Japanese Work Visa. Their team's attention to detail and cultural understanding was remarkable.",
		avatar: "https://randomuser.me/api/portraits/men/88.jpg",
		date: "July 2023",
	},
	{
		name: "Sarah Johnson",
		country: "Ireland",
		flag: "🇮🇪",
		rating: 5,
		message:
			"Their expertise in Irish immigration helped me secure a Critical Skills Permit. Excellent service throughout!",
		avatar: "https://randomuser.me/api/portraits/women/33.jpg",
		date: "June 2023",
	},
];

export default function TestimonialSection() {
	const [showForm, setShowForm] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		country: "",
		message: "",
		rating: 5,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		setShowForm(false);
		setFormData({ name: "", country: "", message: "", rating: 5 });
	};

	return (
		<section className="bg-gradient-to-b from-white via-blue-50 to-white py-24 px-4 sm:px-8 lg:px-16">
			{/* Header */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="text-center mb-16 relative">
				{/* Decorative Background */}
				<div className="absolute inset-0 -z-10">
					<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
				</div>

				{/* Success Stories Badge */}
				<motion.div
					initial={{ scale: 0.9, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ delay: 0.2 }}
					className="inline-block mb-6">
					<span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold px-6 py-2 rounded-full shadow-lg flex items-center space-x-2">
						<FaCheckCircle className="text-green-300" />
						<span>Success Stories</span>
						<FaStar className="text-yellow-300" />
					</span>
				</motion.div>

				{/* Main Title */}
				<motion.h2
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.3 }}
					className="text-4xl md:text-5xl font-bold mb-6 relative">
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
						Immigrant Success Stories
					</span>
					<div className="absolute -right-8 -top-4">
						<FaStar className="text-yellow-400 text-2xl animate-bounce" />
					</div>
				</motion.h2>

				{/* Description */}
				<motion.p
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.4 }}
					className="text-gray-600 mt-2 max-w-2xl mx-auto text-lg leading-relaxed relative">
					Read real testimonials from clients who achieved their visa goals
					through our expert guidance and support.
					<div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
						<FaRegStar className="text-blue-200 text-xl" />
					</div>
					<div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
						<FaRegStar className="text-blue-200 text-xl" />
					</div>
				</motion.p>

				{/* Decorative Line */}
				<motion.div
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ delay: 0.5, duration: 0.5 }}
					className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
				/>

				{/* Stats */}
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.6 }}
					className="mt-12 flex justify-center space-x-8">
					<div className="text-center">
						<div className="text-3xl font-bold text-blue-600">500+</div>
						<div className="text-sm text-gray-600">Success Stories</div>
					</div>
					<div className="text-center">
						<div className="text-3xl font-bold text-blue-600">98%</div>
						<div className="text-sm text-gray-600">Success Rate</div>
					</div>
					<div className="text-center">
						<div className="text-3xl font-bold text-blue-600">15+</div>
						<div className="text-sm text-gray-600">Countries</div>
					</div>
				</motion.div>
			</motion.div>

			{/* Swiper */}
			<div className="max-w-7xl mx-auto relative">
				<Swiper
					modules={[Pagination, Autoplay, Navigation]}
					pagination={{
						clickable: true,
						dynamicBullets: true,
					}}
					navigation={true}
					autoplay={{
						delay: 4000,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
					}}
					spaceBetween={30}
					slidesPerView={1}
					breakpoints={{
						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					}}
					className="testimonial-swiper pb-16"
					style={{
						"--swiper-pagination-color": "#1e40af",
						"--swiper-navigation-color": "#1e40af",
						"--swiper-navigation-size": "25px",
					}}>
					{testimonials.map((t, index) => (
						<SwiperSlide key={index}>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.4 }}
								viewport={{ once: true }}
								className="bg-white rounded-2xl shadow-lg p-8 text-center h-full flex flex-col justify-between hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100">
								<div className="relative">
									<FaQuoteLeft className="text-blue-100 text-5xl mx-auto mb-4" />
									<div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-blue-50 to-white rounded-full -z-10"></div>
									<img
										src={t.avatar}
										alt={t.name}
										className="w-24 h-24 mx-auto rounded-full mb-6 border-4 border-white shadow-lg object-cover"
									/>
								</div>

								<div className="flex-grow">
									<p className="text-gray-700 mb-6 text-lg italic leading-relaxed">
										"{t.message}"
									</p>

									{/* Star Rating */}
									<div className="flex justify-center mb-4">
										{Array.from({ length: 5 }).map((_, i) => (
											<FaStar
												key={i}
												className={`h-5 w-5 mx-[2px] ${
													i < t.rating ? "text-yellow-400" : "text-gray-200"
												}`}
											/>
										))}
									</div>
								</div>

								{/* Footer */}
								<div className="mt-6 pt-6 border-t border-blue-50">
									<h4 className="font-bold text-gray-800 text-xl mb-1">
										{t.name}
									</h4>
									<div className="flex items-center justify-center space-x-2">
										<span className="text-2xl">{t.flag}</span>
										<p className="text-blue-600 font-medium">
											{t.country} Visa
										</p>
									</div>
									<p className="text-sm text-gray-500 mt-2 font-medium">
										{t.date}
									</p>
								</div>
							</motion.div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			{/* CTA Button */}
			<motion.div
				className="text-center mt-16"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}>
				<button
					onClick={() => setShowForm(true)}
					className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
					✍️ Share Your Success Story
				</button>
			</motion.div>

			{/* Testimonial Form Modal */}
			<AnimatePresence>
				{showForm && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							className="bg-white rounded-2xl p-8 max-w-md w-full">
							<h3 className="text-2xl font-bold text-gray-800 mb-6">
								Share Your Story
							</h3>
							<form onSubmit={handleSubmit} className="space-y-4">
								<div>
									<label className="block text-gray-700 mb-2">Your Name</label>
									<input
										type="text"
										value={formData.name}
										onChange={(e) =>
											setFormData({ ...formData, name: e.target.value })
										}
										className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
										required
									/>
								</div>
								<div>
									<label className="block text-gray-700 mb-2">Country</label>
									<input
										type="text"
										value={formData.country}
										onChange={(e) =>
											setFormData({ ...formData, country: e.target.value })
										}
										className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
										required
									/>
								</div>
								<div>
									<label className="block text-gray-700 mb-2">
										Your Experience
									</label>
									<textarea
										value={formData.message}
										onChange={(e) =>
											setFormData({ ...formData, message: e.target.value })
										}
										className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
										required
									/>
								</div>
								<div>
									<label className="block text-gray-700 mb-2">Rating</label>
									<div className="flex space-x-2">
										{Array.from({ length: 5 }).map((_, i) => (
											<button
												key={i}
												type="button"
												onClick={() =>
													setFormData({ ...formData, rating: i + 1 })
												}
												className="focus:outline-none">
												<FaStar
													className={`h-6 w-6 ${
														i < formData.rating
															? "text-yellow-400"
															: "text-gray-200"
													}`}
												/>
											</button>
										))}
									</div>
								</div>
								<div className="flex justify-end space-x-4 mt-6">
									<button
										type="button"
										onClick={() => setShowForm(false)}
										className="px-6 py-2 text-gray-600 hover:text-gray-800">
										Cancel
									</button>
									<button
										type="submit"
										className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
										Submit
									</button>
								</div>
							</form>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
