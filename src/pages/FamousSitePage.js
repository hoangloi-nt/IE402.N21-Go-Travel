import React from "react";
import Layout from "components/layout/Layout";
import FamousSite from "components/famousSite";
import { SwiperSlide, Swiper } from "swiper/react";
import bannerImg from "assets/images/banner-img.png";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
const FamousSitePage = () => {
	return (
		<Layout>
			<div className="w-full h-[760px] mb-[80px] relative">
				<img
					src={bannerImg}
					alt="banner background img"
					className="object-cover w-full h-full"
				/>
				<div className="px-[10px] absolute bottom-[10%] left-[50%] translate-x-[-50%] py-3 bg-white rounded flex justify-center items-center">
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
						placeholder="Tìm kiếm địa điểm yêu thích"
						className="text-base font-semibold w-[700px] mr-[14px]"
					/>
					<button className="py-[10px] px-[14px] text-white bg-[#6557B9] rounded font-semibold text-[13px] min-w-max  hover:opacity-60">
						Tìm kiếm
					</button>
				</div>
			</div>
			<div className="bg-white page-container px-[113px]">
				<div className="mb-[40px]">
					<h1 className="mb-[21px] text-2xl font-bold">Địa điểm nổi tiếng</h1>
					<Swiper
						spaceBetween={35}
						grabCursor={true}
						slidesPerView={4}
						navigation={true}
						modules={[Navigation]}
						initialSlide={3}
						className="mySwiper max-w-[1440px] "
					>
						<SwiperSlide>
							<FamousSite></FamousSite>
						</SwiperSlide>
						<SwiperSlide>
							<FamousSite></FamousSite>
						</SwiperSlide>
						<SwiperSlide>
							<FamousSite></FamousSite>
						</SwiperSlide>
						<SwiperSlide>
							<FamousSite></FamousSite>
						</SwiperSlide>
						<SwiperSlide>
							<FamousSite></FamousSite>
						</SwiperSlide>
						<SwiperSlide>
							<FamousSite></FamousSite>
						</SwiperSlide>
					</Swiper>
				</div>
				<div className="mb-[40px]">
					<h1 className="pt-10 mb-[21px] text-2xl font-bold">
						Địa điểm hot gần đậy
					</h1>
					<Swiper
						spaceBetween={35}
						grabCursor={true}
						slidesPerView={4}
						navigation={true}
						modules={[Navigation]}
						initialSlide={3}
						className="mySwiper max-w-[1440px] "
					>
						<SwiperSlide>
							<FamousSite></FamousSite>
						</SwiperSlide>
						<SwiperSlide>
							<FamousSite></FamousSite>
						</SwiperSlide>
						<SwiperSlide>
							<FamousSite></FamousSite>
						</SwiperSlide>
						<SwiperSlide>
							<FamousSite></FamousSite>
						</SwiperSlide>
						<SwiperSlide>
							<FamousSite></FamousSite>
						</SwiperSlide>
						<SwiperSlide>
							<FamousSite></FamousSite>
						</SwiperSlide>
					</Swiper>
				</div>
				<div className="mb-[40px]">
					<h1 className="pt-10 mb-[21px] text-2xl font-bold">
						Địa điểm thư giãn cho mua hè
					</h1>
					<Swiper
						spaceBetween={35}
						grabCursor={true}
						slidesPerView={4}
						navigation={true}
						modules={[Navigation]}
						initialSlide={3}
						className="mySwiper max-w-[1440px] "
					>
						<SwiperSlide>
							<FamousSite></FamousSite>
						</SwiperSlide>
						<SwiperSlide>
							<FamousSite></FamousSite>
						</SwiperSlide>
						<SwiperSlide>
							<FamousSite></FamousSite>
						</SwiperSlide>
						<SwiperSlide>
							<FamousSite></FamousSite>
						</SwiperSlide>
						<SwiperSlide>
							<FamousSite></FamousSite>
						</SwiperSlide>
						<SwiperSlide>
							<FamousSite></FamousSite>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</Layout>
	);
};

export default FamousSitePage;