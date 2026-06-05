import Avatar from "../ui/Avatar";

const DashBoardHeader = () => {
  return (
    <header className="flex h-14 shrink-0 items-center justify-end border-b border-neutral-200 px-5">
      <div className="flex items-center gap-3">
        <div className="flex h-9 items-center gap-3 rounded-[12px] bg-[#edf5ec] pl-3 pr-1.5 text-[#438361]">
          <img src="/coin.svg" alt="coin" className="w-4 h-4" />
          <p className="text-sm font-medium tracking-normal">450000/5500000</p>
          <span className="rounded-[10px] bg-[#438361] px-3 py-1 text-xs font-semibold text-white">
            Booster Plan
          </span>
        </div>

        <Avatar aria-label="Current user" varient={1} className="w-8 h-8" />
      </div>
    </header>
  );
};

export default DashBoardHeader;
