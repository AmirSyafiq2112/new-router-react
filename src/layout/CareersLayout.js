import { Outlet } from "react-router-dom";

const CareersLayout = () => {
	return (
		<div className="careers-layout">
			<h2>Careers</h2>

			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default CareersLayout;
