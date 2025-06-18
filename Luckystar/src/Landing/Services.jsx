import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import "./Services.css";

const visaData = [
	{
		country: "Canada",
		image: "/assets/maps/canada.svg",
		visas: ["FSWP", "FSTP", "CEC", "PNP", "Express Entry", "Invest"],
	},
	{
		country: "Australia",
		image: "/assets/maps/australia.svg",
		visas: [
			"Skilled Independent - 189",
			"Work Regional - 491",
			"Skilled Regional - 494",
			"Skilled Regional - 887",
			"Skilled Recognition - 476",
			"Global Talent - 858",
			"Visit Visa - 600",
		],
	},
	{
		country: "Germany",
		image: "/assets/maps/germany.svg",
		visas: ["Job Seeker Visa", "Blue Card", "Opportunity Card"],
	},
	{
		country: "USA",
		image: "/assets/maps/usa.svg",
		visas: ["B1/B2 Visa", "H1B Visa", "Dependent Visa", "Visit Visa"],
	},
	{
		country: "UK",
		image: "/assets/maps/uk.svg",
		visas: [
			"Work Visa",
			"Study Visa",
			"Business Visa",
			"Innovator Visa",
			"HPI Visa",
			"Visit Visa",
		],
	},
	{
		country: "UAE",
		image: "/assets/maps/uae.svg",
		visas: ["Freelance Visa", "Investor Visa", "Golden Visa", "Green Visa"],
	},
];

export default function Services() {
	const [flipped, setFlipped] = useState(null);

	const handleMouseEnter = (index) => {
		setFlipped(index);
	};

	const handleMouseLeave = () => {
		// Optional: if you want it to stay flipped, skip this line
		setFlipped(null);
	};

	return (
		<section className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-6">
				{/* Heading */}
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-gray-900">Popular Visas</h2>
					<p className="text-lg text-gray-600 mt-2 max-w-xl mx-auto">
						Y-Axis offers expert guidance and support that increases your
						chances of visa success.
					</p>
				</div>

				{/* Visa Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{visaData.map((item, index) => (
						<div
							key={index}
							className={`visa-card-wrapper ${
								flipped === index ? "flipped" : ""
							}`}
							onMouseEnter={() => handleMouseEnter(index)}
							onMouseLeave={handleMouseLeave}>
							<div className="visa-card">
								{/* Front */}
								<div className="card-front">
									<img
										src={item.image}
										alt={item.country}
										className="map-icon"
									/>
									<h3 className="country-name">{item.country}</h3>
								</div>

								{/* Back */}
								<div className="card-back">
									<h4 className="text-base font-semibold mb-3">
										{item.country} Visas
									</h4>
									<ul className="space-y-2 text-sm text-gray-700">
										{item.visas.map((visa, i) => (
											<li key={i} className="flex items-center gap-2">
												<FaAngleRight className="text-blue-500 text-xs" />
												<span>{visa}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
