import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
	const location = useLocation();
	const pathnames = location.pathname.split("/").filter((x) => x);

	return (
		<div className="flex items-center justify-center text-sm font-medium text-white">
			<Link to="/" className="hover:underline text-white">
				Home
			</Link>

			{pathnames.map((value, index) => {
				const to = `/${pathnames.slice(0, index + 1).join("/")}`;
				const isLast = index === pathnames.length - 1;

				return (
					<span key={to} className="flex items-center space-x-1 ml-2">
						<span className="text-white">→</span>
						{isLast ? (
							<span className="text-white font-semibold underline">
								{decodeURIComponent(value.replace(/-/g, " "))}
							</span>
						) : (
							<Link to={to} className="text-white hover:underline">
								{decodeURIComponent(value.replace(/-/g, " "))}
							</Link>
						)}
					</span>
				);
			})}
		</div>
	);
};

export default Breadcrumbs;
