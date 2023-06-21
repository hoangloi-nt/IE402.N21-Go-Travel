import React from "react";
import Rating from "@material-ui/lab/Rating";

const LocationItem = ({ location }) => {
	return (
		<a className="mb-7" href="/province-detail">
			<img src={location?.image} alt={location?.image} className="w-full"></img>
			<span className="flex justify-between mx-5 mt-5 font-semibold">
				<p className="hover:underline">{location?.name}</p>
				<img
					alt="delete"
					srcSet="/Delete.png 1x"
					className="cursor-pointer"
				></img>
			</span>
			<p className="mx-5 mt-2 font-light text-[14px]">
				{location?.province}, {location.country}
			</p>
		</a>
	);
};

export default LocationItem;
