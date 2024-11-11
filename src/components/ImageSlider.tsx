import { useState } from "react";
import { Card, Dialog, DialogBody } from "@material-tailwind/react";

export const ImageSlider = ({
  imageList,
  arrowColor,
}: {
  imageList: string[];
  arrowColor: string;
}) => {
  const [slideNum, setSlideNum] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        className="transition-opacity hover:opacity-85 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <img
          src={imageList[slideNum]}
          alt="Project image"
          className="h-full w-full"
        />
      </Card>

      <div className="flex gap-5 place-content-center mt-5">
        <button
          className={`bg-transparent border-0 disabled:cursor-default cursor-pointer rounded-full ${slideNum == 0 ? "hover:bg-none" : "hover:bg-gray-500"}`}
          disabled={slideNum == 0}
          onClick={() => setSlideNum(slideNum - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill={arrowColor == "light" ? "#e5e7e0" : "#05293b"}
          >
            <path d="M560.67-240 320-480.67l240.67-240.66L608-674 414.67-480.67 608-287.33 560.67-240Z" />
          </svg>
        </button>
        <button
          className={`bg-transparent border-0 disabled:cursor-default cursor-pointer rounded-full ${slideNum == imageList.length - 1 ? "hover:bg-none" : "hover:bg-gray-500"}`}
          disabled={slideNum == imageList.length - 1}
          onClick={() => setSlideNum(slideNum + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill={arrowColor == "light" ? "#e5e7e0" : "#05293b"}
          >
            <path d="M521.33-480.67 328-674l47.33-47.33L616-480.67 375.33-240 328-287.33l193.33-193.34Z" />
          </svg>
        </button>
      </div>

      <Dialog
        size="xl"
        className="flex bg-transparent shadow-none"
        open={open}
        handler={() => setOpen(!open)}
      >
        <button
          className={`bg-transparent border-0 disabled:cursor-default cursor-pointer ${slideNum == 0 ? "invisible" : "hover:bg-gray-500"}`}
          disabled={slideNum == 0}
          onClick={() => setSlideNum(slideNum - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50px"
            viewBox="0 -960 960 960"
            width="50px"
            fill="#e5e7e0"
          >
            <path d="M560.67-240 320-480.67l240.67-240.66L608-674 414.67-480.67 608-287.33 560.67-240Z" />
          </svg>
        </button>
        <DialogBody className="p-0">
          <img
            src={imageList[slideNum]}
            alt="Project image"
            className="object-cover w-full h-full"
          />
        </DialogBody>
        <button
          className={`bg-transparent border-0 disabled:cursor-default cursor-pointer ${slideNum == imageList.length - 1 ? "invisible" : "hover:bg-gray-500"}`}
          disabled={slideNum == imageList.length - 1}
          onClick={() => setSlideNum(slideNum + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50px"
            viewBox="0 -960 960 960"
            width="50px"
            fill="#e5e7e0"
          >
            <path d="M521.33-480.67 328-674l47.33-47.33L616-480.67 375.33-240 328-287.33l193.33-193.34Z" />
          </svg>
        </button>
      </Dialog>
    </>
  );
};
