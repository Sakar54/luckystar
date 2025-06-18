import { FaUserGraduate, FaBuilding, FaBriefcase, FaGlobe, FaPlane, FaPassport, FaHeartbeat, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const visaTypes = [
	{
		title: "Student Visa",
		icon: <FaUserGraduate className="text-3xl sm:text-4xl text-blue-800" />,
		badge: "Study",
		description:
			"We help students secure visas for academic success abroad with expert documentation and interview prep.",
		image: "https://via.placeholder.com/455x150",
		link: "#",
	},
	{
		title: "Residence Visa",
		icon: <FaBuilding className="text-3xl sm:text-4xl text-blue-800" />,
		badge: "Residence",
		description:
			"Whether it's permanent residency or long-term stay, our legal experts ensure smooth visa filing.",
		image: "https://via.placeholder.com/455x150",
		link: "#",
	},
	{
		title: "Business Visa",
		icon: <FaBriefcase className="text-3xl sm:text-4xl text-blue-800" />,
		badge: "Business",
		description:
			"For entrepreneurs and professionals seeking international business opportunities or expansion.",
		image: "https://via.placeholder.com/455x150",
		link: "#",
	},
	{
		title: "Investor Visa",
		icon: <FaGlobe className="text-3xl sm:text-4xl text-blue-800" />,
		badge: "Investor",
		description:
			"Our specialists assist investors with business immigration to unlock new global opportunities.",
		image: "https://via.placeholder.com/455x150",
		link: "#",
	},
	{
		title: "Tourist Visa",
		icon: <FaPlane className="text-3xl sm:text-4xl text-blue-800" />,
		badge: "Tourist",
		description:
			"Travel for leisure or family visits with our expert tourist visa support.",
		image: "https://via.placeholder.com/455x150",
		link: "#",
	},
	{
		title: "Work Permit",
		icon: <FaPassport className="text-3xl sm:text-4xl text-blue-800" />,
		badge: "Work",
		description:
			"Get your work permit for top destinations with our end-to-end assistance.",
		image: "https://via.placeholder.com/455x150",
		link: "#",
	},
	{
		title: "Family Visa",
		icon: <FaUsers className="text-3xl sm:text-4xl text-blue-800" />,
		badge: "Family",
		description:
			"Reunite with your loved ones abroad. We handle all family visa requirements.",
		image: "https://via.placeholder.com/455x150",
		link: "#",
	},
	{
		title: "Medical Visa",
		icon: <FaHeartbeat className="text-3xl sm:text-4xl text-blue-800" />,
		badge: "Medical",
		description:
			"Travel for medical treatment with our fast-track medical visa services.",
		image: "https://via.placeholder.com/455x150",
		link: "#",
	},
];

export default function VisaCategories() {
	return (
		<section className="relative bg-gradient-to-b from-white via-blue-50 to-white py-16 px-2 sm:px-6 lg:px-16">
			{/* Decorative background accent */}
			<div className="absolute inset-0 pointer-events-none -z-10">
				<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20" />
			</div>

			{/* Header */}
			<div className="text-center mb-12">
				<p className="text-xs sm:text-sm text-blue-600 font-semibold tracking-wide uppercase mb-2">
					Visa Categories
				</p>
				<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 max-w-2xl mx-auto">
					Translation Services Inc. offers comprehensive immigration services.
				</h2>
			</div>

			{/* Swiper Carousel */}
			<Swiper
				modules={[Navigation, Pagination, A11y, Autoplay]}
				slidesPerView={1}
				spaceBetween={18}
				navigation
				pagination={{ clickable: true }}
				loop={true}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				breakpoints={{
					640: { slidesPerView: 1 },
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3 },
				}}
				className="max-w-6xl mx-auto pb-10"
			>
				{visaTypes.map((visa, index) => (
					<SwiperSlide key={index}>
						<motion.a
							href={visa.link}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full focus:ring-2 focus:ring-blue-400 outline-none relative"
						>
							{/* Badge */}
							<span className="absolute top-4 left-4 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full z-10 shadow-sm">
								{visa.badge}
							</span>
							<div className="flex-1 flex flex-col items-center text-center px-4 sm:px-6 pt-10 pb-4 bg-gray-50 relative">
								<div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-100 mb-4 group-hover:scale-110 transition-transform duration-300">
									{visa.icon}
								</div>
								<h3 className="text-base sm:text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-800 transition-colors">
									{visa.title}
								</h3>
								<p className="text-xs sm:text-sm text-gray-600 mb-4 line-clamp-3">
									{visa.description}
								</p>
								<span className="inline-flex items-center gap-1 text-blue-700 font-medium text-xs sm:text-sm hover:underline transition duration-200 group">
									Read More
									<motion.span
										whileHover={{ x: 6 }}
										className="inline-block"
									>
										→
									</motion.span>
								</span>
							</div>
							<img
								src={visa.image}
								alt={`${visa.title} image`}
								className="w-full h-[120px] sm:h-[150px] object-cover group-hover:scale-105 transition-transform duration-300"
							/>
						</motion.a>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
