import React from "react";

const Tour = () => {
	return (
		<div className="w-[1239px] bg-white shadow-tour-card flex gap-[50px] py-[10px] pl-[12px] pr-[62px] rounded-[4px]">
			<img
				src="https://www.state.gov/wp-content/uploads/2020/11/shutterstock_186964970-scaled.jpg"
				alt=""
				className="w-[462px] h-[296px]"
			/>
			<div className="flex flex-col flex-1 ">
				<div className="text-[24px] leading-[28.13px] mb-[35px] font-[500] text-center mt-[22px]">
					TÊN CHUYẾN ĐI
				</div>
				<div className="mb-[20px]">Địa điểm khởi hành TPHCM</div>
				<div className="flex justify-between flex-1">
					<div className="text-[14px] ">Thời gian khởi hành: 25/05/2022</div>
					<div>Thời gian kết thúc: 20/05/2022</div>
				</div>
				<div className="flex items-center justify-between mb-[20px]">
					<div className="font-medium leading-[18.75px] text-[16px] text-[#E06E6E]">
						Tổng chi phí: 3.000.000 VND / 1 người
					</div>
					<div className="flex gap-[22px]">
						<button className="w-[42px] h-[42px] bg-[#6557B9]"></button>
						<button className="w-[42px] h-[42px] bg-[#E06E6E]"></button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tour;
