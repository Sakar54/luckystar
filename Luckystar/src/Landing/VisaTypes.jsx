import { BookOpen, BadgeCheck, Briefcase, Plane } from "lucide-react";
import ukFlag from "../assets/icons/UK.png";
import canadaFlag from "../assets/icons/canada.png";
import ausFlag from "../assets/icons/aus.png";
import brazilFlag from "../assets/icons/brazil.png";
import CountryOfftering from "../Aboutus/CountryOfftering";

const visaTypeTabs = [
	{
		key: "education",
		label: "Skilled",
		icon: <BookOpen className="w-6 h-6 mr-2" />,
		countries: [
			{
				image: ukFlag,
				name: "United Kssssssssssingdom",
				desc: "The UK offers world-class education and a variety of student visa options for international students.",
				types: ["Student Visa", "Graduate Route"],
			},
			{
				image: canadaFlag,
				name: "Canada",
				desc: "Canada is renowned for its high-quality education and offers study permits for international students.",
				types: ["Study Permit", "Post-Graduation Work Permit"],
			},
			{
				image: ausFlag,
				name: "Australia",
				desc: "Australia provides a range of student visas and is known for its diverse and welcoming campuses.",
				types: ["Student Visa (Subclass 500)", "Temporary Graduate Visa"],
			},
			{
				image: brazilFlag,
				name: "Brazil",
				desc: "Brazil offers unique cultural and educational experiences for international students.",
				types: ["Student Visa", "Exchange Visa"],
			},
		],
	},
	{
		key: "immigration",
		label: "Work Permit",
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
		label: "Investment",
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
		label: "Visit Visa",
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

export default function VisaTypesPage() {
	return (
		<CountryOfftering
			title="Visa Types"
			subtitle="Immigration approvals vary by country, and we expertly guide you through each destination's requirements."
			tabs={visaTypeTabs}
		/>
	);
}
