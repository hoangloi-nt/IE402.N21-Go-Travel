import React from "react";

const HeadingText = ({ title, desc }) => {
  return (
    <div className="mt-[120px] px-[172px] text-center flex flex-col justify-center items-center gap-y-[31px]">
      <h2 className="text-[40px] font-semibold">{title}</h2>
      <p className="text-[20px]">{desc}</p>
    </div>
  );
};

export default HeadingText;
