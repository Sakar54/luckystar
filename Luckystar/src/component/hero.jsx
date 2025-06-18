// src/components/Hero.jsx
import React from "react";
import heroImage from "../assets/banner/banner-img-3.png"; // Optional main image

export default function Hero() {
	return (
		<div className="relative bg-white overflow-hidden min-h-screen">
			{/* 🔵 SVG Background Blob */}
			<div className="absolute top-0 right-0 z-0 pointer-events-none">
				<svg
					viewBox="0 0 600 600"
					className="w-[1000px] h-[1000px] opacity-10"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M600 0H0v600c330-50 450-250 600-600z" fill="#edf1f8" />
				</svg>
			</div>

			{/* 🔵 Hero Content */}
			<div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-8">
				<div className="max-w-xl">
					<h2 className="text-blue-900 font-bold text-4xl mb-4">
						Your bridge to new beginning
					</h2>
					<p className="text-gray-700 mb-6 leading-relaxed">
						Embarking on an immigration journey is a significant step toward
						building a brighter future. We're here to help you every step of the
						way.
					</p>
					<button className="bg-blue-900 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition">
						More Details →
					</button>
				</div>

				{/* Optional Hero Image */}
				<img src={heroImage} alt="Traveller" className="w-[400px] h-auto" />
			</div>
		</div>
	);
}
