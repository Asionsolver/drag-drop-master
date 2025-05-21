import { useRef } from "react";

const Basket = ({ ref }) => {
  return (
    <div
      ref={ref}
      className="w-[300px] h-[300px] mt-20 bg-slate-800 text-gray-500 rounded-md flex "
    ></div>
  );
};

export default Basket;
