import React, { useEffect } from "react";
import Layout from "components/layout/Layout";
import Map from "components/Map/Map";
import { useState } from "react";
import EditTour from "components/EditTour";
import { getPlacesData } from "api";
import { CssBaseline, Grid } from "@material-ui/core";
import List from "components/List/List";
const FakeTour = {
	Name: "Tour cuối năm",
	Description: "Đi 2 người",
	Month: 6,
	Year: 2023,
};

const Locations = [
	{
		id: 1,
		Name: "Nha Trang",
		Image: "/NhaTrang.jpg",
		Province: "Khánh Hòa",
		Country: "Việt Nam",
		Description: "Vùng biển đẹp",
	},
	{
		id: 2,
		Name: "Đà Lạt",
		Image: "/DaLat.jpg",
		Province: "Lâm Đồng",
		Country: "Việt Nam",
		Description: "Vùng núi đẹp",
	},
	{
		id: 3,
		Name: "Hồ Chí Minh",
		Image: "/HCM.jpg",
		Province: "Hồ Chí Minh",
		Country: "Việt Nam",
		Description: "Vùng đô thị",
	},
];

const ProvinceDetail = () => {
	const [type, setType] = useState("restaurants");
	const [rating, setRating] = useState("");

	const [coords, setCoords] = useState();
	const [bounds, setBounds] = useState(null);

	const [filteredPlaces, setFilteredPlaces] = useState([]);
	const [places, setPlaces] = useState([]);

	const [autocomplete, setAutocomplete] = useState(null);
	const [childClicked, setChildClicked] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				setCoords({ lat: latitude, lng: longitude });
			},
		);
	}, []);
	useEffect(() => {
		if (bounds) {
			getPlacesData(bounds?.sw, bounds?.ne).then((data) => {
				console.log("Places:", data);
				setPlaces(data);
			});
		}
	}, [bounds, coords]);

	return (
		<Layout>
			<div className="bg-white">
				<div className="relative grid grid-cols-10">
					<div className="max-h-[calc(100vh-90px)] col-span-3">
						<List places={places}></List>
					</div>
					<div className="col-span-7">
						<div className="z-[10] absolute top-5 right-5 p-5 bg-white text-[14px] w-60 rounded-sm drop-shadow-md">
							<p className="mb-4">Tìm địa điểm</p>
							<input
								className="block w-full px-3 py-1 bg-white border rounded-md shadow-sm placeholder:text-slate-400 border-slate-300 focus:outline-none focus:border-slate-500"
								type="text"
								name="name"
								placeholder="Tìm kiếm địa điểm"
							/>
						</div>

						{coords && (
							<Map
								setChildClicked={setChildClicked}
								setBounds={setBounds}
								setCoords={setCoords}
								coords={coords}
								places={places}
								// places={filteredPlaces.length ? filteredPlaces : places}
							/>
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ProvinceDetail;
