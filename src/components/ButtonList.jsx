import { buttons } from "../utils/constant";

const btnList = buttons.map((str, i) => <button className=" text-nowrap w-[84] rounded-2xl py-2 px-4 font-medium bg-[#ecebeb]" key={i}>{str}</button>);
const ButtonList = () => {
  return (
    <div className="flex gap-4 text-sm pl-10 bg-white overflow-x-scroll">{btnList}</div>
  )
}

export default ButtonList;