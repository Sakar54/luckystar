export default function CountryOfftering({ title, subtitle, tabs }) {
	const [activeTab, setActiveTab] = useState(tabs[0].key);
	const currentTab = tabs.find((tab) => tab.key === activeTab);

	return (
		<section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-12">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-10">
					<div className="flex justify-center items-center gap-2 mb-4">
						<div className="w-12 h-[1px] bg-blue-200" />
						<span className="text-blue-800 font-semibold uppercase text-sm tracking-wider">
							{title}
						</span>
						<div className="w-12 h-[1px] bg-blue-200" />
						<span className="text-blue-800 text-lg">★</span>
						<div className="w-12 h-[1px] bg-blue-200" />
					</div>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 max-w-3xl mx-auto">
						{subtitle}
					</h2>
				</div>

				{/* Tabs */}
				<div className="flex flex-wrap justify-center gap-6 mb-8 border-b border-blue-100">
					{tabs.map((tab) => (
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
								className={`absolute bottom-0 left-0 h-[2px] bg-blue-700 transition-all duration-300 ease-in-out group-hover:w-full ${
									activeTab === tab.key ? "w-full bg-blue-800" : "w-0"
								}`}
							/>
						</button>
					))}
				</div>

				{/* Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{currentTab.countries.map((country, i) => (
						<div
							key={i}
							className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center p-8 text-center min-h-[340px]">
							<div className="mb-4">
								<span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow border border-gray-200 overflow-hidden">
									{country.image ? (
										<img
											src={country.image}
											alt={`${country.name} flag`}
											className="w-16 h-16 object-contain"
										/>
									) : (
										<span className="text-4xl">🌍</span>
									)}
								</span>
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
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
