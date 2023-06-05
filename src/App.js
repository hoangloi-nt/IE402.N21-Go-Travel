import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ManageTour from "pages/ManageTour";
import FamousSitePage from "pages/FamousSitePage";

const HomePage = lazy(() => import("pages/HomePage"));
const TourDetails = lazy(() => import("pages/TourDetails"));

function App() {
	return (
		<Suspense>
			<Routes>
				<Route path="/" element={<HomePage></HomePage>}></Route>
				<Route path="/location" element={<TourDetails></TourDetails>}></Route>
				<Route path="/manage-tour" element={<ManageTour></ManageTour>}></Route>
				<Route
					path="/famous-site"
					element={<FamousSitePage></FamousSitePage>}
				></Route>
			</Routes>
		</Suspense>
	);
}

export default App;
