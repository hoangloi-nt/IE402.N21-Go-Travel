import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { db } from "../../firebase/firebase-config";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Tour = ({
	id = "",
	title = "",
	beginLocation = "",
	imageUrl = "",
	startDay = "",
	endDay = "",
}) => {
	const [openModal, setOpenModal] = useState(false);

	const { control, reset, handleSubmit } = useForm({
		mode: "onChange",
		defaultValues: {},
	});

	useEffect(() => {
		async function fetchData() {
			const colRef = doc(db, "trips", id);
			const singleDoc = await getDoc(colRef);
			reset(singleDoc.data());
		}
		fetchData();
	}, [id, reset]);
	if (!id) return null;
	const handleUpdate = async (values) => {
		console.log(values);
		const colRef = doc(db, "trips", id);
		await updateDoc(colRef, {
			title: values.title,
			image: values.image,
			begin_location: values.begin_location,
			start_day: values.start_day,
			end_day: values.end_day,
		});
		toast.success("Cập nhật chuyến đi thành công!");
	};

	//   Xóa trips
	const handleDeleteTrip = async (docId) => {
		const colRef = doc(db, "trips", docId);
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
				await deleteDoc(colRef);
				Swal.fire("Đã xóa!");
			}
		});
	};

	return (
		<>
			<a
				href={`/tour-detail/${id}`}
				className="w-full bg-white shadow-tour-card flex gap-[50px] py-[10px] pl-[12px] pr-[62px] rounded-[4px]"
			>
				<img
					src={imageUrl}
					alt="img location"
					className="w-[462px] h-[296px]"
				/>
				<div className="flex flex-col flex-1 ">
					<div className="text-[24px] leading-[28.13px] mb-[35px] font-[500] text-center mt-[22px]">
						{title}
					</div>
					<div className="mb-[20px]">Địa điểm khởi hành: {beginLocation}</div>
					<div className="flex justify-between flex-1">
						<div>Thời gian khởi hành: {startDay}</div>
						<div>Thời gian kết thúc: {endDay}</div>
					</div>
					<div className="flex items-center justify-between mb-[20px]">
						<div className="font-medium leading-[18.75px] text-[16px] text-[#E06E6E]">
							Tổng chi phí: 3.000.000 VND / 1 người
						</div>
						<div className="flex gap-[22px]">
							<button
								className="w-[42px] h-[42px] bg-[#6557B9] flex justify-center items-center"
								onClick={(e) => {
									e.preventDefault();
									setOpenModal(!openModal);
								}}
							>
								<svg
									width="20"
									height="19"
									viewBox="0 0 20 19"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M17.4211 6.42877L13.0028 2.05616L14.4583 0.59863C14.8568 0.199543 15.3464 0 15.9272 0C16.508 0 16.9973 0.199543 17.3952 0.59863L18.8506 2.05616C19.2491 2.45525 19.4571 2.93693 19.4744 3.50121C19.4917 4.06548 19.3011 4.54681 18.9026 4.94521L17.4211 6.42877ZM15.9137 7.96438L4.89382 19H0.475464V14.5753L11.4954 3.53973L15.9137 7.96438Z"
										fill="white"
									/>
								</svg>
							</button>
							<button
								className="w-[42px] h-[42px] bg-[#E06E6E] flex justify-center items-center"
								onClick={() => handleDeleteTrip(id)}
							>
								<svg
									width="26"
									height="25"
									viewBox="0 0 26 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M7.76709 21.875C7.19417 21.875 6.70355 21.6708 6.29521 21.2625C5.88688 20.8542 5.68306 20.3639 5.68376 19.7917V6.25H4.64209V4.16667H9.85042V3.125H16.1004V4.16667H21.3088V6.25H20.2671V19.7917C20.2671 20.3646 20.0629 20.8552 19.6546 21.2635C19.2463 21.6719 18.756 21.8757 18.1838 21.875H7.76709ZM9.85042 17.7083H11.9338V8.33333H9.85042V17.7083ZM14.0171 17.7083H16.1004V8.33333H14.0171V17.7083Z"
										fill="white"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</a>

			{openModal && (
				<div
					className="fixed inset-0 z-10 bg-black bg-opacity-50"
					onClick={() => setOpenModal(!openModal)}
				>
					<div
						className="absolute z-20 px-5 py-6 -translate-x-1/2 -translate-y-1/2 bg-white rounded shadow-md left-1/2 top-1/2"
						onClick={(e) => e.stopPropagation()}
					>
						<form onSubmit={handleSubmit(handleUpdate)}>
							<h2 className="mb-10 text-xl font-semibold text-center">
								CHỈNH SỬA CHUYẾN ĐI
							</h2>
							<div className="flex items-center justify-center mb-5">
								<Controller
									control={control}
									name="title"
									render={({ field }) => (
										<input
											{...field}
											placeholder="Nhập tên chuyến đi"
											type="text"
											className="w-[380px]"
										/>
									)}
								/>
							</div>
							<div className="flex items-center justify-center mb-5">
								<Controller
									control={control}
									name="begin_location"
									render={({ field }) => (
										<input
											{...field}
											placeholder="Nhập địa điểm khởi hành"
											type="text"
											className="w-[380px]"
										/>
									)}
								/>
							</div>
							<div className="flex items-center justify-center mb-5">
								<Controller
									control={control}
									name="image"
									render={({ field }) => (
										<input
											{...field}
											placeholder="Nhập url hình ảnh"
											type="text"
											className="w-[380px]"
										/>
									)}
								/>
							</div>
							<div className="flex items-center justify-between mb-5 gap-x-5">
								<label htmlFor="start_day">Thời gian bắt đầu</label>
								<Controller
									control={control}
									name="start_day"
									render={({ field }) => (
										<input
											{...field}
											id="start_day"
											type="date"
											name="start_day"
										/>
									)}
								/>
							</div>
							<div className="flex items-center justify-between mb-8 gap-x-4">
								<label htmlFor="end_day">Thời gian kết thúc</label>
								<Controller
									control={control}
									name="end_day"
									render={({ field }) => (
										<input {...field} id="end_day" type="date" name="end_day" />
									)}
								/>
							</div>
							<button
								type="submit"
								className="block px-4 py-3 mx-auto text-white transition-all rounded-md bg-purple-1 hover:opacity-70"
							>
								Cập nhật
							</button>
						</form>
					</div>
				</div>
			)}
		</>
	);
};

export default Tour;
