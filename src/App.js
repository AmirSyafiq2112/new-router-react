import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerDetails, {
	careerDetailsLoader,
} from "./pages/careers/CareerDetails";
import NotFound from "./pages/NotFound";
import CareerError from "./pages/careers/CareerError";

//layout
import RootLayout from "./layout/RootLayout";
import HelpLayout from "./layout/HelpLayout";

import CareersLayout from "./layout/CareersLayout";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="help" element={<HelpLayout />}>
					<Route path="faq" element={<Faq />} />
					<Route path="contact" element={<Contact />} action={contactAction} />
				</Route>
				<Route
					path="careers"
					element={<CareersLayout />}
					errorElement={<CareerError />}
				>
					<Route index element={<Careers />} loader={careersLoader} />
					<Route
						path=":id"
						element={<CareerDetails />}
						loader={careerDetailsLoader}
					/>
				</Route>
				<Route path="*" element={<NotFound />} />
			</Route>
		)
	);
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
