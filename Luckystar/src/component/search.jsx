import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";

export default function SearchPopup({ isPopup, handlePopup }) {
	return (
		<div
			className={`fixed inset-0 z-50 transition-all duration-300 ${
				isPopup ? "opacity-100 visible" : "opacity-0 invisible"
			} bg-[#3b3b3b]/90 flex items-center justify-center`}>
			<div className="bg-white w-full max-w-xl md:rounded-xl rounded-none p-6 shadow-xl relative mx-4">
				{/* Close button */}
				<button
					onClick={handlePopup}
					className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-red-500 transition">
					<i className="fa fa-times" />
				</button>

				{/* Logo */}
				<div className="flex justify-center mb-6">
					<Link to="/">
						<img src={logo} alt="Logo" className="w-48 mx-auto" />
					</Link>
				</div>

				{/* Search form */}
				<form method="post" action="/" className="w-full">
					<div className="flex bg-white border border-gray-300 rounded-full overflow-hidden shadow-sm">
						<input
							type="search"
							name="search"
							className="flex-grow px-6 py-3 text-gray-800 placeholder-gray-400 focus:outline-none"
							placeholder="Search here"
							required
						/>
						<button
							type="submit"
							className="bg-[#1e2b7c] text-white px-6 flex items-center justify-center text-lg hover:bg-[#172263] transition rounded-r-full">
							<i className="fa fa-search" />
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
