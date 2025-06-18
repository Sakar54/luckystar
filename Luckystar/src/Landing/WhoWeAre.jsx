import React from "react";
import passportImg from "../assets/banner/banner-img-3.png";
// import teamImg from "../assets/about/team.jpg";
// import stampImg from "../assets/about/stamp.png";

export default function WhoWeAre() {
	return (
		<section className="py-20 px-4 md:px-10 lg:px-24 bg-white relative">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto items-start">
				{/* Left: Images */}
				<div className="relative space-y-6">
					<img
						src={passportImg}
						alt="Passport"
						className="rounded-lg shadow-lg w-full max-w-sm"
					/>
					<img
						src=""
						alt="Stamp"
						className="absolute top-20 left-32 w-32 opacity-80 z-10 rotate-6"
					/>
					<img
						sr=""
						alt="Team"
						className="rounded-lg shadow-lg w-full max-w-sm ml-16"
					/>
				</div>

				{/* Right: Text Content */}
				<div>
					<h4 className="text-blue-900 text-sm font-semibold uppercase tracking-wide mb-3">
						Who We Are?
					</h4>
					<h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
						Lucky Star Immigration Services LLC
					</h2>
					<p className="text-gray-600 mb-8 max-w-2xl">
						Lucky Star Immigration Services is more than an immigration
						consultancy—we are your gateway to new beginnings.
					</p>

					{/* Vision */}
					<div className="mb-6">
						<h5 className="text-lg font-bold text-blue-900 mb-2">Our Vision</h5>
						<ul className="list-disc list-inside text-gray-700">
							<li>
								To be a globally recognized and trusted leader in immigration
								consultancy in UAE, empowering individuals and families to
								achieve their dreams of a better future by simplifying the path
								to international opportunities.
							</li>
						</ul>
					</div>

					{/* Mission */}
					<div>
						<h5 className="text-lg font-bold text-blue-900 mb-2">
							Our Mission
						</h5>
						<ul className="list-disc list-inside text-gray-700 space-y-2">
							<li>
								Provide clear, reliable, and personalized immigration and visa
								solutions tailored to individual needs.
							</li>
							<li>
								Simplify complex immigration processes to ensure a seamless and
								stress-free experience for our clients.
							</li>
							<li>
								Uphold the highest standards of transparency, integrity, and
								professionalism in every interaction.
							</li>
							<li>
								Empower clients with accurate information and guidance to make
								informed decisions.
							</li>
							<li>
								Build strong, long-term relationships by delivering exceptional
								service and support.
							</li>
							<li>
								Continuously innovate and adapt to changing immigration policies
								for the most effective solutions.
							</li>
							<li>
								Foster opportunities for individuals and families to achieve
								their aspirations and build a better future.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
