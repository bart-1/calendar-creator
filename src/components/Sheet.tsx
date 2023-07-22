import React from "react";

interface SheetProps {}

const Sheet = () => {
  return (
    <>
      <div className="h-screen md:ml-32">
        <div className=" max-w-[80%] aspect-a4 m-auto mt-[2vh] z-1 border-black bg-white shadow-xl"></div>
      </div>
    </>
  );
};
export default Sheet;

