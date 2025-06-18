import React, { useState, useEffect } from "react";
import {
	ChevronLeft,
	ChevronRight,
	User,
	Calendar,
	ArrowRight,
	Globe,
	Clock,
} from "lucide-react";

const newsData = [
	{
		img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
		date: "Feb 6, 2025",
		author: "Sarah Chen",
		title: "How Curiosity Drives Global Immigration Trends",
		desc: "Discover how evolving needs and aspirations shape migration patterns in 2025 and beyond. Understanding the psychological factors behind modern immigration decisions.",
		category: "Trends",
		readTime: "5 min read",
	},
	{
		img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2035&q=80",
		date: "Feb 5, 2025",
		author: "Michael Rodriguez",
		title: "Planning Your 2025 Move Abroad",
		desc: "A comprehensive practical guide to navigating visa policies, job markets, and lifestyle changes. Expert tips from immigration consultants worldwide.",
		category: "Guide",
		readTime: "8 min read",
	},
	{
		img: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufoDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
		date: "Feb 4, 2025",
		author: "Emma Thompson",
		title: "Digital Pathways Empower Migration Success",
		desc: "Explore how tech-savvy solutions simplify global relocation and residency planning. The future of immigration is digital and more accessible than ever.",
		category: "Technology",
		readTime: "6 min read",
	},
	{
		img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
		date: "Feb 3, 2025",
		author: "David Kim",
		title: "Visa Policies Simplified for 2025",
		desc: "New streamlined procedures across major destinations make relocation easier. Breaking down complex immigration laws into actionable insights.",
		category: "Policy",
		readTime: "7 min read",
	},
	{
		img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80",
		date: "Feb 2, 2025",
		author: "Lisa Zhang",
		title: "Remote Work Visa Programs Expanding",
		desc: "Countries worldwide are launching new digital nomad visas. Discover which destinations offer the best opportunities for remote professionals.",
		category: "Remote Work",
		readTime: "4 min read",
	},
];

const getCategoryColor = (category) => {
	const colors = {
		Trends: "bg-blue-100 text-blue-800",
		Guide: "bg-green-100 text-green-800",
		Technology: "bg-purple-100 text-purple-800",
		Policy: "bg-orange-100 text-orange-800",
		"Remote Work": "bg-indigo-100 text-indigo-800",
	};
	return colors[category] || "bg-gray-100 text-gray-800";
};

