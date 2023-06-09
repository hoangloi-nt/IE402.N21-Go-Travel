import React, { useState, useEffect, useRef } from "react";
import { db } from "../../firebase/firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import Rating from "@material-ui/lab/Rating";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useSetAtom, useAtomValue } from "jotai";
import { provinceAtom } from "atom/provinceAtom";
import { useNavigate } from "react-router-dom";
const LocationItem = ({ location, index, places, setPlaces, getDate }) => {
	const [isMore, setIsMore] = useState(false);
	const setProvinceAtom = useSetAtom(provinceAtom);
	const provinceValue = useAtomValue(provinceAtom);
	console.log(provinceValue);
	const overlayRef = useRef(null);
	useEffect(() => {
		const onScroll = () => {
			setIsMore(false);
		};
		window.addEventListener("mousewheel", onScroll);
	}, []);
	const array_move = (arr, old_index, new_index) => {
		if (new_index >= arr.length) {
			var k = new_index - arr.length + 1;
			while (k--) {
				arr.push(undefined);
			}
		}
		arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
		return arr; // for testing
	};
	const moveUp = async () => {
		const newPlaces = array_move(places, index, index - 1);

		const colRef = doc(db, "trips", id);
		await updateDoc(colRef, {
			lastUpdateTime: getDate(),
			tripDetails: newPlaces,
		});
		setPlaces([...newPlaces]);
		setIsMore(false);
	};
	const moveDown = async () => {
		const newPlaces = array_move(places, index, index + 1);
		const colRef = doc(db, "trips", id);
		await updateDoc(colRef, {
			lastUpdateTime: getDate(),
			tripDetails: newPlaces,
		});
		setPlaces([...newPlaces]);
		setIsMore(false);
	};
	const { id } = useParams();
	const handleDeleteTrip = async () => {
		places.splice(index, 1);
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
				const colRef = doc(db, "trips", id);
				await updateDoc(colRef, {
					lastUpdateTime: getDate(),
					tripDetails: places,
				});
				setPlaces([...places]);

				setIsMore(false);
				Swal.fire("Đã xóa!");
			}
		});
	};
	const navigate = useNavigate();
	return (
		<div className="relative block mb-7 group">
			<div
				className="absolute right-[10px] w-[30px] hidden items-center justify-center h-[30px] top-[10px] border-[1px] border-black bg-[rgba(255,255,255,0.7)] cursor-pointer group-hover:flex "
				onClick={() => {
					setProvinceAtom({
						lat: Number(location.latitude),
						lng: Number(location.longitude),
						name: location.name,
					});
					navigate("/province-detail");
				}}
			>
				<img
					src="/images/arrow-xeo.svg"
					alt=""
					className="max-w-[20px] max-h-[20px]"
				></img>
			</div>
			<img
				src={location?.image}
				alt={location?.image}
				className="w-full h-[200px] "
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

					{location.num_reviews !== "" ? (
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
					className="cursor-pointer py-[25px] px-[30px] z-[100]"
					onClick={(e) => {
						e.preventDefault();
						setIsMore(!isMore);
					}}
				>
					<img
						alt="see more"
						src="/images/see-more.svg"
						className="min-w-[20px]"
					></img>
				</div>
				{/* Modal See more */}
				{isMore && (
					<>
						<div
							className="fixed top-0 bottom-0 left-0 right-0 z-[5] cursor-default"
							ref={overlayRef}
							onClick={(e) => {
								e.preventDefault();
								setIsMore(!isMore);
							}}
						></div>
						<div
							className="see-more-location absolute py-[10px] right-[13px] top-[45px] bg-white shadow-2xl z-[6]"
							onClick={(e) => e.preventDefault()}
						>
							<p
								className={`px-[24px] font-normal py-[8px] text-[14px] ${
									index === 0
										? "pointer-events-none disabled text-[#ccc] cursor-none"
										: "cursor-pointer"
								}`}
								onClick={() => moveUp()}
							>
								Move up
							</p>
							<p
								className={`px-[24px] font-normal py-[8px] text-[14px] ${
									index === places.length - 1
										? "pointer-events-none disabled text-[#ccc] cursor-none"
										: "cursor-pointer"
								}`}
								onClick={() => moveDown()}
							>
								Move down
							</p>
							<p
								className="px-[24px] font-normal py-[8px] text-[14px] cursor-pointer"
								onClick={() => handleDeleteTrip()}
							>
								Remove from trip
							</p>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default LocationItem;
