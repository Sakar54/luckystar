"use client";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import traveler from "../assets/banner/banner-img-3.png";
import bgBlur from "../assets/banner/banner-img-1.jpg"; // background blur image

export default function Banner() {
	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<section className="relative bg-white overflow-hidden py-20 px-4 md:px-10 lg:px-24">
				{/* 🔵 Background Image (Right Side) */}
				<div className="absolute inset-0 flex justify-end">
					<img
						src={bgBlur}
						alt="Blur background"
						className="w-1/2 h-full object-cover opacity-50 pointer-events-none"
					/>
				</div>

				{/* 🔵 Content Layout */}
				<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center max-w-7xl mx-auto gap-10">
					{/* 🔹 LEFT: Text Content */}
					<div className="text-left space-y-6">
						<h4 className="text-sm font-semibold text-blue-900 uppercase border-l-4 border-blue-900 pl-3">
							THE LEADING IMMIGRATION SERVICES
						</h4>
						<h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
							Your bridge to new beginning
						</h1>
						<p className="text-gray-600 text-lg max-w-xl">
							Embarking on an immigration journey is a significant step toward
							building a brighter future, and at Lucky Star Immigration
							Services, we are here to make that journey seamless and
							stress-free. Welcome to a trusted partner dedicated to turning
							your aspirations into reality.
						</p>

						<a
							href="/about"
							className="inline-block bg-blue-900 text-white text-base px-6 py-3 rounded shadow hover:bg-blue-800 transition">
							More Details →
						</a>
					</div>

					{/* 🔹 RIGHT: Foreground Traveler Image */}
					<div className="text-center relative">
						<img
							src={traveler}
							alt="Traveler"
							className="w-[350px] md:w-[420px] lg:w-[450px] mx-auto z-10 relative"
						/>
					</div>
				</div>

				{/* 🔵 Call Box */}
				<div className="absolute bottom-10 right-10 bg-[#012d69] text-white px-6 py-4 rounded-lg shadow-md flex items-center gap-4 max-w-sm z-20">
					<div className="text-3xl">
						<i className="fas fa-phone-alt"></i>
					</div>
					<div>
						<p className="text-sm">Any Questions? Call us</p>
						<h3 className="text-lg font-bold">(+971) 505769866</h3>
					</div>
				</div>
			</section>

			{/* Optional Video Modal (future usage) */}
			<ModalVideo
				channel="youtube"
				autoplay
				isOpen={isOpen}
				videoId="nfP5N9Yc72A"
				onClose={() => setOpen(false)}
			/>
		</>
	);
}
