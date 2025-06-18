import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";

export default function Footer() {
	const currentYear = 2025;

	return (
		<footer className="bg-[#072c6b] text-white px-6 pt-12 pb-6">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{/* Column 1 - Logo & Description */}
				<div>
					<div className="bg-white p-3 rounded-2xl inline-block mb-4">
						<img src={logo} alt="Lucky Star Logo" className="w-40" />
					</div>
					<p className="text-sm text-gray-300 leading-relaxed">
						We are dedicated to turning your immigration aspirations into
						reality. Seamless, stress-free, and guided by expertise.
					</p>
				</div>

				{/* Column 2 - Quick Links */}
				<div>
					<h3 className="text-lg font-semibold mb-3 border-b border-gray-400 w-fit pb-1">
						Quick Links
					</h3>
					<ul className="space-y-2 text-sm">
						<li>
							<Link to="/" className="hover:underline">
								Home
							</Link>
						</li>
						<li>
							<Link to="/skilled" className="hover:underline">
								Skilled
							</Link>
						</li>
						<li>
							<Link to="/work-permit" className="hover:underline">
								Work Permit
							</Link>
						</li>
						<li>
							<Link to="/investment" className="hover:underline">
								Investment
							</Link>
						</li>
						<li>
							<Link to="/visa" className="hover:underline">
								Visa
							</Link>
						</li>
						<li>
							<Link to="/about" className="hover:underline">
								About
							</Link>
						</li>
						<li>
							<Link to="/contact" className="hover:underline">
								Contact
							</Link>
						</li>
					</ul>
				</div>

				{/* Column 3 - Resources */}
				<div>
					<h3 className="text-lg font-semibold mb-3 border-b border-gray-400 w-fit pb-1">
						Resources
					</h3>
					<ul className="space-y-2 text-sm">
						<li>
							<Link to="/privacy-policy" className="hover:underline">
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link to="/terms" className="hover:underline">
								Terms & Conditions
							</Link>
						</li>
						<li>
							<Link to="/faq" className="hover:underline">
								FAQs
							</Link>
						</li>
						<li>
							<Link to="/blog" className="hover:underline">
								Blog
							</Link>
						</li>
					</ul>
				</div>

				{/* Column 4 - Newsletter */}
				<div>
					<h3 className="text-lg font-semibold mb-3 border-b border-gray-400 w-fit pb-1">
						Subscribe
					</h3>
					<p className="text-sm text-gray-300 mb-4">
						Get the latest immigration updates.
					</p>
					<form
						onSubmit={(e) => e.preventDefault()}
						className="flex flex-col sm:flex-row bg-[#123c87] rounded-full overflow-hidden">
						<input
							type="email"
							placeholder="Enter your email"
							className="bg-transparent text-white placeholder-gray-300 px-4 py-2 w-full focus:outline-none"
						/>
						<button className="bg-gray-200 text-[#072c6b] font-semibold px-5 py-2 hover:bg-white transition">
							Subscribe
						</button>
					</form>
					{/* Social icons */}
					<div className="flex space-x-4 mt-5 text-xl">
						<a href="#" aria-label="Facebook" className="hover:text-gray-300">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="#" aria-label="Instagram" className="hover:text-gray-300">
							<i className="fab fa-instagram"></i>
						</a>
						<a href="#" aria-label="Twitter" className="hover:text-gray-300">
							<i className="fab fa-twitter"></i>
						</a>
						<a href="#" aria-label="YouTube" className="hover:text-gray-300">
							<i className="fab fa-youtube"></i>
						</a>
					</div>
				</div>
			</div>

			{/* Footer Bottom */}
			<div className="mt-10 border-t border-gray-500 pt-4 text-center text-sm text-gray-300">
				Copyright © Lucky Star Immigration Services LLC — {currentYear}
			</div>
		</footer>
	);
}