export default function News() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);
	const [slidesToShow, setSlidesToShow] = useState(3);
	const [isMobile, setIsMobile] = useState(false);

	// Responsive breakpoints
	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			setIsMobile(width < 768);

			if (width < 640) {
				setSlidesToShow(1);
			} else if (width < 1024) {
				setSlidesToShow(2);
			} else {
				setSlidesToShow(3);
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % newsData.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + newsData.length) % newsData.length);
	};

	const getVisibleSlides = () => {
		const slides = [];
		for (let i = 0; i < slidesToShow; i++) {
			const index = (currentSlide + i) % newsData.length;
			slides.push({ ...newsData[index], slideIndex: index });
		}
		return slides;
	};

	// Auto-play functionality
	useEffect(() => {
		if (!isAutoPlaying) return;

		const interval = setInterval(() => {
			nextSlide();
		}, 5000);

		return () => clearInterval(interval);
	}, [currentSlide, isAutoPlaying]);

	// Touch handling for mobile
	const [touchStart, setTouchStart] = useState(0);
	const [touchEnd, setTouchEnd] = useState(0);

	const handleTouchStart = (e) => {
		setTouchStart(e.targetTouches[0].clientX);
	};

	const handleTouchMove = (e) => {
		setTouchEnd(e.targetTouches[0].clientX);
	};

	const handleTouchEnd = () => {
		if (!touchStart || !touchEnd) return;

		const distance = touchStart - touchEnd;
		const isLeftSwipe = distance > 50;
		const isRightSwipe = distance < -50;

		if (isLeftSwipe) {
			nextSlide();
		} else if (isRightSwipe) {
			prevSlide();
		}
	};

	return (
		<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-10 sm:mb-12 lg:mb-16">
					<div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
						<Globe className="w-3 h-3 sm:w-4 sm:h-4" />
						<span>LATEST ARTICLES</span>
					</div>
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-3 sm:mb-4 leading-tight px-2">
						World Immigration News
						<span className="block text-blue-700">& Updates</span>
					</h2>
					<p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
						Stay informed with the latest immigration trends, policy changes,
						and expert insights from around the globe
					</p>
				</div>

				{/* News Cards Container */}
				<div className="relative">
					{/* Navigation Buttons - Hidden on mobile */}
					{!isMobile && (
						<>
							<button
								onClick={prevSlide}
								onMouseEnter={() => setIsAutoPlaying(false)}
								onMouseLeave={() => setIsAutoPlaying(true)}
								className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 lg:p-3 transition-all duration-300 hover:scale-110 group -translate-x-1/2">
								<ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-blue-900 group-hover:text-blue-700" />
							</button>

							<button
								onClick={nextSlide}
								onMouseEnter={() => setIsAutoPlaying(false)}
								onMouseLeave={() => setIsAutoPlaying(true)}
								className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 lg:p-3 transition-all duration-300 hover:scale-110 group translate-x-1/2">
								<ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-blue-900 group-hover:text-blue-700" />
							</button>
						</>
					)}

					{/* Cards Grid */}
					<div
						className={`grid gap-4 sm:gap-6 lg:gap-8 ${
							slidesToShow === 1
								? "grid-cols-1"
								: slidesToShow === 2
								? "grid-cols-1 sm:grid-cols-2"
								: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
						} ${isMobile ? "px-0" : "px-8 lg:px-12"}`}
						onTouchStart={handleTouchStart}
						onTouchMove={handleTouchMove}
						onTouchEnd={handleTouchEnd}>
						{getVisibleSlides().map((item, index) => (
							<div
								key={`${currentSlide}-${index}`}
								className="group bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-1 sm:hover:-translate-y-2"
								onMouseEnter={() => setIsAutoPlaying(false)}
								onMouseLeave={() => setIsAutoPlaying(true)}>
								{/* Image Container */}
								<div className="relative overflow-hidden">
									<img
										src={item.img}
										alt={item.title}
										className="w-full h-48 sm:h-52 lg:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

									{/* Category Badge */}
									<div className="absolute top-3 sm:top-4 left-3 sm:left-4">
										<span
											className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
												item.category
											)}`}>
											{item.category}
										</span>
									</div>

									{/* Read Time Badge */}
									<div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-gray-700 flex items-center gap-1">
										<Clock className="w-3 h-3" />
										<span className="hidden sm:inline">{item.readTime}</span>
										<span className="sm:hidden">
											{item.readTime.split(" ")[0]}m
										</span>
									</div>
								</div>

								{/* Content */}
								<div className="p-4 sm:p-5 lg:p-6">
									{/* Meta Information */}
									<div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
										<div className="flex items-center gap-1">
											<User className="w-3 h-3 sm:w-4 sm:h-4" />
											<span className="truncate">{item.author}</span>
										</div>
										<div className="flex items-center gap-1">
											<Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
											<span className="whitespace-nowrap">{item.date}</span>
										</div>
									</div>

									{/* Title */}
									<h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 sm:mb-3 leading-tight group-hover:text-blue-700 transition-colors duration-300 line-clamp-2">
										{item.title}
									</h3>

									{/* Description */}
									<p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
										{item.desc}
									</p>

									{/* Read More Link */}
									<div className="flex items-center justify-between">
										<a
											href="#"
											className="inline-flex items-center gap-1 sm:gap-2 text-blue-700 hover:text-blue-900 font-semibold text-sm transition-colors duration-300 group/link">
											<span>Read More</span>
											<ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Mobile Touch Indicator */}
				{isMobile && (
					<div className="text-center mt-4 text-xs text-gray-500">
						← Swipe to browse articles →
					</div>
				)}

				{/* Slide Indicators */}
				<div className="flex justify-center gap-1 sm:gap-2 mt-8 sm:mt-10 lg:mt-12">
					{newsData.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentSlide(index)}
							className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
								index === currentSlide
									? "bg-blue-700 w-6 sm:w-8"
									: "bg-blue-200 hover:bg-blue-300 w-2 sm:w-3"
							}`}
						/>
					))}
				</div>

				{/* View All Articles Button */}
				<div className="text-center mt-8 sm:mt-10 lg:mt-12">
					<button className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
						<span>View All Articles</span>
						<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
					</button>
				</div>
			</div>
		</section>
	);
}
