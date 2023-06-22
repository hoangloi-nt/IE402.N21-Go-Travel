import React, { useEffect } from "react";
import Map from "components/Map/Map";
import { useState } from "react";
import { db } from "../firebase/firebase-config";
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import Header from "components/layout/Header";
import SearchBar from "components/searchBar/searchBar";
import LocationItem from "components/locationItem/locationItem";
import { useParams } from "react-router-dom";

const FakeTour = {
	Name: "Tour cuối năm",
	Description: "Đi 2 người",
	Month: 6,
	Year: 2023,
};

const TourDetails = () => {
	const { id } = useParams();
	const [places, setPlaces] = useState();
	const [data, setData] = useState();

	const [coords, setCoords] = useState();
	const [bounds, setBounds] = useState(null);
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				setCoords({ lat: latitude, lng: longitude });
			},
		);
	}, []);
	useEffect(() => {
		async function fetchData() {
			const colRef = doc(db, "trips", id);
			const singleDoc = await getDoc(colRef);
			setData(singleDoc.data());
			setPlaces(singleDoc.data().tripDetails);
		}
		fetchData();
	}, [id]);

	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};
	// console.log(data);
	return (
		<>
			<Header />
			<div className="bg-white">
				<div className="relative grid grid-cols-8">
					<div className="max-h-[calc(100vh-90px)] col-span-2 overflow-y-scroll shadow-2xl no-scrollbar">
						<span className="flex justify-between mx-5 mt-5">
							<h5 className="font-semibold drop-shadow-md text-[24px]">
								{data?.title}
							</h5>
						</span>
						<p
							className="mt-3 mx-5 font-light text-[14px] cursor-pointer hover:underline"
							onClick={openModal}
						>
							Mô tả:
						</p>
						<p className="mt-3 mx-5 mb-5 font-light text-[14px]">
							{places?.length} địa điểm, cập nhật lúc {FakeTour.Month}/
							{FakeTour.Year}
						</p>
						<div className="flex flex-col">
							{places?.map((place, index) => (
								<LocationItem key={index} location={place}></LocationItem>
							))}
						</div>
					</div>
					<div className="col-span-6">
						<SearchBar setPlaces={setPlaces} places={places}></SearchBar>
						{coords && (
							<Map
								setBounds={setBounds}
								setCoords={setCoords}
								coords={coords}
								places={places}
							/>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default TourDetails;
