import { NavLink } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="not-found">
			<div>
				<h2>Page not found!</h2>
				<p>Sorry, there is nothing to see here.</p>
				<p>
					Go to the <NavLink to="/">Homepage</NavLink>.
				</p>
			</div>
		</div>
	);
};

export default NotFound;
