import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ManageTour from "pages/ManageTour";
import FamousSitePage from "pages/FamousSitePage";
import SigninPage from "pages/SigninAcount";
import RegisterPage from "pages/RegisterAcount";
import ProvinceDetail from "pages/ProvinceDetail";
const HomePage = lazy(() => import("pages/HomePage"));
const TourDetails = lazy(() => import("pages/TourDetails"));
const ChiTietDiaDiem = lazy(() => import("pages/ChiTietDiaDiem"));

function App() {
	return (
		<Suspense>
			<Routes>
				<Route path="/" element={<HomePage></HomePage>} />
				<Route path="/tour-detail" element={<TourDetails></TourDetails>} />
				<Route path="/manage-tour" element={<ManageTour></ManageTour>} />
				<Route
					path="/famous-site"
					element={<FamousSitePage></FamousSitePage>}
				/>
				<Route
					path="/famous-site"
					element={<FamousSitePage></FamousSitePage>}
				/>
				<Route path="/signin" element={<SigninPage></SigninPage>} />
				<Route path="/register" element={<RegisterPage></RegisterPage>} />
				<Route path="/chitiet" element={<ChiTietDiaDiem></ChiTietDiaDiem>} />
				<Route
					path="/province-detail"
					element={<ProvinceDetail></ProvinceDetail>}
				/>
			</Routes>
		</Suspense>
	);
}

export default App;
