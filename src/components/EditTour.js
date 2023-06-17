import React from "react";
import { useState } from "react";

const EditTour = (props) => {
	const [inputValue, setInputValue] = useState(props.name);

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};
	const [textAreaValue, setTextAreaValue] = useState(props.description);

	const handleTextAreaChange = (event) => {
		setTextAreaValue(event.target.value);
	};
	return (
		<div className="absolute top-0 bottom-0 left-0 right-0 grid grid-cols-7">
			<div className="col-span-2 bg-white text-[14px] drop-shadow-lg">
				<div className="flex justify-between px-5 my-4">
					<h3>Chỉnh sửa chuyến đi</h3>
					<span
						className="font-bold rounded-full cursor-pointer"
						onClick={props.close}
					>
						x
					</span>
				</div>
				<img alt={props.image} src={props.image}></img>
				<div className="px-5">
					<p className="mt-4 mb-2">Tên chuyến đi</p>
					<input
						className="block w-full px-3 py-2 bg-white border rounded-md shadow-sm placeholder:text-slate-400 border-slate-300 focus:outline-none focus:border-slate-500"
						type="text"
						name="name"
						value={inputValue}
						onChange={handleInputChange}
					/>
					<p className="mt-4 mb-2">Mô tả</p>
					<textarea
						className="block w-full px-3 py-2 bg-white border rounded-md shadow-sm border-slate-300 focus:outline-none focus:border-slate-500"
						type="text"
						name="description"
						value={textAreaValue}
						onChange={handleTextAreaChange}
					></textarea>
				</div>
				<div className="absolute bottom-5 right-5">
					<button
						class="bg-white hover:opacity-80 text-black font-bold py-2 px-4 border border-1 border-slate-500 rounded mr-3"
						onClick={props.close}
					>
						Hủy
					</button>
					<button class="bg-[#6557B9] hover:opacity-80 text-black font-bold py-2 px-4 rounded">
						Lưu
					</button>
				</div>
			</div>
			<div className="col-span-5 bg-black/50 opacity-70"></div>
		</div>
	);
};

export default EditTour;
