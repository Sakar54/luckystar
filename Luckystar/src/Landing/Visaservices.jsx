import VisaSlider from "../slider/Visaslider";

import React from "react";

const VisaSection = () => {
	return (
		<section className="bg-[#f9f9f9] py-20 px-6">
			<div className="max-w-7xl mx-auto text-center mb-10">
				<span className="text-blue-600 font-semibold uppercase">
					Visa Categories
				</span>
				<h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2">
					Assisting you in fulfilling your eligibility <br />
					for immigrant registration
				</h2>
			</div>
			<div className="max-w-7xl mx-auto">
				<VisaSlider />
			</div>
		</section>
	);
};

export default VisaSection;
