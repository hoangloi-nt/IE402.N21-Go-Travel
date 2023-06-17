import React from "react";
import Layout from "components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import EditTour from "components/EditTour";

const FakeTour = {
    Name: "Tour cuối năm",
    Description: "Đi 2 người",
    Month: 6,
    Year: 2023,
}

const Locations = [
    {
        id: 1,
        Name: "Nha Trang",
        Image: "/NhaTrang.jpg",
        Province: "Khánh Hòa",
        Country: "Việt Nam",
        Description: "Vùng biển đẹp",
    },
    {
        id: 2,
        Name: "Đà Lạt",
        Image: "/DaLat.jpg",
        Province: "Lâm Đồng",
        Country: "Việt Nam",
        Description: "Vùng núi đẹp",
    },
    {
        id: 3,
        Name: "Hồ Chí Minh",
        Image: "/HCM.jpg",
        Province: "Hồ Chí Minh",
        Country: "Việt Nam",
        Description: "Vùng đô thị",
    }
]

const TourDetails = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    return (
      <Layout>
        <div className="h-screen bg-white">
          <div className="grid grid-cols-7 relative">

            <div className="max-h-screen col-span-2 overflow-scroll">
                <span className="mt-5 mx-5 flex justify-between">
                    <h5 className="font-medium drop-shadow-md">Tên chuyến đi</h5>
                    {/* <span className="cursor-pointer">•••</span> */}
                </span>
                <p className="mt-3 mx-5 font-light text-[14px] cursor-pointer hover:underline" onClick={openModal}>+Thêm mô tả</p>
                <p className="mt-3 mx-5 mb-5 font-light text-[14px]">Cập nhật tháng {FakeTour.Month} năm {FakeTour.Year}</p>
                <div className="flex flex-col">
                    {Locations.map((location, index) => (
                        <a className="mb-7" href="/">
                            <img src={location.Image} className="w-full"></img>
                            <span className="flex justify-between font-semibold mx-5 mt-5">
                                <p className="hover:underline">{location.Name}</p>
                                <img srcSet="/Delete.png 1x" className="cursor-pointer"></img>
                            </span>
                            <p className="mx-5 mt-2 font-light text-[14px]">{location.Province}, {location.Country}</p>
                        </a>
                    ))}
                </div>
            </div>

            <div className="col-span-5 bg-slate-500">
                <div className="absolute top-5 right-5 p-5 bg-white text-[14px] w-60 rounded-sm drop-shadow-md">
                        <p className="mb-4">Tìm địa điểm</p>
                        <input className="placeholder:text-slate-400 block w-full bg-white border border-slate-300 rounded-md py-1 px-3 shadow-sm focus:outline-none focus:border-slate-500" type="text" name="name" placeholder="Tìm kiếm địa điểm"/>
                </div>
            </div>
            {
                isOpen && (<EditTour close={closeModal} image={Locations[0].Image} name={FakeTour.Name} description={FakeTour.Description}></EditTour>)
            }
          </div>
        </div>
      </Layout>
    );
  };
  
  export default TourDetails;