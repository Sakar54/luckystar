import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const VisaSlider = () => {
	return (
		<Swiper
			modules={[Autoplay, Pagination, Navigation]}
			spaceBetween={30}
			slidesPerView={3}
			autoplay={{ delay: 2500 }}
			pagination={{ clickable: true }}
			loop={true}
			breakpoints={{
				320: { slidesPerView: 1 },
				768: { slidesPerView: 2 },
				1024: { slidesPerView: 3 },
			}}>
			{[...Array(6)].map((_, i) => (
				<SwiperSlide key={i}>
					<div className="border shadow-md p-4 rounded-lg bg-white hover:shadow-xl transition">
						<img
							src={`/assets/images/resource/visa-${4 + (i % 4)}.jpg`}
							alt="Visa Type"
							className="w-full h-40 object-cover rounded-md mb-4"
						/>
						<h3 className="text-lg font-semibold text-blue-900 mb-2">
							{["Student", "Residence", "Business", "Tourist"][i % 4]} Visa
						</h3>
						<p className="text-gray-600 text-sm mb-2">
							Helping you understand the process for applying for a{" "}
							{["Student", "Residence", "Business", "Tourist"][i % 4]} visa with
							ease and clarity.
						</p>
						<a
							href="#"
							className="text-blue-700 font-medium hover:underline text-sm">
							Read More →
						</a>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default VisaSlider;
