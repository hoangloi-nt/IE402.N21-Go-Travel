import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import locationNow from "../../assets/locationNow.svg";
import mapStyles from "../../mapStyles";
import useStyles from "./styles.js";
import PlaceChild from "components/PlaceChild/PlaceChild";
import { useAtomValue } from "jotai";
import { provinceAtom } from "atom/provinceAtom";
const Map = ({
	coords,
	places,
	setCoords,
	setBounds,
	setChildClicked,
	setMoundted,
}) => {
	const classes = useStyles();
	const [location, setLocation] = useState({
		lat: coords.lat,
		lng: coords.lng,
	});
	const provinceValue = useAtomValue(provinceAtom);
	return (
		<div className={classes.mapContainer}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: "AIzaSyCMtJ_nbYUAttdbH2XSSQ7Bl-cBNTwSAEg" }}
				defaultCenter={coords}
				center={coords || { lat: 0, lng: 0 }}
				defaultZoom={14}
				margin={[40, 40, 40, 40]}
				options={{
					// disableDefaultUI: true,
					zoomControl: true,
					styles: mapStyles,
					streetView: true,
				}}
				onGoogleApiLoaded={(e) => console.log(e)}
				onChange={(e) => {
					console.log(e);
					setMoundted(true);
					setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
				}}
				onChildClick={(child) => setChildClicked(child)}
			>
				{places?.length &&
					places.map(
						(place, i) =>
							place.latitude &&
							place.longitude && (
								<div
									className={classes.markerContainer}
									lat={Number(place.latitude)}
									lng={Number(place.longitude)}
									key={i}
								>
									<PlaceChild place={place}></PlaceChild>
								</div>
							),
					)}
				{provinceValue && (
					<div
						className={`z-[1000] ${classes.markerContainer}`}
						lat={provinceValue.lat}
						lng={provinceValue.lng}
					>
						<img
							src={locationNow}
							className="w-[30px] h-[30px] z-[300]"
							alt=""
							title="Your Location"
						/>
					</div>
				)}
			</GoogleMapReact>
		</div>
	);
};

export default Map;
