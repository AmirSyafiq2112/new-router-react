import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
	return (
		<div className="help-layout">
			<h2>Website Help</h2>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
				pariatur.
			</p>

			<nav>
				<NavLink to="faq">View Frequent Question</NavLink>
				<NavLink to="contact">Contact</NavLink>
			</nav>

			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default HelpLayout;
