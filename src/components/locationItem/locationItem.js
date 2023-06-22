import React, { useState, useEffect, useRef } from "react";
import Rating from "@material-ui/lab/Rating";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
const LocationItem = ({ location, setSelectMore }) => {
	const [isMore, setIsMore] = useState(false);
	const moreRef = useRef(null);

	const handleDeleteTrip = async (docId) => {
		// const colRef = doc(db, "trips", docId);
		Swal.fire({
			title: "Bạn có muốn xóa?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			cancelButtonText: "Không",
			confirmButtonText: "Có",
		}).then(async (result) => {
			if (result.isConfirmed) {
				// await deleteDoc(colRef);
				Swal.fire("Đã xóa!");
			}
		});
	};

	return (
		<a className="mb-7" href="/province-detail">
			<img
				src={location?.image}
				alt={location?.image}
				className="w-full h-[200px] object-cover"
			></img>
			<div className="relative flex justify-between ml-5">
				<div className="mt-5">
					<p className="font-semibold text-[16px]">{location?.name}</p>

					{location.location_string !== "" ? (
						<p className="mt-1 text-[14px]">{location?.location_string}</p>
					) : (
						<></>
					)}
					{location.address !== "" ? (
						<p className="mt-2 text-[14px]">Địa chỉ: {location.address}</p>
					) : (
						<></>
					)}

					{location.location_string !== "" ? (
						<div className="flex items-center mt-2 text-[12px] gap-[10px]">
							<Rating
								name="read-only"
								size="small"
								value={Number(location?.rating)}
								readOnly
							/>
							<p className="font-medium">{location?.num_reviews}</p>
						</div>
					) : (
						<></>
					)}
				</div>

				<div
					className="cursor-pointer py-[25px] px-[30px] h-[40px]"
					onClick={(e) => {
						e.preventDefault();
						setIsMore(!isMore);
					}}
				>
					<img alt="see more" src="/images/see-more.svg"></img>
				</div>
				{/* Modal See more */}
				{isMore && (
					<>
						<div
							className="fixed top-0 bottom-0 left-0 right-0 z-[5] cursor-default"
							onClick={(e) => {
								e.preventDefault();
								setIsMore(!isMore);
							}}
						></div>
						<div
							className="see-more-location absolute py-[10px] right-[13px] top-[45px] bg-white shadow-2xl z-[6]"
							ref={moreRef}
							onClick={(e) => e.preventDefault()}
						>
							<p className="px-[24px] font-normal py-[8px] text-[14px]">
								Move up
							</p>
							<p className="px-[24px] font-normal py-[8px] text-[14px]">
								Move down
							</p>
							<p
								className="px-[24px] font-normal py-[8px] text-[14px]"
								onClick={() => handleDeleteTrip()}
							>
								Remove from trip
							</p>
						</div>
					</>
				)}
			</div>
		</a>
	);
};

export default LocationItem;
