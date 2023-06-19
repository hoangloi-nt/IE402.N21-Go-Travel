import React from "react";
import Layout from "components/layout/Layout";
import Tour from "components/tour";

const ManageTour = () => {
	return (
		<Layout>
			<div className="bg-white max-w-[1440px] px-[113px] mx-auto mb-[227px]">
				<h1 className="pt-10 mx-auto text-2xl font-bold text-center e mb-[106px]">
					Quản lý thông tin chuyến đi
				</h1>
				<div className="flex items-center justify-between mb-[43px]">
					<div className="text-[20px] leading-[23px] text-[#6557B9]">
						DANH SÁCH CHUYẾN ĐI HIỆN TẠI CỦA BẠN
					</div>
					<a
						href="/edit-tour"
						className="py-[16px] px-[16px] text-white bg-[#6557B9] rounded font-semibold text-[16px] hover:opacity-60"
					>
						Thêm chuyến đi
					</a>
				</div>
				<div className="flex flex-col items-center gap-[50px]">
					<Tour></Tour>
					<Tour></Tour>
					<Tour></Tour>
				</div>
			</div>
		</Layout>
	);
};

export default ManageTour;
