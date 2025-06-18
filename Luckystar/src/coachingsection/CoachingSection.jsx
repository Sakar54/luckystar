import { motion } from "framer-motion";
import {
	FaChartLine,
	FaUserGraduate,
	FaLaptopCode,
	FaHandshake,
	FaArrowRight,
	FaStar,
	FaUsers,
	FaClock,
	FaCheckCircle,
	FaGraduationCap,
	FaExternalLinkAlt,
} from "react-icons/fa";

const coachingServices = [
	{
		id: 1,
		title: "TOEFL Coaching",
		icon: <FaChartLine className="text-4xl text-blue-900" />,
		description:
			"We offer personalized coaching to help you score high on TOEFL and meet your visa language requirements.",
		features: [
			"Personalized Study Plan",
			"Mock Tests",
			"Speaking Practice",
			"Writing Feedback",
		],
		duration: "3-6 months",
		students: "500+",
		successRate: "95%",
		link: "/coaching/toefl",
	},
	{
		id: 2,
		title: "Graduate Re-Exam",
		icon: <FaUserGraduate className="text-4xl text-blue-900" />,
		description:
			"Need to reappear for a graduate exam? We prepare you with updated syllabus and expert strategies.",
		features: [
			"Updated Syllabus",
			"Expert Strategies",
			"Practice Tests",
			"One-on-One Sessions",
		],
		duration: "4-8 months",
		students: "300+",
		successRate: "92%",
		link: "/coaching/graduate",
	},
	{
		id: 3,
		title: "Scholastic Aptitude",
		icon: <FaLaptopCode className="text-4xl text-blue-900" />,
		description:
			"Master critical thinking and problem-solving for competitive scholastic aptitude tests.",
		features: [
			"Critical Thinking",
			"Problem Solving",
			"Time Management",
			"Practice Questions",
		],
		duration: "3-5 months",
		students: "400+",
		successRate: "94%",
		link: "/coaching/scholastic",
	},
	{
		id: 4,
		title: "Management Test",
		icon: <FaHandshake className="text-4xl text-blue-900" />,
		description:
			"Crack your management entrance tests with coaching from experienced instructors.",
		features: [
			"Case Studies",
			"Group Discussions",
			"Interview Prep",
			"Mock Tests",
		],
		duration: "6-12 months",
		students: "250+",
		successRate: "90%",
		link: "/coaching/management",
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export default function CoachingSection() {
	return (
		<section className="relative bg-gradient-to-b from-white via-blue-50 to-white py-20 px-4 sm:px-8 lg:px-16 overflow-hidden">
			{/* Decorative Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-50 blur-3xl" />
				<div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100 rounded-full opacity-50 blur-3xl" />
			</div>

			{/* Section Header */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="relative mb-16 text-center">
				<div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold tracking-wider">
					<FaGraduationCap className="text-blue-900" />
					<span>Our Coaching</span>
				</div>
				<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
					Excel's Trusted Coaching{" "}
					<span className="text-blue-900">Programs</span>
				</h2>
				<p className="text-gray-600 mt-3 max-w-3xl mx-auto text-lg leading-relaxed">
					We help students and professionals prepare for globally recognized
					exams required for visa processing and career advancement.
				</p>
			</motion.div>

			{/* Coaching Grid */}
			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto relative">
				{coachingServices.map((service) => (
					<motion.a
						href={service.link}
						key={service.id}
						variants={itemVariants}
						className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer block relative overflow-hidden">
						{/* Hover Overlay */}
						<div className="absolute inset-0 bg-gradient-to-br from-blue-900/0 to-blue-900/0 group-hover:from-blue-900/5 group-hover:to-blue-900/10 transition-all duration-300" />
						
						{/* Content */}
						<div className="relative">
							<div className="relative w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
								{service.icon}
								<span className="absolute -bottom-2 -right-2 bg-blue-900 text-white text-xs rounded-full px-2 py-0.5 font-bold">
									{String(service.id).padStart(2, "0")}
								</span>
							</div>
							<h3 className="text-lg font-bold text-blue-900 mb-2 text-center group-hover:text-blue-800 transition-colors duration-300">
								{service.title}
							</h3>
							<p className="text-gray-600 mb-4 text-center text-sm group-hover:text-gray-700 transition-colors duration-300 line-clamp-2">
								{service.description}
							</p>

							{/* Features List */}
							<ul className="space-y-2 mb-4">
								{service.features.map((feature, index) => (
									<li
										key={index}
										className="flex items-center text-xs text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
										<FaCheckCircle className="text-green-500 mr-2 flex-shrink-0 text-xs" />
										{feature}
									</li>
								))}
							</ul>

							{/* Stats */}
							<div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-100">
								<div className="text-center">
									<FaClock className="text-blue-900 mx-auto mb-1 text-sm" />
									<p className="text-xs font-semibold text-gray-800">
										{service.duration}
									</p>
								</div>
								<div className="text-center">
									<FaUsers className="text-blue-900 mx-auto mb-1 text-sm" />
									<p className="text-xs font-semibold text-gray-800">
										{service.students}
									</p>
								</div>
								<div className="text-center">
									<FaStar className="text-blue-900 mx-auto mb-1 text-sm" />
									<p className="text-xs font-semibold text-gray-800">
										{service.successRate}
									</p>
								</div>
							</div>

							{/* Link Indicator */}
							<div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<FaExternalLinkAlt className="text-blue-900 text-sm" />
							</div>
						</div>
					</motion.a>
				))}
			</motion.div>

			{/* CTA Section */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2 }}
				viewport={{ once: true }}
				className="mt-16 text-center relative">
				<div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 sm:p-10 max-w-4xl mx-auto shadow-xl">
					<h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
						Ready to Start Your Journey?
					</h3>
					<p className="text-blue-100 mb-6 max-w-2xl mx-auto">
						Join our successful students and achieve your academic and career
						goals
					</p>
					<button className="group px-8 py-3 bg-white text-blue-900 font-semibold rounded-full hover:bg-blue-50 transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl">
						Get Started Now
						<FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
					</button>
				</div>
			</motion.div>
		</section>
	);
}
