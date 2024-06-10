import { useState } from "react";
import { Navigate } from "react-router-dom";

const About = () => {
	const [user, setUser] = useState("Amir");

	if (!user) {
		return <Navigate to="/" replace={true} />;
	}

	return (
		<div className="About">
			<h1>About</h1>
			<p>This is the about page</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo nesciunt
				ratione illum fugiat voluptatum similique! Praesentium laborum tempora
				quasi culpa!
			</p>
			<button onClick={() => setUser(null)}>Logout</button>
		</div>
	);
};

export default About;
