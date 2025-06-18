import {
	BadgeCheck,
	School,
	Plane,
	Landmark,
	Languages,
	FileBadge,
} from "lucide-react";
import image1 from "../assets/immgrant.jpg";
export default function AboutSection() {
	const infoCards = [
		{
			icon: <Plane size={36} />,
			title: "Visa",
			desc: "Expert support for work, study, and tourist visas globally.",
		},
		{
			icon: <FileBadge size={36} />,
			title: "Passport",
			desc: "Help with new, renewal, and lost passport documentation.",
		},
		{
			icon: <Landmark size={36} />,
			title: "Immigration",
			desc: "Assistance with PR, green card, and relocation processing.",
		},
		{
			icon: <Languages size={36} />,
			title: "Translation",
			desc: "Certified translations for official immigration documents.",
		},
	];

	return (
		<section className="relative bg-white py-20 px-4 sm:px-6 lg:px-16 overflow-hidden">
			<div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-100 rounded-full opacity-40 blur-3xl z-0 pointer-events-none"></div>

			{/* Background Decoration */}
			<div className="absolute inset-0 z-0 pointer-events-none">
				<svg
					viewBox="0 0 1440 600"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="w-full h-full absolute top-0 left-0 opacity-10">
					<circle cx="1100" cy="300" r="300" fill="#0a2a5c" />
					<circle cx="300" cy="100" r="180" fill="#0a2a5c" />
				</svg>
				<img
					src="https://www.transparenttextures.com/patterns/world-map.png"
					alt="World Map"
					className="w-full h-full object-cover opacity-10"
				/>
			</div>

			{/* Main Content */}
			<div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
				{/* Left: Image */}
				<div className="flex-1 flex justify-center">
					<img
						src={image1}
						className="w-full max-w-md rounded-2xl shadow-lg border-4 border-blue-100 object-cover"
					/>
				</div>

				{/* Right: Content */}
				<div className="flex-1 flex flex-col justify-center w-full max-w-2xl mx-auto">
					{/* Heading */}
					<p className="text-xs font-semibold text-blue-900 uppercase tracking-widest mb-2 text-center lg:text-left">
						Who We Are?
					</p>
					<div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
						<span className="flex-1 border-t border-blue-200 max-w-[60px]" />
						<span className="text-blue-900 text-base">★</span>
						<span className="flex-1 border-t border-blue-200 max-w-[60px]" />
					</div>

					<h2 className="text-3xl sm:text-4xl font-bold text-blue-900 leading-tight mb-4 text-center lg:text-left">
						Leading firm for immigration services.
					</h2>

					<p className="text-gray-600 text-base leading-relaxed mb-6 text-center lg:text-left">
						We specialize in overseas education, visa consultation, work
						permits, and relocation support. With trusted global partnerships,
						we guide you through every legal and procedural step.
					</p>

					{/* Features List */}
					<ul className="space-y-4 mb-8">
						<li className="flex items-center gap-3 justify-center lg:justify-start">
							<BadgeCheck className="text-blue-900 w-6 h-6" />
							<span className="text-blue-900 font-medium">
								Overseas education and study visa consultants.
							</span>
						</li>
						<li className="flex items-center gap-3 justify-center lg:justify-start">
							<School className="text-blue-900 w-6 h-6" />
							<span className="text-blue-900 font-medium">
								Top-ranked universities guarantee admissions.
							</span>
						</li>
					</ul>

					{/* CTA Button */}
					<div className="flex justify-center lg:justify-start mb-10">
						<a
							href="#"
							className="inline-block px-7 py-3 rounded bg-blue-900 text-white font-semibold shadow hover:bg-blue-800 transition focus:outline-none focus:ring-2 focus:ring-blue-400">
							More Details →
						</a>
					</div>
				</div>
			</div>

			{/* Info Cards - Responsive Box */}
			<div className="w-full max-w-7xl mx-auto mt-12">
				<div className="bg-blue-900 p-6 sm:p-10 rounded-2xl shadow-xl w-full">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{infoCards.map((card, i) => (
							<div
								key={i}
								className="flex flex-col items-center text-center text-white px-2 py-4">
								<div className="mb-3">{card.icon}</div>
								<h4 className="font-bold text-lg mb-2">{card.title}</h4>
								<p className="text-sm opacity-90 leading-relaxed">
									{card.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
