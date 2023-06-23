import locationNow from "../../assets/locationNow.svg";
import {
	useJsApiLoader,
	GoogleMap,
	Marker,
	Autocomplete,
	DirectionsRenderer,
} from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";

const center = { lat: 48.8584, lng: 2.2945 };

function NewMap({ places, setDistance, setDuration }) {
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: "AIzaSyCMtJ_nbYUAttdbH2XSSQ7Bl-cBNTwSAEg",
		libraries: ["places"],
	});

	const [map, setMap] = useState(/** @type google.maps.Map */ (null));
	const [directionsResponse, setDirectionsResponse] = useState(null);
	async function calculateRoute(wayPoints) {
		// eslint-disable-next-line no-undef
		const directionsService = new google.maps.DirectionsService();
		const results = await directionsService.route({
			origin: {
				lat: Number(places[0].latitude),
				lng: Number(places[0].longitude),
			},
			destination: {
				lat: Number(places[places.length - 1].latitude),
				lng: Number(places[places.length - 1].longitude),
			},
			// eslint-disable-next-line no-undef
			waypoints: wayPoints,
			optimizeWaypoints: true,
			// eslint-disable-next-line no-undef
			travelMode: google.maps.TravelMode.DRIVING,
		});
		setDirectionsResponse(results);
		console.log(results);
		let sumDistance = 0;
		let sumDuration = 0;
		results.routes[0].legs.forEach((item) => {
			sumDistance += Number(item.distance.value);
		});
		results.routes[0].legs.forEach((item) => {
			sumDuration += Number(item.duration.value);
		});
		setDistance(sumDistance / 1000);
		setDuration(sumDuration);
	}
	useEffect(() => {
		if (places?.length > 0) {
			let wayPoints = [];
			places?.forEach((place, i) => {
				if (i !== 0 && i !== places.length - 1)
					wayPoints.push({
						location: {
							lat: Number(place.latitude),
							lng: Number(place.longitude),
						},
						stopover: true,
					});
			});
			calculateRoute(wayPoints);
		}
	}, [places]);

	return (
		<div className="relative w-full flex flex-col items-center  h-[calc(100vh-90px)]">
			{/* Google Map Box */}
			<GoogleMap
				key="AIzaSyCMtJ_nbYUAttdbH2XSSQ7Bl-cBNTwSAEg"
				center={center}
				zoom={15}
				mapContainerStyle={{ width: "100%", height: "100%" }}
				options={{
					zoomControl: false,
					streetViewControl: false,
					mapTypeControl: false,
					fullscreenControl: false,
				}}
				onLoad={(map) => setMap(map)}
			>
				{directionsResponse && (
					<>
						<DirectionsRenderer
							directions={directionsResponse}
							options={{
								polylineOptions: {
									strokeColor: "#1a73e8", // màu sắc của đường dây
									strokeWeight: 5, // độ rộng của đường dây
									strokeOpacity: 1, // độ mờ của đường dây
									strokeDasharray: [10, 10],
								},
							}} // kiểu nét của đường dây } }}
						/>
					</>
				)}
			</GoogleMap>
		</div>
	);
}

export default NewMap;
