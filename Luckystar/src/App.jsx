import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./component/header";
import SearchPopup from "./component/search";
import Footer from "./component/footer";
// Inside your App.jsx or main layout file
import "swiper/css";
import "swiper/css/pagination";
// import CountryOfftering from "./Aboutus/CountryOfftering";
// import AboutSection from "./Aboutus/Aboutsection";
import Aboutus from "./PAGES/Aboutus";
import Home from "./PAGES/Home";
import ContactPage from "./ContactUs/ContactUs";

// import Banner from "./Landing/banner";
// import WhoWeAre from "./Landing/WhoWeAre";
// import VisaTypes from "./Landing/VisaTypes";
// import News from "./Landing/News";
// import Services from "./Landing/Services";
// import ContactPage from "./ContactUs/ContactUs";
// import CoachingSection from "./coachingsection/CoachingSection";
// import VisaCategories from "./Visa/Visitcategory";
// import TeamSection from "./Aboutus/TeamSection";
// import Chooseus from "./Aboutus/Chooseus";
// import QuickOffer from "./Aboutus/QuickOffer";
// import TestimonialSection from "./Testimonial/Testimonial";

const App = () => {
	const [scroll, setScroll] = useState(false);
	const [isSidebar, setIsSidebar] = useState(false);
	const [isPopup, setIsPopup] = useState(false);

	const handleSidebar = () => setIsSidebar((prev) => !prev);
	const handlePopup = () => setIsPopup((prev) => !prev);

	useEffect(() => {
		const handleScroll = () => setScroll(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<Header
				scroll={scroll}
				isSidebar={isSidebar}
				handleSidebar={handleSidebar}
				handlePopup={handlePopup}
			/>

			<SearchPopup isPopup={isPopup} handlePopup={handlePopup} />

			<main className="min-h-[80vh] bg-white pt-20 px-4">
				<Routes>
					<Route path="/" element={<Home />} /> {/* Optional */}
					<Route path="/about" element={<Aboutus />} />
					<Route path="/ContactPage" element={<ContactPage />} />
				</Routes>
			</main>

			<Footer />
		</>
	);
};

export default App;
