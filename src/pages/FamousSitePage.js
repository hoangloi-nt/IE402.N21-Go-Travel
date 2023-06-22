import React, { useEffect, useState } from "react";
import Layout from "components/layout/Layout";
import FamousSite from "components/famousSite";
import { SwiperSlide, Swiper } from "swiper/react";
import bannerImg from "assets/images/banner-img.png";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import axios from "axios";
import { BounceLoading } from "components/bounceLoading";

const FamousSitePage = () => {
  const [locations, setLocations] = useState({
    location1: [],
    location2: [],
    location3: [],
  });
  const [loading, setLoading] = useState(false);

  const fetchDataLocation = async ({ offset, limit }) => {
    try {
      const response = await axios.request({
        method: "GET",
        url: "https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary",
        params: {
          tr_longitude: "109.262909",
          tr_latitude: "12.346705",
          bl_longitude: "109.095887",
          bl_latitude: "12.113245",
          currency: "USD",
          lunit: "km",
          lang: "en_US",
          offset: offset,
          limit: limit,
        },
        headers: {
          "X-RapidAPI-Key":
            "75e6f4b7e6msh9280109288d26a3p1e1c83jsn0c41f1586d8f",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      });
      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  };

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
      }))
    );
    fetchDataLocation({ offset: 50, limit: 20 }).then((data) =>
      setLocations((prevState) => ({
        ...prevState,
        location3: data,
      }))
    );
  }, []);

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
		  {loading &&  <BounceLoading />}
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
                    ></FamousSite>
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </div>
        <div className="mb-[40px]">
          <h1 className="pt-10 mb-[21px] text-2xl font-bold">
            Địa điểm hot gần đậy
          </h1>
		  {loading &&  <BounceLoading />}
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
                    ></FamousSite>
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </div>
        <div className="mb-[40px]">
          <h1 className="pt-10 mb-[21px] text-2xl font-bold">
            Địa điểm thư giãn cho mua hè
          </h1>
		  {loading &&  <BounceLoading />}
          <Swiper
            spaceBetween={35}
            grabCursor={true}
            slidesPerView={4}
            navigation={true}
            modules={[Navigation]}
            initialSlide={3}
            className="mySwiper max-w-[1440px] "
          >
            {locations.location3?.map(
              (item) =>
                item?.name && (
                  <SwiperSlide key={item?.name}>
                    <FamousSite
                      name={item?.name}
                      img={item?.photo?.images?.large?.url}
                    ></FamousSite>
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </div>
      </div>
    </Layout>
  );
};

export default FamousSitePage;
