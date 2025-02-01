import { buttons } from "../utils/constant";

const btnList = buttons.map((str, i) => <button className=" rounded-2xl py-2 px-4 font-medium bg-[#ecebeb]" key={i}>{str}</button>);
const ButtonList = () => {
  return (
    <div className="flex gap-4 text-sm pl-10">{btnList}</div>
  )
}

export default ButtonList;