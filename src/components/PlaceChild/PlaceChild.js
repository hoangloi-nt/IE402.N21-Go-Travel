import React from "react";
import Rating from "@material-ui/lab/Rating";
import locationNear from "../../assets/location-near.png";
const PlaceChild = ({ place }) => {
	return (
		<div className="group">
			<img
				src={locationNear}
				className="w-[30px] h-[30px] z-[300] block group-hover:hidden cursor-default"
				alt=""
			/>
			<div className="p-[10px] w-[100px] shadow-sm rounded-[2px] bg-white hidden group-hover:block">
				<div className="mb-[3px] line-clamp-2">{place.name}</div>
				<img
					alt="hello"
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
		</div>
	);
};

export default PlaceChild;
