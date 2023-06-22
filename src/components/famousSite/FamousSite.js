import React from "react";

const FamousSite = ({ img, name }) => {
  return (
    <div className="flex flex-col items-start justify-center gap-y-5 h-[385px]">
      <img
        src={img || "https://loremflickr.com/320/280/vietnam,tourism"}
        alt="popular location"
        className="object-none aspect-square rounded-xl"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = "https://i.imgur.com/hfM1J8s.png";
        }}
      />
      <h5 className="text-[#1E2A39] font-semibold text-[18px] truncate max-w-full">
        {name}
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
  );
};

export default FamousSite;
