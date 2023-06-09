import React, { useEffect } from "react";
import { useState } from "react";
import { db } from "../firebase/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { Grid } from "@material-ui/core";
import Header from "components/layout/Header";
import SearchBar from "components/searchBar/searchBar";
import LocationItem from "components/locationItem/locationItem";
import { useParams } from "react-router-dom";
import NewMap from "components/NewMap/NewMap";

const TourDetails = () => {
	const { id } = useParams();
	const [places, setPlaces] = useState();
	const [data, setData] = useState();
	const [coords, setCoords] = useState();
	const [distance, setDistance] = useState("");
	const [duration, setDuration] = useState("");
	const [lastUpdateTime, setLastUpdateTime] = useState("");
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
			setLastUpdateTime(singleDoc.data().lastUpdateTime);
		}
		fetchData();
	}, [id]);
	const convertSecondToTime = (seconds) => {
		const days = Math.floor(seconds / 86400);
		const hours = Math.floor((seconds % 86400) / 3600);
		const minutes = Math.floor((seconds % 3600) / 60);
		if (days === 0) {
			return `${hours} giờ ${minutes} phút`;
		}
		return `${days} ngày ${hours} giờ ${minutes} phút`;
	};
	const getDate = () => {
		const currentdate = new Date();
		const result =
			currentdate.getHours() +
			":" +
			currentdate.getMinutes() +
			" " +
			currentdate.getDate() +
			"/" +
			(currentdate.getMonth() + 1) +
			"/" +
			currentdate.getFullYear();
		setLastUpdateTime(result);
		return result;
	};
	return (
		<>
			<Header />
			<div className="bg-white">
				<div className="relative grid grid-cols-8">
					<div className="max-h-[calc(100vh-90px)] col-span-2 overflow-y-scroll shadow-2xl no-scrollbar pb-[80px]">
						<span className="font-semibold text-[24px] flex justify-between mx-5 mt-5">
							{data?.title}
						</span>

						<p className="mt-3 mx-5 mb-5 text-[14px]">
							{places?.length} địa điểm, cập nhật lúc {lastUpdateTime}
						</p>
						<p className="mt-3 mx-5 mb-5 text-[14px]">
							Quãng đường đi dự kiến:{" "}
							<span className="font-semibold">
								{places?.length === 0 ? " 0 " : distance}
							</span>{" "}
							km
						</p>
						<p className="mt-3 mx-5 mb-5  text-[14px]">
							Thời gian đi dự kiến:{" "}
							<span className="font-semibold">
								{places?.length === 0 ? " 0" : convertSecondToTime(duration)}
							</span>
						</p>
						<div className="flex flex-col">
							{places &&
								places?.map((place, index) => (
									<Grid key={index} item xs={12}>
										<LocationItem
											index={index}
											places={places}
											location={place}
											setPlaces={setPlaces}
											getDate={getDate}
										></LocationItem>
									</Grid>
								))}
						</div>
					</div>
					<div className="col-span-6">
						<SearchBar setPlaces={setPlaces} places={places}></SearchBar>
						{coords && (
							<NewMap
								setDistance={setDistance}
								setDuration={setDuration}
								places={places}
								coords={coords}
							></NewMap>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default TourDetails;
