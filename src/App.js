import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ManageTour from "pages/ManageTour";

const HomePage = lazy(() => import("pages/HomePage"));

function App() {
	return (
		<Suspense>
			<Routes>
				<Route path="/" element={<HomePage></HomePage>}></Route>
				<Route path="/manage-tour" element={<ManageTour></ManageTour>}></Route>
			</Routes>
		</Suspense>
	);
}

export default App;
