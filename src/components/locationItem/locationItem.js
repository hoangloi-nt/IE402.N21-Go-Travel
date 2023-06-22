import React, { useState, useEffect, useRef } from "react";
import Rating from "@material-ui/lab/Rating";

const LocationItem = ({ location, setSelectMore }) => {
	const [isMore, setIsMore] = useState(false);
	const moreRef = useRef(null);
	// useEffect(() => {
	// 	const handleClickOutside = (e) => {
	// 		if (moreRef.current && !moreRef.current.contains(e.target)) {
	// 			setIsMore(false);
	// 		}
	// 	};
	// 	document.addEventListener("mousedown", handleClickOutside);
	// 	return () => {
	// 		document.removeEventListener("mousedown", handleClickOutside);
	// 	};
	// }, [moreRef]);
	return (
		<a className="mb-7" href="/province-detail">
			<img src={location?.image} alt={location?.image} className="w-full"></img>
			<div className="relative flex justify-between ml-5 font-semibold ">
				<div className="my-5">
					<p className="hover:underline">{location?.name}</p>
					<p className="mt-2 font-light text-[14px]">
						{location?.province}, {location.country}
					</p>
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
							<p className="px-[24px] font-normal py-[8px] text-[14px]">
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
