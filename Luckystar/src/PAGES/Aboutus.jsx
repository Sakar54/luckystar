import React from "react";
import AboutSection from "../Aboutus/Aboutsection";
import CountryOfftering from "../Aboutus/CountryOfftering";
import QuickOffer from "../Aboutus/QuickOffer";
import Chooseus from "../Aboutus/Chooseus";
import TeamSection from "../Aboutus/TeamSection";
import AboutHeader from "../Aboutus/AboutHeader";

const Aboutus = () => {
	return (
		<>
			<AboutHeader />
			<AboutSection />
			<CountryOfftering />
			<QuickOffer />
			<Chooseus />
			<TeamSection />
		</>
	);
};

export default Aboutus;
