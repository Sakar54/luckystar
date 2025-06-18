import { useState } from "react";
import { BookOpen, BadgeCheck, Briefcase, Plane } from "lucide-react";
import { Link } from "react-router-dom";

const TABS = [
	{
		key: "education",
		label: "Education",
		icon: <BookOpen className="w-6 h-6 mr-2" />,
		countries: [
			{
				image: "https://flagcdn.com/w320/gb.png",
				name: "United Kingdom",
				desc: "Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget",
				types: ["Working Visa", "Job Visa"],
			},
			{
				image: "https://flagcdn.com/w320/bs.png",
				name: "Bahamas",
				desc: "Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget",
				types: ["Education Visa", "Only System"],
			},
			{
				image: "https://flagcdn.com/w320/ca.png",
				name: "Canada",
				desc: "Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget",
				types: ["Resident Visa", "Job Visa"],
			},
			{
				image: "https://flagcdn.com/w320/br.png",
				name: "Brazil",
				desc: "Vivamus ac ultricies ex. Donec lacinia lacus libero, sed feugiat diam laoreet eget",
				types: ["Student Visa & Admission", "Visitor Visa"],
			},
		],
	},
	{
		key: "immigration",
		label: "Immigration",
		icon: <BadgeCheck className="w-6 h-6 mr-2" />,
		countries: [
			{
				image: "https://flagcdn.com/w320/us.png",
				name: "United States",
				desc: "Immigration process for skilled workers and families.",
				types: ["Green Card", "Work Permit"],
			},
			{
				image: "https://flagcdn.com/w320/au.png",
				name: "Australia",
				desc: "Immigration options for professionals and students.",
				types: ["PR Visa", "Skilled Visa"],
			},
			{
				image: "https://flagcdn.com/w320/nz.png",
				name: "New Zealand",
				desc: "Pathways for permanent residency and work.",
				types: ["Resident Visa", "Work Visa"],
			},
			{
				image: "https://flagcdn.com/w320/ca.png",
				name: "Canada",
				desc: "Express Entry and family sponsorship programs.",
				types: ["Express Entry", "Family Visa"],
			},
		],
	},
	{
		key: "business",
		label: "Business",
		icon: <Briefcase className="w-6 h-6 mr-2" />,
		countries: [
			{
				image: "https://flagcdn.com/w320/sg.png",
				name: "Singapore",
				desc: "Business-friendly environment for entrepreneurs.",
				types: ["Entrepreneur Pass", "Employment Pass"],
			},
			{
				image: "https://flagcdn.com/w320/de.png",
				name: "Germany",
				desc: "Opportunities for startups and investors.",
				types: ["Business Visa", "Investor Visa"],
			},
			{
				image: "https://flagcdn.com/w320/ae.png",
				name: "UAE",
				desc: "Business setup in free zones and mainland.",
				types: ["Investor Visa", "Business Setup"],
			},
			{
				image: "https://flagcdn.com/w320/hk.png",
				name: "Hong Kong",
				desc: "Gateway to Asian markets for business expansion.",
				types: ["Investment Visa", "Business Visa"],
			},
		],
	},
	{
		key: "tourist",
		label: "Tourist",
		icon: <Plane className="w-6 h-6 mr-2" />,
		countries: [
			{
				image: "https://flagcdn.com/w320/fr.png",
				name: "France",
				desc: "Explore the beauty and culture of France.",
				types: ["Tourist Visa", "Schengen Visa"],
			},
			{
				image: "https://flagcdn.com/w320/jp.png",
				name: "Japan",
				desc: "Experience the tradition and technology of Japan.",
				types: ["Tourist Visa", "Visitor Visa"],
			},
			{
				image: "https://flagcdn.com/w320/th.png",
				name: "Thailand",
				desc: "Enjoy the beaches and cuisine of Thailand.",
				types: ["Tourist Visa", "E-Visa"],
			},
			{
				image: "https://flagcdn.com/w320/es.png",
				name: "Spain",
				desc: "Discover the art and history of Spain.",
				types: ["Tourist Visa", "Schengen Visa"],
			},
		],
	},
];

export default function CountryOfftering() {
	const [activeTab, setActiveTab] = useState(TABS[0].key);

	const currentTab = TABS.find((tab) => tab.key === activeTab);

	return (
		<section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-12">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-10">
					<div className="text-blue-800 font-semibold uppercase tracking-wider mb-2">
						Countries We Offer
					</div>
					<div className="flex items-center justify-center gap-2 mb-4 w-full max-w-xs mx-auto">
						<span className="flex-1 border-t border-blue-200" />
						<span className="text-blue-800 text-lg mx-2">★</span>
						<span className="flex-1 border-t border-blue-200" />
					</div>
					<h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2 leading-tight">
						Immigration Officials approvals for foreign
						<br className="hidden sm:block" />
						citizens can vary by country.
					</h2>
				</div>

				{/* Tabs */}
				<div className="flex flex-wrap justify-center gap-6 mb-8 border-b border-blue-100">
					{TABS.map((tab) => (
						<button
							key={tab.key}
							onClick={() => setActiveTab(tab.key)}
							className={`group relative flex items-center px-4 py-2 text-base font-semibold transition-colors duration-200 border-b-2 -mb-px focus:outline-none ${
								activeTab === tab.key
									? "text-blue-800 border-blue-800"
									: "text-gray-500 border-transparent hover:text-blue-700"
							}`}>
							{tab.icon}
							{tab.label}
							<span
								className={`absolute bottom-0 left-0 w-0 h-[2px] bg-blue-700 transition-all duration-300 ease-in-out group-hover:w-full ${
									activeTab === tab.key ? "w-full bg-blue-800" : ""
								}`}
							/>
						</button>
					))}
				</div>

				{/* Visa Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{currentTab.countries.map((country, i) => (
						<Link
							key={i}
							to={`/country-details/${encodeURIComponent(
								country.name.toLowerCase().replace(/\s+/g, "-")
							)}`}
							className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 flex flex-col items-center p-8 text-center min-h-[360px] focus:outline-none focus:ring-2 focus:ring-blue-400"
							aria-label={`View details for ${country.name}`}>
							<div className="mb-4">
								<img
									src={country.image}
									alt={country.name}
									className="w-20 h-20 rounded-full object-cover border border-gray-300 shadow"
								/>
							</div>
							<h3 className="text-lg font-bold text-blue-900 mb-1">
								{country.name}
							</h3>
							<p className="text-sm text-gray-500 mb-4 min-h-[48px]">
								{country.desc}
							</p>
							<div className="text-xs text-gray-400 font-semibold mb-1">
								Visa Type:
							</div>
							<div className="text-sm text-blue-800 font-medium">
								{country.types.join(", ")}
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
