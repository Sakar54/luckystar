import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";

export default function MobileMenu({ isSidebar, handleSidebar }) {
	return (
		<>
			{/* Overlay */}
			<div
				className={`fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity ${
					isSidebar ? "block" : "hidden"
				}`}
				onClick={handleSidebar}
			/>

			{/* Slide-in Menu */}
			<div
				className={`fixed top-0 right-0 w-80 h-full bg-black text-white z-50 transform transition-transform duration-300 ease-in-out ${
					isSidebar ? "translate-x-0" : "translate-x-full"
				}`}>
				{/* Close Button + Logo */}
				<div className="flex justify-between items-center px-6 pt-6">
					<Link to="/" onClick={handleSidebar}>
						<img src={logo} alt="Lucky Star" className="w-44" />
					</Link>
					<button
						onClick={handleSidebar}
						className="text-2xl text-white focus:outline-none">
						&times;
					</button>
				</div>

				{/* Navigation Menu */}
				<nav className="px-6 mt-8">
					<ul className="space-y-4  divide-y divide-white/10">
						<li>
							<Link
								to="/"
								onClick={handleSidebar}
								className="block uppercase text-lg font-semibold hover:text-yellow-400 transition">
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/about"
								onClick={handleSidebar}
								className="block uppercase text-lg font-semibold hover:text-yellow-400 transition">
								About
							</Link>
						</li>
						<li>
							<Link
								to="/contact"
								onClick={handleSidebar}
								className="block uppercase text-lg font-semibold hover:text-yellow-400 transition">
								Contact
							</Link>
						</li>
					</ul>
				</nav>

				{/* Contact Info */}
				<div className="px-6 mt-10">
					<h4 className="text-lg font-bold mb-2">Contact Info</h4>
					<ul className="space-y-1 text-sm text-gray-300">
						<li>Chicago 12, Melbourne City, USA</li>
						<li>
							<a href="tel:+8801682648101">+88 01682648101</a>
						</li>
						<li>
							<a href="mailto:info@example.com">info@example.com</a>
						</li>
					</ul>
				</div>

				{/* Social Icons */}
				<div className="px-6 mt-6">
					<ul className="flex space-x-4 text-xl text-white">
						<li>
							<Link to="/">
								<i className="fab fa-twitter"></i>
							</Link>
						</li>
						<li>
							<Link to="/">
								<i className="fab fa-facebook-square"></i>
							</Link>
						</li>
						<li>
							<Link to="/">
								<i className="fab fa-pinterest-p"></i>
							</Link>
						</li>
						<li>
							<Link to="/">
								<i className="fab fa-instagram"></i>
							</Link>
						</li>
						<li>
							<Link to="/">
								<i className="fab fa-youtube"></i>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
