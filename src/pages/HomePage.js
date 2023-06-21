import React from "react";
import Layout from "components/layout/Layout";
import bannerImg from "assets/images/banner-img.png";
import bannerVN from "assets/images/banner-VN-text.png";
import doitac1 from "assets/images/doitac1.png";
import doitac2 from "assets/images/doitac2.png";
import doitac3 from "assets/images/doitac3.png";
import doitac4 from "assets/images/doitac4.png";
import { HeadingText } from "components/headingText";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const HomePage = () => {
	return (
		<Layout>
			<div className="w-full h-full">
				<div className="w-full h-[760px] relative">
					<img
						src={bannerImg}
						alt="banner background img"
						className="top-0 left-0 object-cover w-full h-full"
					/>
					<div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full page-container mt-9">
						<h1 className="text-white font-semibold text-[40px] mb-9">
							KHÁM PHÁ
						</h1>
						<img src={bannerVN} alt="banner VN text" className="mb-[31px]" />
						<p className="text-[20px] text-[#DCDCDC] font-medium mb-[104px]">
							"Khi đi du lịch, bạn không chỉ khám phá thế giới bên ngoài mà còn
							khám phá bản thân mình."
						</p>
						<div className="px-[10px] py-3 bg-white rounded flex justify-center items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="#8F8D9B"
								className="w-[33px] h-[33px] mr-[14px]"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
								/>
							</svg>
							<input
								type="text"
								placeholder="Tìm kiếm chuyến đi"
								className="text-base font-semibold w-[400px] mr-[14px]"
							/>
							<button className="py-[10px] px-[14px] text-white bg-[#6557B9] rounded font-semibold text-[13px] hover:opacity-60">
								Tìm kiếm
							</button>
						</div>
					</div>
				</div>
				<div className="page-container">
					<HeadingText
						title={"Chúng tôi cung cấp dịch vụ"}
						desc={
							"Chúng tôi tự hào cung cấp cho quý khách hàng các dịch vụ du lịch chất lượng cao với sự tận tâm và chuyên nghiệp của đội ngũ nhân viên tận tâm."
						}
					></HeadingText>
					<div className="flex items-center justify-center gap-x-10 mt-[76px]">
						<div className="bg-white p-[30px] shadow-[0px_20px_80px_rgba(45,51,60,0.1)] max-w-[326px]">
							<div className=" flex items-center justify-center mb-[55px] rounded-[8px] overflow-hidden w-[90px] h-[90px] ">
								<img
									src="/images/service1.png"
									alt="service icon 1"
									className="object-cover"
								/>
							</div>
							<h5 className="text-[#1E2A39] font-semibold text-2xl mb-2">
								Lựa chọn địa điểm
							</h5>
							<p className="text-[#5C6272]">
								Tìm kiếm và lựa chọn đĩa điểm bạn muốn đi
							</p>
						</div>
						<div className="bg-white p-[30px] shadow-[0px_20px_80px_rgba(45,51,60,0.2)] max-w-[326px]">
							<div className=" flex items-center justify-center mb-[55px] rounded-[8px] overflow-hidden w-[90px] h-[90px] ">
								<img
									src="/images/service2.png"
									alt="service icon 1"
									className="object-cover"
								/>
							</div>
							<h5 className="text-[#1E2A39] font-semibold text-2xl mb-2">
								Đặt chuyến đi
							</h5>
							<p className="text-[#5C6272]">
								Đặt chuyến đi với những điều kiện bạn đưa ra
							</p>
						</div>
						<div className="bg-white p-[30px] shadow-[0px_20px_80px_rgba(45,51,60,0.1)] max-w-[326px]">
							<div className=" flex items-center justify-center mb-[55px] rounded-[8px] overflow-hidden w-[90px] h-[90px] ">
								<img
									src="/images/service3.png"
									alt="service icon 1"
									className="object-cover"
								/>
							</div>
							<h5 className="text-[#1E2A39] font-semibold text-2xl mb-2">
								Đi và chill thui
							</h5>
							<p className="text-[#5C6272]">
								Cùng tận hưởng chuyến đi của bạn nào
							</p>
						</div>
					</div>

					<HeadingText
						title={"Những địa điểm nổi tiếng"}
						desc={
							"Với sự đa dạng trong cảnh quan, văn hóa và lịch sử, những địa điểm này đều mang lại cho du khách những trải nghiệm khó quên."
						}
					></HeadingText>

					<Swiper
						grabCursor={true}
						spaceBetween={35}
						slidesPerView={4}
						navigation={true}
						modules={[Navigation]}
						className="mySwiper max-w-[1440px] !mx-[103px] mt-[77px]"
					>
						<SwiperSlide className="max-w-[300px] h-auto">
							<div className="flex flex-col items-start justify-center px-4 pt-4 pb-6 bg-white gap-y-5 w-[282px] h-[385px]">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Bai-sao-phu-quoc-tuonglamphotos.jpg"
									alt="popular location"
									className="object-cover w-full h-full rounded-xl"
								/>
								<h5 className="text-[#1E2A39] font-semibold text-2xl">
									Phú Quốc
								</h5>
								<div className="flex items-center justify-between w-full gap-x-5">
									<div className="flex items-center justify-center gap-x-[6px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="#7C8290"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
										<p className="font-medium text-[#7C8290]">2 ngày/1 đêm</p>
									</div>
									<p className="text-[#EE6D52] font-medium">$3 triệu</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="max-w-[300px] h-auto">
							<div className="flex flex-col items-start justify-center px-4 pt-4 pb-6 bg-white gap-y-5 w-[282px] h-[385px]">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Bai-sao-phu-quoc-tuonglamphotos.jpg"
									alt="popular location"
									className="object-cover w-full h-full rounded-xl"
								/>
								<h5 className="text-[#1E2A39] font-semibold text-2xl">
									Phú Quốc
								</h5>
								<div className="flex items-center justify-between w-full gap-x-5">
									<div className="flex items-center justify-center gap-x-[6px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="#7C8290"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
										<p className="font-medium text-[#7C8290]">2 ngày/1 đêm</p>
									</div>
									<p className="text-[#EE6D52] font-medium">$3 triệu</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="max-w-[300px] h-auto">
							<div className="flex flex-col items-start justify-center px-4 pt-4 pb-6 bg-white gap-y-5 w-[282px] h-[385px]">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Bai-sao-phu-quoc-tuonglamphotos.jpg"
									alt="popular location"
									className="object-cover w-full h-full rounded-xl"
								/>
								<h5 className="text-[#1E2A39] font-semibold text-2xl">
									Phú Quốc
								</h5>
								<div className="flex items-center justify-between w-full gap-x-5">
									<div className="flex items-center justify-center gap-x-[6px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="#7C8290"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
										<p className="font-medium text-[#7C8290]">2 ngày/1 đêm</p>
									</div>
									<p className="text-[#EE6D52] font-medium">$3 triệu</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="max-w-[300px] h-auto">
							<div className="flex flex-col items-start justify-center px-4 pt-4 pb-6 bg-white gap-y-5 w-[282px] h-[385px]">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Bai-sao-phu-quoc-tuonglamphotos.jpg"
									alt="popular location"
									className="object-cover w-full h-full rounded-xl"
								/>
								<h5 className="text-[#1E2A39] font-semibold text-2xl">
									Phú Quốc
								</h5>
								<div className="flex items-center justify-between w-full gap-x-5">
									<div className="flex items-center justify-center gap-x-[6px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="#7C8290"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
										<p className="font-medium text-[#7C8290]">2 ngày/1 đêm</p>
									</div>
									<p className="text-[#EE6D52] font-medium">$3 triệu</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="max-w-[300px] h-auto">
							<div className="flex flex-col items-start justify-center px-4 pt-4 pb-6 bg-white gap-y-5 w-[282px] h-[385px]">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Bai-sao-phu-quoc-tuonglamphotos.jpg"
									alt="popular location"
									className="object-cover w-full h-full rounded-xl"
								/>
								<h5 className="text-[#1E2A39] font-semibold text-2xl">
									Phú Quốc
								</h5>
								<div className="flex items-center justify-between w-full gap-x-5">
									<div className="flex items-center justify-center gap-x-[6px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="#7C8290"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
										<p className="font-medium text-[#7C8290]">2 ngày/1 đêm</p>
									</div>
									<p className="text-[#EE6D52] font-medium">$3 triệu</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="max-w-[300px] h-auto">
							<div className="flex flex-col items-start justify-center px-4 pt-4 pb-6 bg-white gap-y-5 w-[282px] h-[385px]">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Bai-sao-phu-quoc-tuonglamphotos.jpg"
									alt="popular location"
									className="object-cover w-full h-full rounded-xl"
								/>
								<h5 className="text-[#1E2A39] font-semibold text-2xl">
									Phú Quốc
								</h5>
								<div className="flex items-center justify-between w-full gap-x-5">
									<div className="flex items-center justify-center gap-x-[6px]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="#7C8290"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
										<p className="font-medium text-[#7C8290]">2 ngày/1 đêm</p>
									</div>
									<p className="text-[#EE6D52] font-medium">$3 triệu</p>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>

					<HeadingText
						title={"Đối tác của chúng tôi"}
						desc={
							"Chúng tôi chọn lựa các đối tác của mình dựa trên tiêu chí chất lượng dịch vụ, giá cả hợp lý, sự đa dạng về lựa chọn sản phẩm và dịch vụ."
						}
					></HeadingText>

					<div className="flex items-center justify-center gap-x-12 mt-[66px]">
						<img src={doitac1} alt="doi tac logo" />
						<img src={doitac2} alt="doi tac logo" />
						<img src={doitac3} alt="doi tac logo" />
						<img src={doitac4} alt="doi tac logo" />
					</div>

					<HeadingText
						title={"Khách hàng của chúng tôi"}
						desc={
							"Khách hàng của chúng tôi là động lực và nguồn động viên để chúng tôi luôn nỗ lực cải tiến và hoàn thiện hơn nữa dịch vụ của mình."
						}
					></HeadingText>

					<Swiper
						grabCursor={true}
						spaceBetween={103}
						slidesPerView={3}
						navigation={true}
						modules={[Navigation]}
						className="mySwiper max-w-[1440px] !mx-[166px] mt-[90px] mb-[150px]"
					>
						<SwiperSlide className="max-w-[300px] h-auto">
							<div className="flex flex-col items-center justify-center px-8 py-[30px] bg-white w-[300px] h-full shadow-lg rounded-xl">
								<img
									src="https://vti.com.vn/wp-content/uploads/2021/06/Avatar_CEO-Tran-Xuan-Khoi@3x-807x800.png"
									alt="client avatar"
									className="object-cover w-[77px] h-[77px] rounded-full mb-[37px]"
								/>
								<h5 className="text-[#292929] font-semibold text-xl">
									Sayem Ahmed
								</h5>
								<p className="text-[#6D7487] text-sm mb-[60px]">
									Product designer
								</p>
								<div className="flex flex-col items-start justify-between gap-y-[17px]">
									<svg
										width="93"
										height="16"
										viewBox="0 0 93 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8 0L10.022 5.21698L15.6085 5.52786L11.2716 9.06302L12.7023 14.4721L8 11.44L3.29772 14.4721L4.72837 9.06302L0.391548 5.52786L5.97802 5.21698L8 0Z"
											fill="#FAB33F"
										/>
										<path
											d="M27.2 0L29.222 5.21698L34.8085 5.52786L30.4716 9.06302L31.9023 14.4721L27.2 11.44L22.4977 14.4721L23.9284 9.06302L19.5916 5.52786L25.178 5.21698L27.2 0Z"
											fill="#FAB33F"
										/>
										<path
											d="M46.4 0L48.422 5.21698L54.0085 5.52786L49.6717 9.06302L51.1023 14.4721L46.4 11.44L41.6977 14.4721L43.1284 9.06302L38.7916 5.52786L44.378 5.21698L46.4 0Z"
											fill="#FAB33F"
										/>
										<path
											d="M65.6 0L67.622 5.21698L73.2084 5.52786L68.8716 9.06302L70.3023 14.4721L65.6 11.44L60.8977 14.4721L62.3283 9.06302L57.9915 5.52786L63.578 5.21698L65.6 0Z"
											fill="#FAB33F"
										/>
										<path
											d="M84.8 0L86.822 5.21698L92.4084 5.52786L88.0716 9.06302L89.5023 14.4721L84.8 11.44L80.0977 14.4721L81.5284 9.06302L77.1915 5.52786L82.778 5.21698L84.8 0Z"
											fill="#FAB33F"
										/>
									</svg>

									<p className="text-[#646670] text-base">
										Before we define any approach, we need to define the brands'
										overall goal. We then need to dive.
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="max-w-[300px] h-auto">
							<div className="flex flex-col items-center justify-center px-8 py-[30px] bg-white w-[300px] h-full shadow-lg rounded-xl">
								<img
									src="https://vti.com.vn/wp-content/uploads/2021/06/Avatar_CEO-Tran-Xuan-Khoi@3x-807x800.png"
									alt="client avatar"
									className="object-cover w-[77px] h-[77px] rounded-full mb-[37px]"
								/>
								<h5 className="text-[#292929] font-semibold text-xl">
									Sayem Ahmed
								</h5>
								<p className="text-[#6D7487] text-sm mb-[60px]">
									Product designer
								</p>
								<div className="flex flex-col items-start justify-between gap-y-[17px]">
									<svg
										width="93"
										height="16"
										viewBox="0 0 93 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8 0L10.022 5.21698L15.6085 5.52786L11.2716 9.06302L12.7023 14.4721L8 11.44L3.29772 14.4721L4.72837 9.06302L0.391548 5.52786L5.97802 5.21698L8 0Z"
											fill="#FAB33F"
										/>
										<path
											d="M27.2 0L29.222 5.21698L34.8085 5.52786L30.4716 9.06302L31.9023 14.4721L27.2 11.44L22.4977 14.4721L23.9284 9.06302L19.5916 5.52786L25.178 5.21698L27.2 0Z"
											fill="#FAB33F"
										/>
										<path
											d="M46.4 0L48.422 5.21698L54.0085 5.52786L49.6717 9.06302L51.1023 14.4721L46.4 11.44L41.6977 14.4721L43.1284 9.06302L38.7916 5.52786L44.378 5.21698L46.4 0Z"
											fill="#FAB33F"
										/>
										<path
											d="M65.6 0L67.622 5.21698L73.2084 5.52786L68.8716 9.06302L70.3023 14.4721L65.6 11.44L60.8977 14.4721L62.3283 9.06302L57.9915 5.52786L63.578 5.21698L65.6 0Z"
											fill="#FAB33F"
										/>
										<path
											d="M84.8 0L86.822 5.21698L92.4084 5.52786L88.0716 9.06302L89.5023 14.4721L84.8 11.44L80.0977 14.4721L81.5284 9.06302L77.1915 5.52786L82.778 5.21698L84.8 0Z"
											fill="#FAB33F"
										/>
									</svg>

									<p className="text-[#646670] text-base">
										Before we define any approach, we need to define the brands'
										overall goal. We then need to dive.
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="max-w-[300px] h-auto">
							<div className="flex flex-col items-center justify-center px-8 py-[30px] bg-white w-[300px] h-full shadow-lg rounded-xl">
								<img
									src="https://vti.com.vn/wp-content/uploads/2021/06/Avatar_CEO-Tran-Xuan-Khoi@3x-807x800.png"
									alt="client avatar"
									className="object-cover w-[77px] h-[77px] rounded-full mb-[37px]"
								/>
								<h5 className="text-[#292929] font-semibold text-xl">
									Sayem Ahmed
								</h5>
								<p className="text-[#6D7487] text-sm mb-[60px]">
									Product designer
								</p>
								<div className="flex flex-col items-start justify-between gap-y-[17px]">
									<svg
										width="93"
										height="16"
										viewBox="0 0 93 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8 0L10.022 5.21698L15.6085 5.52786L11.2716 9.06302L12.7023 14.4721L8 11.44L3.29772 14.4721L4.72837 9.06302L0.391548 5.52786L5.97802 5.21698L8 0Z"
											fill="#FAB33F"
										/>
										<path
											d="M27.2 0L29.222 5.21698L34.8085 5.52786L30.4716 9.06302L31.9023 14.4721L27.2 11.44L22.4977 14.4721L23.9284 9.06302L19.5916 5.52786L25.178 5.21698L27.2 0Z"
											fill="#FAB33F"
										/>
										<path
											d="M46.4 0L48.422 5.21698L54.0085 5.52786L49.6717 9.06302L51.1023 14.4721L46.4 11.44L41.6977 14.4721L43.1284 9.06302L38.7916 5.52786L44.378 5.21698L46.4 0Z"
											fill="#FAB33F"
										/>
										<path
											d="M65.6 0L67.622 5.21698L73.2084 5.52786L68.8716 9.06302L70.3023 14.4721L65.6 11.44L60.8977 14.4721L62.3283 9.06302L57.9915 5.52786L63.578 5.21698L65.6 0Z"
											fill="#FAB33F"
										/>
										<path
											d="M84.8 0L86.822 5.21698L92.4084 5.52786L88.0716 9.06302L89.5023 14.4721L84.8 11.44L80.0977 14.4721L81.5284 9.06302L77.1915 5.52786L82.778 5.21698L84.8 0Z"
											fill="#FAB33F"
										/>
									</svg>

									<p className="text-[#646670] text-base">
										Before we define any approach, we need to define the brands'
										overall goal. We then need to dive.
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="max-w-[300px] h-auto">
							<div className="flex flex-col items-center justify-center px-8 py-[30px] bg-white w-[300px] h-full shadow-lg rounded-xl">
								<img
									src="https://vti.com.vn/wp-content/uploads/2021/06/Avatar_CEO-Tran-Xuan-Khoi@3x-807x800.png"
									alt="client avatar"
									className="object-cover w-[77px] h-[77px] rounded-full mb-[37px]"
								/>
								<h5 className="text-[#292929] font-semibold text-xl">
									Sayem Ahmed
								</h5>
								<p className="text-[#6D7487] text-sm mb-[60px]">
									Product designer
								</p>
								<div className="flex flex-col items-start justify-between gap-y-[17px]">
									<svg
										width="93"
										height="16"
										viewBox="0 0 93 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8 0L10.022 5.21698L15.6085 5.52786L11.2716 9.06302L12.7023 14.4721L8 11.44L3.29772 14.4721L4.72837 9.06302L0.391548 5.52786L5.97802 5.21698L8 0Z"
											fill="#FAB33F"
										/>
										<path
											d="M27.2 0L29.222 5.21698L34.8085 5.52786L30.4716 9.06302L31.9023 14.4721L27.2 11.44L22.4977 14.4721L23.9284 9.06302L19.5916 5.52786L25.178 5.21698L27.2 0Z"
											fill="#FAB33F"
										/>
										<path
											d="M46.4 0L48.422 5.21698L54.0085 5.52786L49.6717 9.06302L51.1023 14.4721L46.4 11.44L41.6977 14.4721L43.1284 9.06302L38.7916 5.52786L44.378 5.21698L46.4 0Z"
											fill="#FAB33F"
										/>
										<path
											d="M65.6 0L67.622 5.21698L73.2084 5.52786L68.8716 9.06302L70.3023 14.4721L65.6 11.44L60.8977 14.4721L62.3283 9.06302L57.9915 5.52786L63.578 5.21698L65.6 0Z"
											fill="#FAB33F"
										/>
										<path
											d="M84.8 0L86.822 5.21698L92.4084 5.52786L88.0716 9.06302L89.5023 14.4721L84.8 11.44L80.0977 14.4721L81.5284 9.06302L77.1915 5.52786L82.778 5.21698L84.8 0Z"
											fill="#FAB33F"
										/>
									</svg>

									<p className="text-[#646670] text-base">
										Before we define any approach, we need to define the brands'
										overall goal. We then need to dive.
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="max-w-[300px] h-auto">
							<div className="flex flex-col items-center justify-center px-8 py-[30px] bg-white w-[300px] h-full shadow-lg rounded-xl">
								<img
									src="https://vti.com.vn/wp-content/uploads/2021/06/Avatar_CEO-Tran-Xuan-Khoi@3x-807x800.png"
									alt="client avatar"
									className="object-cover w-[77px] h-[77px] rounded-full mb-[37px]"
								/>
								<h5 className="text-[#292929] font-semibold text-xl">
									Sayem Ahmed
								</h5>
								<p className="text-[#6D7487] text-sm mb-[60px]">
									Product designer
								</p>
								<div className="flex flex-col items-start justify-between gap-y-[17px]">
									<svg
										width="93"
										height="16"
										viewBox="0 0 93 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8 0L10.022 5.21698L15.6085 5.52786L11.2716 9.06302L12.7023 14.4721L8 11.44L3.29772 14.4721L4.72837 9.06302L0.391548 5.52786L5.97802 5.21698L8 0Z"
											fill="#FAB33F"
										/>
										<path
											d="M27.2 0L29.222 5.21698L34.8085 5.52786L30.4716 9.06302L31.9023 14.4721L27.2 11.44L22.4977 14.4721L23.9284 9.06302L19.5916 5.52786L25.178 5.21698L27.2 0Z"
											fill="#FAB33F"
										/>
										<path
											d="M46.4 0L48.422 5.21698L54.0085 5.52786L49.6717 9.06302L51.1023 14.4721L46.4 11.44L41.6977 14.4721L43.1284 9.06302L38.7916 5.52786L44.378 5.21698L46.4 0Z"
											fill="#FAB33F"
										/>
										<path
											d="M65.6 0L67.622 5.21698L73.2084 5.52786L68.8716 9.06302L70.3023 14.4721L65.6 11.44L60.8977 14.4721L62.3283 9.06302L57.9915 5.52786L63.578 5.21698L65.6 0Z"
											fill="#FAB33F"
										/>
										<path
											d="M84.8 0L86.822 5.21698L92.4084 5.52786L88.0716 9.06302L89.5023 14.4721L84.8 11.44L80.0977 14.4721L81.5284 9.06302L77.1915 5.52786L82.778 5.21698L84.8 0Z"
											fill="#FAB33F"
										/>
									</svg>

									<p className="text-[#646670] text-base">
										Before we define any approach, we need to define the brands'
										overall goal. We then need to dive.
									</p>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</Layout>
	);
};

export default HomePage;
