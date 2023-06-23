import React, { useEffect, useState } from "react";
import Layout from "components/layout/Layout";
import FamousSite from "components/famousSite";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { BounceLoading } from "components/bounceLoading";
import { fetchDataLocation } from "api";

const FamousSitePage = () => {
	const [locations, setLocations] = useState({
		location1: [],
		location2: [],
		location3: [],
	});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetchDataLocation({ offset: 0, limit: 20 }).then((data) => {
			setLocations((prevState) => ({
				...prevState,
				location1: data,
			}));
			setLoading(false);
		});
		fetchDataLocation({ offset: 25, limit: 20 }).then((data) =>
			setLocations((prevState) => ({
				...prevState,
				location2: data,
			})),
		);
		fetchDataLocation({ offset: 50, limit: 20 }).then((data) =>
			setLocations((prevState) => ({
				...prevState,
				location3: data,
			})),
		);
	}, []);

	return (
		<Layout>
			<div className="bg-white page-container px-[113px] mt-12">
				<div className="mb-[40px]">
					<h1 className="mb-[21px] text-2xl font-bold">Địa điểm nổi tiếng</h1>
					{loading && <BounceLoading />}
					<Swiper
						spaceBetween={35}
						grabCursor={true}
						slidesPerView={4}
						navigation={true}
						modules={[Navigation]}
						initialSlide={3}
						className="mySwiper max-w-[1440px] "
					>
						{locations.location1?.map(
							(item) =>
								item?.name && (
									<SwiperSlide key={item?.name}>
										<FamousSite
											name={item?.name}
											img={item?.photo?.images?.large?.url}
											url={item?.web_url}
											rating={item?.rating}
											review={item?.num_reviews}
										></FamousSite>
									</SwiperSlide>
								),
						)}
					</Swiper>
				</div>
				<div className="mb-[40px]">
					<h1 className="pt-10 mb-[21px] text-2xl font-bold">
						Địa điểm hot gần đây
					</h1>
					{loading && <BounceLoading />}
					<Swiper
						spaceBetween={35}
						grabCursor={true}
						slidesPerView={4}
						navigation={true}
						modules={[Navigation]}
						initialSlide={3}
						className="mySwiper max-w-[1440px] "
					>
						{locations.location2?.map(
							(item) =>
								item?.name && (
									<SwiperSlide key={item?.name}>
										<FamousSite
											name={item?.name}
											img={item?.photo?.images?.large?.url}
											url={item?.web_url}
											rating={item?.rating}
											review={item?.num_reviews}
										></FamousSite>
									</SwiperSlide>
								),
						)}
					</Swiper>
				</div>
				<div className="mb-[40px]">
					<h1 className="pt-10 mb-[21px] text-2xl font-bold">
						Địa điểm thư giãn cho mua hè
					</h1>
					{loading && <BounceLoading />}
					<Swiper
						spaceBetween={35}
						grabCursor={true}
						slidesPerView={4}
						navigation={true}
						modules={[Navigation]}
						initialSlide={3}
						className="mySwiper max-w-[1440px] "
					>
						{console.log(locations.location3)}
						{locations.location3?.map(
							(item) =>
								item?.name && (
									<SwiperSlide key={item?.name}>
										<FamousSite
											name={item?.name}
											img={item?.photo?.images?.large?.url}
											url={item?.web_url}
											rating={item?.rating}
											review={item?.num_reviews}
										></FamousSite>
									</SwiperSlide>
								),
						)}
					</Swiper>
				</div>
			</div>
		</Layout>
	);
};

export default FamousSitePage;
