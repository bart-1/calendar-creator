import React from "react";
import Canvas from "./Canvas";

interface SheetProps {
  id: string;
}

const Sheet = ({id}:SheetProps) => {
  return (
    <>
      <div className="h-screen md:ml-32">
        <div className=" max-w-[80%] aspect-a4 m-auto mt-[2vh] z-1 border-black bg-white shadow-xl">
          <Canvas id={id} />
        </div>
      </div>
    </>
  );
};
export default Sheet;

