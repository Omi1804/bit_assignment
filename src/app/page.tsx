import React from "react";

const Page = () => {
  return (
    <div className="flex-1 h-full">
      <div className="h-14 border-b border-neutral-200 flex items-center justify-end">
        <div className="flex items-center bg-[#448361]/50">
          <img src="/coin.svg" alt="Coin" className="w-4 h-4" />
          <p className="text-[#448361]">196/200</p>
          <p className="text-white bg-green-800 px-1 rounded-sm">Free</p>
        </div>
        <div className="w-5 h-5 rounded-full bg-blue-600">Om</div>
      </div>
      <div></div>
    </div>
  );
};

export default Page;
