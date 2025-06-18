import { ArrowRight } from "lucide-react";

const visas = [
	{
		flag: "🇨🇳",
		image: "https://via.placeholder.com/333x250?text=China+Visa",
		name: "China Visa",
		location: "Avenue, Jersey",
	},
	{
		flag: "🇬🇧",
		image: "https://via.placeholder.com/333x250?text=UK+Visa",
		name: "United Kingdom Visa",
		location: "Asheville",
	},
	{
		flag: "🇧🇷",
		image: "https://via.placeholder.com/333x250?text=Brazil+Visa",
		name: "Brazil Visa",
		location: "Amsterdam",
	},
	{
		flag: "🇦🇺",
		image: "https://via.placeholder.com/333x250?text=Australia+Visa",
		name: "Australia Visa",
		location: "Queensland",
	},
];

export default function QuickOffer() {
	return (
		<section className="relative overflow-hidden">
			{/* Blue background with padding */}
			<div className="bg-blue-900 pt-16 pb-32 relative z-10">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<p className="text-sm font-medium text-white uppercase tracking-wider mb-3">
						Countries We Offer
					</p>
					<h2 className="text-4xl sm:text-5xl font-bold text-white">
						Apply For Quick Visa
					</h2>
				</div>
			</div>
			{/* Cards overlap into white */}
			<div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 pb-20">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{visas.map((visa, index) => (
						<div
							key={index}
							className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full"
						>
							{/* Flag + Image */}
							<div className="relative w-full">
								<div className="absolute -top-5 left-5 z-10">
									<span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow border border-gray-200 text-2xl">
										{visa.flag}
									</span>
								</div>
								<div className="aspect-w-16 aspect-h-10 w-full bg-gray-100">
									<img
										src={visa.image}
										alt={visa.name}
										className="object-cover w-full h-full rounded-t-2xl"
									/>
								</div>
							</div>
							{/* Visa Text Content */}
							<div className="flex-1 flex flex-col px-6 py-6">
								<h3 className="text-lg font-bold text-blue-900 mb-1 truncate">
									{visa.name}
								</h3>
								<p className="text-sm text-gray-500 truncate mb-4">
									{visa.location}
								</p>
								<a
									href="#"
									className="inline-flex items-center text-blue-700 font-medium hover:underline text-base transition-colors duration-200 mb-2"
									aria-label={`Read more about ${visa.name}`}
								>
									Read more <ArrowRight className="ml-1 w-4 h-4" />
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
