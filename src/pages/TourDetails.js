import React, { useEffect, createRef } from "react";
import Map from "components/Map/Map";
import { useState } from "react";
import { db } from "../firebase/firebase-config";
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { Grid } from "@material-ui/core";
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
	const [elRefs, setElRefs] = useState(0);
	const [childClicked, setChildClicked] = useState(null);
	useEffect(() => {
		setElRefs((refs) =>
			Array(places?.length)
				.fill()
				.map((_, i) => refs[i] || createRef()),
		);
	}, [places]);
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

	return (
		<>
			<Header />
			<div className="bg-white">
				<div className="relative grid grid-cols-8">
					<div className="max-h-[calc(100vh-90px)] col-span-2 overflow-y-scroll shadow-2xl no-scrollbar">
						<span className="font-smibold text-[24px] flex justify-between mx-5 mt-5">
							{data?.title}
						</span>
						<p className="mt-3 mx-5 font-light text-[14px] cursor-pointer hover:underline">
							Mô tả:
						</p>
						<p className="mt-3 mx-5 mb-5 font-light text-[14px]">
							{places?.length} địa điểm, cập nhật lúc {FakeTour.Month}/
							{FakeTour.Year}
						</p>

						<div className="flex flex-col">
							{places?.map((place, index) => (
								<Grid ref={elRefs[index]} key={index} item xs={12}>
									<LocationItem
										index={index}
										places={places}
										selected={Number(childClicked) === index}
										location={place}
										setPlaces={setPlaces}
										refProp={elRefs[index]}
									></LocationItem>
								</Grid>
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
								setChildClicked={setChildClicked}
							/>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default TourDetails;
