import { useState } from "react";
import rightArrow from "../assets/rightArrow.svg";
import leftArrow from "../assets/leftArrow.svg";

export const ImageSlider = ({ imageList }: { imageList: string[] }) => {
  const [slideNum, setSlideNum] = useState(0);
  return (
    <>
      <img
        src={imageList[slideNum]}
        alt="Project image"
        className="h-full w-full cursor-pointer"
        onClick={() => console.log(imageList[slideNum])}
      />

      <div className="flex gap-5 place-content-center mt-5">
        <button
          className="bg-transparent border-0 hover:bg-[#1d4255] disabled:bg-[#05293b] disabled:cursor-default cursor-pointer rounded-full"
          disabled={slideNum == 0}
          onClick={() => setSlideNum(slideNum - 1)}
        >
          <img
            className="rounded-full w-full h-full"
            src={leftArrow}
            alt="right arrow"
          />
        </button>
        <button
          className="bg-transparent border-0 hover:bg-[#1d4255] disabled:bg-[#05293b] disabled:cursor-default cursor-pointer rounded-full"
          disabled={slideNum == imageList.length - 1}
          onClick={() => setSlideNum(slideNum + 1)}
        >
          <img
            className="rounded-full w-full h-full"
            src={rightArrow}
            alt="right arrow"
          />
        </button>
      </div>
    </>
  );
};
