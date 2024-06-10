import { Link, useLoaderData } from "react-router-dom";

const Careers = () => {
	const careers = useLoaderData();

	return (
		<div className="careers">
			<h3>Open Positions</h3>
			{careers.map((career) => (
				<Link to={career.id.toString()} key={career.id}>
					<h4 className="title">{career.title}</h4>
					<p className="location">Based in {career.location}</p>
				</Link>
			))}
		</div>
	);
};

//loader function
const careersLoader = async () => {
	const response = await fetch("http://localhost:8000/careers");

	if (!response.ok) {
		throw new Error("Failed to fetch careers");
	}

	return response.json();
};

export default Careers;
export { careersLoader };
