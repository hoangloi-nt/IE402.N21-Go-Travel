import React from "react";

const SearchResult = ({ place, type, selected }) => {
	return (
		<div className="flex items-center justify-between cursor-pointer group">
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
