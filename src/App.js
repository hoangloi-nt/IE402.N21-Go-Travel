import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ManageTour from "pages/ManageTour";
import FamousSitePage from "pages/FamousSitePage";

const HomePage = lazy(() => import("pages/HomePage"));
const TourDetails = lazy(() => import("pages/TourDetails"));
const ChiTietDiaDiem = lazy(() => import("pages/ChiTietDiaDiem"));

function App() {
	return (
		<Suspense>
			<Routes>
				<Route path="/" element={<HomePage></HomePage>} />
				<Route path="/location" element={<TourDetails></TourDetails>} />
				<Route path="/manage-tour" element={<ManageTour></ManageTour>} />
				<Route
					path="/famous-site"
					element={<FamousSitePage></FamousSitePage>}
				/>
				<Route path="/chitiet" element={<ChiTietDiaDiem></ChiTietDiaDiem>} />
			</Routes>
		</Suspense>
	);
}

export default App;
