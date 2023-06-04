import React from "react";
import Layout from "components/layout/Layout";
import Tour from "components/tour";

const ManageTour = () => {
	return (
		<Layout>
			<div className="h-screen bg-white">
				<h1 className="pt-10 mx-auto text-2xl font-bold text-center e mb-[106px]">
					Quản lý thông tin chuyến đi
				</h1>
				<div className="flex flex-col items-center gap-[92px]">
					<Tour></Tour>
					<Tour></Tour>
					<Tour></Tour>
				</div>
			</div>
		</Layout>
	);
};

export default ManageTour;
