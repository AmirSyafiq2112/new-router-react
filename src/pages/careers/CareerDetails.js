import { useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
	const career = useLoaderData();

	return (
		<div className="career-details">
			<h2>Career Details for {career.title}</h2>
			<p>Starting salary : {career.salary}</p>
			<p>Location : {career.location}</p>
			<div className="details">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
					obcaecati unde odit alias, eaque facere excepturi id amet doloribus
					cum.
				</p>
			</div>
		</div>
	);
};

const careerDetailsLoader = async ({ params }) => {
	const { id } = params;

	// const response = await fetch('http://localhost:8000/careers/' + id);
	const response = await fetch(`http://localhost:8000/careers/${id}`);

	if (!response.ok) {
		throw new Error("Career not found");
	}

	return response.json();
};

export { careerDetailsLoader };

export default CareerDetails;
