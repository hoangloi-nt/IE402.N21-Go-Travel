import React from "react";
import Rating from "@material-ui/lab/Rating";

const PlaceChild = ({ place }) => {
	return (
		<div className="p-[10px] w-[100px] shadow-sm rounded-[2px] bg-white cursor-pointer">
			<div className="mb-[3px] line-clamp-2">{place.name}</div>
			<img
				alt=""
				className="object-cover w-full aspect-square mb-[3px]"
				src={
					place.photo ? place.photo.images.large.url : "/images/no-image.png"
				}
			/>
			<Rating
				name="read-only"
				size="small"
				value={Number(place.rating)}
				readOnly
			/>
		</div>
	);
};

export default PlaceChild;
