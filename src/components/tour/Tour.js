import React from "react";

const Tour = () => {
	return (
		<div className="w-full bg-white shadow-tour-card flex gap-[50px] py-[10px] pl-[12px] pr-[62px] rounded-[4px]">
			<img
				src="https://www.state.gov/wp-content/uploads/2020/11/shutterstock_186964970-scaled.jpg"
				alt=""
				className="w-[462px] h-[296px]"
			/>
			<div className="flex flex-col flex-1 ">
				<div className="text-[24px] leading-[28.13px] mb-[35px] font-[500] text-center mt-[22px]">
					TÊN CHUYẾN ĐI
				</div>
				<div className="mb-[20px]">Địa điểm khởi hành: TPHCM</div>
				<div className="flex justify-between flex-1">
					<div className="text-[14px] ">Thời gian khởi hành: 25/05/2022</div>
					<div>Thời gian kết thúc: 20/05/2022</div>
				</div>
				<div className="flex items-center justify-between mb-[20px]">
					<div className="font-medium leading-[18.75px] text-[16px] text-[#E06E6E]">
						Tổng chi phí: 3.000.000 VND / 1 người
					</div>
					<div className="flex gap-[22px]">
						<button className="w-[42px] h-[42px] bg-[#6557B9] flex justify-center items-center">
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
						<button className="w-[42px] h-[42px] bg-[#E06E6E] flex justify-center items-center">
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
		</div>
	);
};

export default Tour;
