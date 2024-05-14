import { Link, useLoaderData } from "react-router-dom";

const Careers = () => {
	const careers = useLoaderData();

	return (
		<div className="careers">
			<h3>Open Positions</h3>
			{careers.map((career) => (
				<Link to="/" key={career.id}>
					<h4 className="title">{career.title}</h4>
					<p className="location">Based in {career.location}</p>
				</Link>
			))}
		</div>
	);
};

//loader function
const careersLoader = async () => {
	const res = await fetch("http://localhost:8000/careers");

	return res.json();
};

export default Careers;
export { careersLoader };
