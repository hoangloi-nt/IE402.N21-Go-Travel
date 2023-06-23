import React, { useEffect } from "react";
import Map from "components/Map/Map";
// import { Autocomplete } from "@react-google-maps/api";
import { useState } from "react";
import { getPlacesData } from "api";
import List from "components/List/List";
import Header from "components/layout/Header";
import { useAtomValue } from "jotai";
import { provinceAtom } from "atom/provinceAtom";

const ProvinceDetail = () => {
	const provinceValue = useAtomValue(provinceAtom);
	// console.log(provinceValue);
	const [type, setType] = useState("restaurants");
	const [rating, setRating] = useState("");

	const [coords, setCoords] = useState([]);
	const [bounds, setBounds] = useState(null);
	const [mounted, setMoundted] = useState(false);
	const [filteredPlaces, setFilteredPlaces] = useState([]);
	const [places, setPlaces] = useState([]);

	const [autocomplete, setAutocomplete] = useState(null);
	const [childClicked, setChildClicked] = useState(null);

	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		// navigator.geolocation.getCurrentPosition(
		// 	({ coords: { latitude, longitude } }) => {
		// 		setCoords({ lat: latitude, lng: longitude });
		// 	},
		// );
		setCoords({ lat: provinceValue.lat, lng: provinceValue.lng });
	}, []);
	useEffect(() => {
		const filtered = places?.filter((place) => Number(place.rating) > rating);
		setFilteredPlaces(filtered);
	}, [places, rating]);
	useEffect(() => {
		if (bounds) {
			setIsLoading(true);
			getPlacesData(bounds?.sw, bounds?.ne, type).then((data) => {
				// console.log(data);
				setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
				setFilteredPlaces([]);
				setRating("");
				setIsLoading(false);
			});
		}
	}, [mounted, type]);
	// const onLoad = (autoC) => setAutocomplete(autoC);

	// const onPlaceChanged = () => {
	// 	const lat = autocomplete.getPlace().geometry.location.lat();
	// 	const lng = autocomplete.getPlace().geometry.location.lng();

	// 	setCoords({ lat, lng });
	// };
	return (
		<>
			<Header />
			<div className="bg-white">
				<div className="relative grid grid-cols-10">
					<div className="max-h-[calc(100vh-90px)] col-span-3">
						<List
							childClicked={childClicked}
							places={filteredPlaces.length ? filteredPlaces : places}
							isLoading={isLoading}
							type={type}
							setType={setType}
							rating={rating}
							setRating={setRating}
						></List>
					</div>
					<div className="col-span-7">
						{/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
							<div className="z-[10] absolute top-5 right-5 w-[328px] p-5 bg-white text-[14px] rounded-sm drop-shadow-md">
								<p className="mb-4">Tìm và thêm địa điểm</p>
								<div className="relative">
									<input
										className="block w-full px-[32px] py-[6px] bg-white border rounded-md shadow-sm placeholder:text-slate-400 border-slate-300 focus:outline-none focus:border-slate-500"
										type="text"
										name="name"
										placeholder="Tìm kiếm địa điểm"
									/>
									<div className="absolute left-[5px] top-[50%] translate-y-[-50%]">
										<SearchIcon />
									</div>
								</div>
							</div>
						</Autocomplete> */}

						{coords && (
							<Map
								setChildClicked={setChildClicked}
								setBounds={setBounds}
								setCoords={setCoords}
								coords={coords}
								places={filteredPlaces?.length ? filteredPlaces : places}
								setMoundted={setMoundted}
							/>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProvinceDetail;
