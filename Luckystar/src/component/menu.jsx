import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
	return (
		<>
			<Link
				to="/"
				className="whitespace-nowrap hover:text-yellow-500 transition">
				Home
			</Link>
			<Link
				to="/skilled"
				className="whitespace-nowrap hover:text-yellow-500 transition">
				Skilled
			</Link>
			<Link
				to="/work-permit"
				className="whitespace-nowrap hover:text-yellow-500 transition">
				Work Permit
			</Link>
			<Link
				to="/investment"
				className="whitespace-nowrap hover:text-yellow-500 transition">
				Investment
			</Link>
			<Link
				to="/visa"
				className="whitespace-nowrap hover:text-yellow-500 transition">
				Visa
			</Link>
			<Link
				to="/about"
				className="whitespace-nowrap hover:text-yellow-500 transition">
				About
			</Link>
			<Link
				to="/ContactPage"
				className="whitespace-nowrap hover:text-yellow-500 transition">
				Connect
			</Link>
		</>
	);
}
