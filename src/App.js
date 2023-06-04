import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("pages/HomePage"));
const TourDetails = lazy(() => import("pages/TourDetails"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/location" element={<TourDetails></TourDetails>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
