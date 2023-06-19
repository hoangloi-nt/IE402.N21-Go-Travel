import React, { useEffect } from "react";
import Layout from "components/layout/Layout";
import Map from "components/Map/Map";
import { useState } from "react";
import EditTour from "components/EditTour";
import { getPlacesData } from "api";
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

const TourDetails = () => {
	const [place, setPlace] = useState();
	const [coords, setCoords] = useState({});
	const [bounds, setBounds] = useState(null);
	console.log(bounds);
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				setCoords({ lat: latitude, lng: longitude });
			},
		);
	}, []);
	useEffect(() => {
		console.log("coords: ", coords);
		getPlacesData(bounds?.sw, bounds?.ne).then((data) => {
			console.log(data);
			setPlace(data);
		});
	}, [coords, bounds]);
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};
	return (
		<Layout>
			<div className="bg-white">
				<div className="relative grid grid-cols-8">
					<div className="max-h-[calc(100vh-90px)] col-span-2 overflow-y-scroll">
						<span className="flex justify-between mx-5 mt-5">
							<h5 className="font-medium drop-shadow-md">Tên chuyến đi</h5>
							{/* <span className="cursor-pointer">•••</span> */}
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
								<a className="mb-7" href="/">
									<img
										src={location.Image}
										alt={location.Image}
										className="w-full"
									></img>
									<span className="flex justify-between mx-5 mt-5 font-semibold">
										<p className="hover:underline">{location.Name}</p>
										<img
											alt="delete"
											srcSet="/Delete.png 1x"
											className="cursor-pointer"
										></img>
									</span>
									<p className="mx-5 mt-2 font-light text-[14px]">
										{location.Province}, {location.Country}
									</p>
								</a>
							))}
						</div>
					</div>
					<div className="col-span-6">
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
								// setChildClicked={setChildClicked}
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
		</Layout>
	);
};

export default TourDetails;
