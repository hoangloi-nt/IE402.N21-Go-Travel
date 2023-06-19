import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import mapStyles from "../../mapStyles";
import useStyles from "./styles.js";
const AnyReactComponent = ({ text }) => (
	<div className="text-[64px]">{text}</div>
);

const Map = ({
	coords = { lat: 0, lng: 0 },
	places,
	setCoords,
	setBounds,
	setChildClicked,
}) => {
	const matches = useMediaQuery("(min-width:600px)");
	const classes = useStyles();

	return (
		<div className={classes.mapContainer}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: "AIzaSyCMtJ_nbYUAttdbH2XSSQ7Bl-cBNTwSAEg" }}
				defaultCenter={{ lat: 0, lng: 0 }}
				center={coords}
				defaultZoom={14}
				margin={[50, 50, 50, 50]}
				options={{
					disableDefaultUI: true,
					zoomControl: true,
					styles: mapStyles,
				}}
				onChange={(e) => {
					setCoords({ lat: e.center.lat, lng: e.center.lng });
					setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
				}}
				// onChildClick={(child) => setChildClicked(child)}
			>
				{/* <AnyReactComponent
					className={`${classes.markerContainer} text-[64px]`}
					lat={10.84624}
					lng={106.76912}
					text="Place"
				></AnyReactComponent> */}
				{places?.length &&
					places.map((place, i) => (
						<div
							className={classes.markerContainer}
							lat={Number(place.latitude)}
							lng={Number(place.longitude)}
							key={i}
						>
							{!matches ? (
								<LocationOnOutlinedIcon color="primary" fontSize="large" />
							) : (
								<Paper elevation={3} className={classes.paper}>
									<Typography
										className={classes.typography}
										variant="subtitle2"
										gutterBottom
									>
										{" "}
										{place.name}
									</Typography>
									<img
										alt=""
										className={classes.pointer}
										src={
											place.photo
												? place.photo.images.large.url
												: "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
										}
									/>
									<Rating
										name="read-only"
										size="small"
										value={Number(place.rating)}
										readOnly
									/>
								</Paper>
							)}
						</div>
					))}
			</GoogleMapReact>
		</div>
	);
};

export default Map;
