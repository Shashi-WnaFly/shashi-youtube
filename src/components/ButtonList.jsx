import { buttons } from "../utils/constant";

const btnList = buttons.map((str, i) => (
  <button
    className="rounded-lg py-2 px-4 font-medium cursor-pointer bg-[#ecebeb]"
    key={i}
  >
    {str}
  </button>
));
const ButtonList = () => {
  return (
    <div className="pl-4 max-w-7xl overflow-x-hidden ">
      <div className="text-sm text-nowrap flex gap-2 p-3">{btnList}</div>
    </div>
  );
};

export default ButtonList;
