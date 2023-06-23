import React from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../../firebase/firebase-config";
import { doc, updateDoc } from "firebase/firestore";
const SearchResult = ({ place, type, places, setPlaces }) => {
	const { id } = useParams();
	let selected = false;
	if (places.some((e) => e.location_id === place.location_id)) {
		selected = true;
	}
	const handleUpdate = async () => {
		const tripAdd = {
			location_id: place.location_id || "",
			latitude: place.latitude || "",
			longitude: place.longitude || "",
			name: place.name || "",
			location_string: place.location_string || "",
			address: place.address || "",
			rating: place.rating || "",
			num_reviews: place.num_reviews || "",
			type: type || "",
			image: place?.photo.images.original.url || "",
		};

		setPlaces([...places, tripAdd]);
		console.log(places);
		const colRef = doc(db, "trips", id);
		await updateDoc(colRef, {
			tripDetails: [...places, tripAdd],
		});
		toast.success("Đã thêm vào chuyến đi!");
	};

	return (
		<div
			className="flex items-center justify-between cursor-pointer group"
			onClick={() => handleUpdate()}
		>
			<div className="group-hover:pl-[2px] flex gap-[12px] py-[16px] mr-[12px]">
				{type === "restaurants" ? (
					<img
						src="/images/restaurant.svg"
						alt=""
						className="mt-[2.5px] min-w-[12px] h-[12px]"
					/>
				) : type === "things_to_do" ? (
					<img
						src="/images/ticket.svg"
						alt=""
						className="mt-[2.5px] min-w-[12px] h-[12px]"
					/>
				) : type === "lodging" ? (
					<img
						src="/images/bed.svg"
						alt=""
						className="mt-[2.5px] min-w-[12px] h-[12px]"
					/>
				) : (
					<img
						src="/images/location-black.svg"
						alt=""
						className="mt-[2.5px] min-w-[12px] h-[12px]"
					/>
				)}

				<div className="">
					<div className="text-[16px] font-semibold leading-[1.1] line-clamp-2">
						{place?.name}
					</div>
					<div className="text-[14px] line-clamp-2 leading-[1.1] ">
						{place?.location_string}
					</div>
				</div>
			</div>

			<div className="min-w-[25px] aspect-square rounded-[50%] border-[1px] flex items-center justify-center border-[#e0e0e0] ">
				{!selected ? (
					<>
						<img
							src="/images/heart.svg"
							alt=""
							className="block group-hover:hidden w-[13px] h-[13px]"
						/>
						<img
							src="/images/heart-red.svg"
							alt=""
							className="hidden group-hover:block w-[13px] h-[13px]"
						/>
					</>
				) : (
					<img
						src="/images/heart-red.svg"
						alt=""
						className="w-[13px] h-[13px]"
					/>
				)}
			</div>
		</div>
	);
};

export default SearchResult;
