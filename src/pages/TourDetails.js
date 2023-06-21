import React, { useEffect } from "react";
import Map from "components/Map/Map";
import { useState } from "react";
import EditTour from "components/EditTour";
import { searchPlacesData } from "api/searchLocationAPI";

import Header from "components/layout/Header";
import SearchBar from "components/searchBar/searchBar";
import LocationItem from "components/locationItem/locationItem";

const FakeTour = {
	Name: "Tour cuối năm",
	Description: "Đi 2 người",
	Month: 6,
	Year: 2023,
};

const Locations = [
	{
		id: 1,
		name: "Nha Trang",
		image: "/NhaTrang.jpg",
		province: "Khánh Hòa",
		country: "Việt Nam",
		description: "Vùng biển đẹp",
	},
	{
		id: 2,
		name: "Đà Lạt",
		image: "/DaLat.jpg",
		province: "Lâm Đồng",
		country: "Việt Nam",
		description: "Vùng núi đẹp",
	},
	{
		id: 3,
		name: "Hồ Chí Minh",
		image: "/HCM.jpg",
		province: "Hồ Chí Minh",
		country: "Việt Nam",
		description: "Vùng đô thị",
	},
];

const TourDetails = () => {
	const [place, setPlace] = useState();
	const [coords, setCoords] = useState({});
	const [bounds, setBounds] = useState(null);
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				setCoords({ lat: latitude, lng: longitude });
			},
		);
	}, []);
	useEffect(() => {
		// searchPlacesData({ query: "pattery" }).then((data) => {
		// 	console.log(data);
		// 	setPlace(data);
		// });
	}, [coords, bounds]);
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};
	return (
		<>
			<Header />
			<div className="bg-white">
				<div className="relative grid grid-cols-8">
					<div className="max-h-[calc(100vh-90px)] col-span-2 overflow-y-scroll shadow-2xl no-scrollbar">
						<span className="flex justify-between mx-5 mt-5">
							<h5 className="font-medium drop-shadow-md">Tên chuyến đi</h5>
						</span>
						<p
							className="mt-3 mx-5 font-light text-[14px] cursor-pointer hover:underline"
							onClick={openModal}
						>
							+Thêm mô tả
						</p>
						<p className="mt-3 mx-5 mb-5 font-light text-[14px]">
							Cập nhật tháng {FakeTour.Month} năm {FakeTour.Year}
						</p>
						<div className="flex flex-col">
							{Locations.map((location, index) => (
								<LocationItem location={location}></LocationItem>
							))}
						</div>
					</div>
					<div className="col-span-6">
						<SearchBar></SearchBar>
						{coords && (
							<Map
								setBounds={setBounds}
								setCoords={setCoords}
								coords={coords}
								// places={filteredPlaces.length ? filteredPlaces : places}
							/>
						)}
					</div>
					{isOpen && (
						<EditTour
							close={closeModal}
							image={Locations[0].Image}
							name={FakeTour.Name}
							description={FakeTour.Description}
						></EditTour>
					)}
				</div>
			</div>
		</>
	);
};

export default TourDetails;
