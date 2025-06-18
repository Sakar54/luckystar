import React from "react";
import { Link } from "react-router-dom";
import Menu from "./menu";
import MobileMenu from "./MobileMenu";
import logo from "../assets/logo/logo.png";

export default function Header({
	scroll,
	isSidebar,
	handleSidebar,
	handlePopup,
}) {
	return (
		<>
			<header
				className={`w-full z-50 top-0 left-0 transition-all duration-300 ${
					scroll
						? "fixed bg-white shadow-md py-5"
						: "absolute bg-transparent py-6"
				}`}>
				{/* Desktop Header */}
				<div className="hidden lg:flex items-center justify-between max-w-screen-2xl mx-auto w-full px-6 transition-all duration-300">
					{/* Logo */}
					<div className="flex-shrink-0">
						<Link to="/" className="flex items-center">
							<img src={logo} alt="Lucky Star" className="w-56 h-auto" />
						</Link>
					</div>

					{/* Rounded Menu Center */}
					<div
						className={`${
							scroll
								? "bg-transparent py-0 rounded-none shadow-none"
								: "bg-white py-4 lg:py-5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08),0_-8px_30px_rgba(0,0,0,0.08)]"
						} px-4 md:px-6 lg:px-10 xl:px-14 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-blue-900 font-semibold text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] transition-all duration-300 max-w-full`}>
						<Menu />
					</div>

					{/* Icons */}
					<div className="flex items-center space-x-4">
						<button onClick={handlePopup}>
							<div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center">
								<i className="fas fa-search text-blue-900 text-xl"></i>
							</div>
						</button>
						<Link to="/contact">
							<div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center">
								<i className="fas fa-phone text-blue-900 text-xl"></i>
							</div>
						</Link>
					</div>
				</div>

				{/* Mobile & Tablet Header */}
				<div className="lg:hidden flex justify-between items-center px-4 py-4 bg-white shadow-md">
					{/* Logo */}
					<Link to="/" className="flex items-center">
						<img src={logo} alt="Lucky Star" className="w-44 h-auto" />
					</Link>

					{/* Hamburger + Search */}
					<div className="flex items-center space-x-4">
						<button
							onClick={handleSidebar}
							className="p-2 text-blue-900 text-2xl focus:outline-none">
							<i className="fas fa-bars"></i>
						</button>
						<button onClick={handlePopup}>
							<i className="fas fa-search text-blue-900 text-xl"></i>
						</button>
					</div>
				</div>

				{/* Mobile Slide Menu */}
				<MobileMenu isSidebar={isSidebar} handleSidebar={handleSidebar} />
			</header>
		</>
	);
}
