import React from "react";
import Layout from "components/layout/Layout";

function ChiTietDiaDiem() {
	return (
		<Layout>
			<div className="page-container my-[127px]">
				<div className="flex items-center justify-between gap-[50px]">
					<img
						src="https://ik.imagekit.io/tvlk/blog/2022/10/kinh-nghiem-du-lich-vinh-ha-long-1.jpg?tr=dpr-2,w-675"
						alt=""
						className="w-[600px] object-cover h-[600px]"
					/>
					<div className="w-[600px]">
						<h1 className="text-[65px] mb-[34px] text-bold"> Vịnh Hạ Long</h1>
						<div className="text-[17px] mb-[50px] leading-[150%]">
							Ornare vivamus molestie pellentesque nunc. Sed sapien erat
							ultrices curabitur. Erat id fringilla arcu condimentum fames.
							Aliquet dictum aliquet faucibus cursus turpis. Suspendisse cum
							rutrum sit ut sociis. Pellentesque neque orci adipiscing pharetra
							lacus, dignissim pharetra ipsum blandit. Feugiat quis quam
							consectetur lectus id quis tortor vel, mattis.
						</div>
						<a
							href="/edit-tour"
							className="py-[25px] px-[65px] text-white bg-[#6557B9] rounded font-semibold text-[16px] hover:opacity-60"
						>
							Thêm chuyến đi
						</a>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default ChiTietDiaDiem;
