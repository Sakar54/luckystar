import React from "react";
import Banner from "../Landing/banner";
import News from "../Landing/News";
import Services from "../Landing/Services";
import VisaSection from "../Landing/Visaservices";
import VisaTypes from "../Landing/VisaTypes";
import WhoWeAre from "../Landing/WhoWeAre";

const Home = () => {
	return (
		<div>
			<Banner />
			<Services />
			<News />

			<WhoWeAre />

			<Services />
			<VisaSection />
			<VisaTypes />
		</div>
	);
};

export default Home;
