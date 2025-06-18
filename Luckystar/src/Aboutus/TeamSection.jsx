import React, { useState } from "react";
import { Share2, Mail, Link as LinkIcon, User, Users2 } from "lucide-react";

const teamMembers = [
	{
		id: 1,
		name: "Roman Frederick",
		role: "Regional Manager",
		image:
			"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
		bio: "Leading our regional operations with 8+ years of strategic management experience.",
	},
	{
		id: 2,
		name: "Jane Cooper",
		role: "Medical Assistant",
		image:
			"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
		bio: "Dedicated healthcare professional committed to exceptional patient care.",
	},
	{
		id: 3,
		name: "Esther Howard",
		role: "President of Sales",
		image:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
		bio: "Driving revenue growth through innovative sales strategies and team leadership.",
	},
	{
		id: 4,
		name: "Jenny Wilson",
		role: "Marketing Coordinator",
		image:
			"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
		bio: "Creative marketing specialist focused on brand growth and digital engagement.",
	},
];

const socialIcons = [
	{
		name: "Facebook",
		url: "#",
		svg: (
			<svg width="28" height="28" fill="none" viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="12" fill="#1877F2" />
				<path
					fill="#fff"
					d="M15.12 8.5h-1.24V7.62c0-.3.2-.37.34-.37h.86V5.13L13.1 5.1c-1.6 0-2.1 1.2-2.1 2.02V8.5H9.5v2h1.5v5h2.1v-5h1.4l.22-2Z"
				/>
			</svg>
		),
	},
	{
		name: "Instagram",
		url: "#",
		svg: (
			<svg width="28" height="28" fill="none" viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="12" fill="#E1306C" />
				<path
					fill="#fff"
					d="M12 8.5A3.5 3.5 0 1 0 12 15.5a3.5 3.5 0 0 0 0-7Zm0 5.7a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4Zm4.1-5.8a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0ZM17 8.7a4.3 4.3 0 0 0-1.2-3A4.3 4.3 0 0 0 12 4.7a4.3 4.3 0 0 0-3 1.2A4.3 4.3 0 0 0 4.7 12a4.3 4.3 0 0 0 1.2 3A4.3 4.3 0 0 0 12 19.3a4.3 4.3 0 0 0 3-1.2 4.3 4.3 0 0 0 1.2-3A4.3 4.3 0 0 0 19.3 12a4.3 4.3 0 0 0-1.2-3Z"
				/>
			</svg>
		),
	},
	{
		name: "LinkedIn",
		url: "#",
		svg: (
			<svg width="28" height="28" fill="none" viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="12" fill="#0077B5" />
				<path
					fill="#fff"
					d="M9.2 17H7V10.5h2.2V17Zm-1.1-7.2a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Zm9.1 7.2h-2.2v-3.1c0-.7-.3-1.1-.9-1.1-.5 0-.8.3-.8 1v3.2H11V10.5h2.1v.9c.3-.5.9-1 1.7-1 1.2 0 2.1.8 2.1 2.5V17Z"
				/>
			</svg>
		),
	},
];

const Team = () => {
	const [openDropdown, setOpenDropdown] = useState(null);

	const handleDropdown = (idx) => {
		setOpenDropdown(openDropdown === idx ? null : idx);
	};

	const handleCopy = () => {
		navigator.clipboard.writeText(window.location.href);
		alert("Profile link copied to clipboard!");
	};

	return (
		<section className="relative py-16 px-4 sm:px-8 bg-white min-h-[80vh] overflow-hidden">
			<div className="relative z-10 max-w-7xl mx-auto">
				<div className="text-center mb-14 animate-fade-in">
					<span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-5 py-2 rounded-full text-blue-900 font-semibold tracking-widest text-xs shadow border border-blue-200 mb-4">
						<span className="w-2 h-2 bg-blue-400 rounded-full"></span>
						<Users2 className="w-4 h-4 text-blue-500" />
						Expert Team Members
					</span>
					<h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 tracking-tight">
						Meet Our Dream Team
					</h2>
					<p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
						Passionate professionals dedicated to delivering exceptional results
						and outstanding service across all departments
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{teamMembers.map((member, idx) => (
						<div
							key={member.id}
							className="group relative bg-white/80 backdrop-blur-md rounded-2xl border border-white/40 shadow-xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-white/90 animate-fade-in"
							style={{ animationDelay: `${idx * 0.1}s` }}
							tabIndex={0}>
							<div className="absolute top-4 right-4 z-20">
								<button
									className="bg-white/90 border border-blue-100 rounded-full p-2 shadow hover:bg-blue-900 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
									onClick={() => handleDropdown(idx)}
									aria-label="Share options">
									<Share2 className="w-5 h-5" />
								</button>

								{openDropdown === idx && (
									<div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-blue-100 py-2 flex flex-col gap-1 animate-fade-in">
										<button
											className="flex items-center gap-2 px-4 py-2 hover:bg-blue-50 text-blue-900 transition-colors text-sm"
											onClick={() =>
												window.open(
													`mailto:?subject=Meet ${member.name}&body=Check out this team member: ${window.location.href}`,
													"_blank"
												)
											}>
											<Mail className="w-4 h-4" /> Email
										</button>
										<button
											className="flex items-center gap-2 px-4 py-2 hover:bg-blue-50 text-blue-900 transition-colors text-sm"
											onClick={handleCopy}>
											<LinkIcon className="w-4 h-4" /> Copy Link
										</button>
										<button
											className="flex items-center gap-2 px-4 py-2 hover:bg-blue-50 text-blue-900 transition-colors text-sm"
											onClick={() => window.open("#", "_blank")}>
											<User className="w-4 h-4" /> View Profile
										</button>
									</div>
								)}
							</div>

							<div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg mb-5 transition-transform duration-500 group-hover:scale-110">
								<img
									src={member.image}
									alt={member.name}
									className="w-full h-full object-cover"
									draggable="false"
								/>
							</div>

							<h3 className="text-xl font-bold text-blue-900 mb-1">
								{member.name}
							</h3>
							<p className="text-sm font-semibold text-blue-900 bg-blue-50 px-3 py-1 rounded-full inline-block mb-3">
								{member.role}
							</p>
							<p className="text-black text-sm mb-6 min-h-[3rem]">
								{member.bio}
							</p>

							<div className="flex gap-4 justify-center items-center mt-auto mb-2">
								{socialIcons.map((icon) => (
									<a
										key={icon.name}
										href={icon.url}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={icon.name}
										className="hover:scale-110 transition-transform duration-200">
										{icon.svg}
									</a>
								))}
							</div>

							<div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 blur-lg"></div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Team;
