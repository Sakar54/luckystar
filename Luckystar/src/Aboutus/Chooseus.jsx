import { Users, Globe, UserCheck, Wallet, ArrowRight } from "lucide-react";

const features = [
	{
		icon: (
			<Users size={56} strokeWidth={1.5} className="text-blue-800 mx-auto" />
		),
		title: "Direct Interviews",
		desc: "We connect you with potential employers for direct interviews, saving your time and boosting your chances.",
	},
	{
		icon: (
			<Globe size={56} strokeWidth={1.5} className="text-blue-800 mx-auto" />
		),
		title: "Faster Processing",
		desc: "Our streamlined process ensures your visa applications are handled swiftly and accurately.",
	},
	{
		icon: (
			<UserCheck
				size={56}
				strokeWidth={1.5}
				className="text-blue-800 mx-auto"
			/>
		),
		title: "Visa Assistance",
		desc: "From documentation to embassy appointments, we provide full visa support at every stage.",
	},
	{
		icon: (
			<Wallet size={56} strokeWidth={1.5} className="text-blue-800 mx-auto" />
		),
		title: "Cost-Effective",
		desc: "We offer premium services at competitive rates, ensuring you get maximum value for your investment.",
	},
];

export default function Chooseus() {
	return (
		<section className="relative py-20 bg-white overflow-hidden">
			{/* Background blob */}

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-14">
					<p className="text-blue-800 font-semibold uppercase tracking-wide text-sm sm:text-base">
						Why Choose Us
					</p>
					<div className="mt-2 flex justify-center">
						<span className="text-blue-800 text-xl sm:text-2xl">----★----</span>
					</div>
					<h2 className="mt-4 text-3xl sm:text-4xl font-bold text-blue-900 leading-tight">
						Offer custom-made services that <br className="hidden sm:block" />
						our customer needs.
					</h2>
				</div>

				{/* Feature Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-100 rounded-full opacity-40 blur-3xl z-0 pointer-events-none"></div>

					{features.map((feature, i) => (
						<div
							key={i}
							className="group flex flex-col items-start bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 h-full">
							<div>{feature.icon}</div>
							<h3 className="mt-8 text-xl font-bold text-blue-900">
								{feature.title}
							</h3>
							<p className="mt-4 text-gray-500 text-sm leading-relaxed mb-8">
								{feature.desc}
							</p>
							<div className="mt-auto flex items-center gap-1 text-blue-900 text-sm font-medium transition-all duration-300 transform group-hover:translate-x-1">
								<a
									href="#"
									className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									Read more
								</a>
								<ArrowRight size={20} />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
