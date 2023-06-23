import { Rating } from "@material-ui/lab";
import React from "react";

const FamousSite = ({ img, name, url = "", rating, review }) => {
  return (
    <a
      href={url}
      target="_blank"
      className="flex flex-col items-start justify-center h-[385px]"
      rel="noreferrer"
    >
      <img
        src={img || "https://loremflickr.com/320/280/vietnam,tourism"}
        alt="popular location"
        className="object-none aspect-square rounded-xl"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = "https://i.imgur.com/hfM1J8s.png";
        }}
      />
      <h5 className="text-[#1E2A39] font-semibold text-[18px] truncate max-w-full mt-5">
        {name}
      </h5>
      <div className="flex items-center justify-between w-full gap-x-5">
        {rating ? (
          <div className="flex items-center mt-2 text-[12px] gap-[10px]">
            <Rating
              name="read-only"
              size="small"
              value={Number(rating)}
              readOnly
            />
            <p className="font-medium">{review}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </a>
  );
};

export default FamousSite;
