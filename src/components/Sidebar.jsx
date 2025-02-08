import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenu = useSelector((store) => store.app.isMenuOpen);

  if(!isMenu) return;
  return (
    <div className=" col-span-4 ">
      <div className="flex flex-col gap-2">
        <div className=" p-2 font-semibold cursor-pointer">Home</div>
        <div className=" p-2 font-semibold cursor-pointer">Shorts</div>
        <div className=" p-2 font-semibold cursor-pointer">Subscriptions</div>
        <hr className="text-gray-300"></hr>
      </div>
      <div className="text-lg font-semibold p-2 hover:bg-[#f7f2f2] cursor-pointer">You {">"}</div>
      <ul className="flex flex-col pl-2">
        <li className="p-2 hover:bg-[#f7f2f2] cursor-pointer">History</li>
        <li className="p-2 hover:bg-[#f7f2f2] cursor-pointer">Playlists</li>
        <li className="p-2 hover:bg-[#f7f2f2] cursor-pointer">Your videos</li>
        <li className="p-2 hover:bg-[#f7f2f2] cursor-pointer">Watch later</li>
        <li className="p-2 hover:bg-[#f7f2f2] cursor-pointer">Liked videos</li>
        <li className="p-2 hover:bg-[#f7f2f2] cursor-pointer">Downloads</li>
      </ul>
      <div className=" text-lg font-semibold p-2">Subscriptions</div>
      <ul className="flex flex-col pl-2">
        <li className="p-2 hover:bg-[#f7f2f2] cursor-pointer">
          Kunal Kushwaha
        </li>
        <li className="p-2 hover:bg-[#f7f2f2] cursor-pointer">Akshay Saini</li>
        <li className="p-2 hover:bg-[#f7f2f2] cursor-pointer">Aditya Verma</li>
        <li className="p-2 hover:bg-[#f7f2f2] cursor-pointer">
          Hitesh Choudhary
        </li>
      </ul>
      <div className=" text-lg font-semibold p-2">Explore</div>
      <ul className="flex flex-col pl-2">
        <li className="p-2 hover:bg-[#f7f2f2] cursor-pointer">Trending</li>
        <li className="p-2 hover:bg-[#f7f2f2] cursor-pointer">Shopping</li>
        <li className="p-2 hover:bg-[#f7f2f2] cursor-pointer">Music</li>
        <li className="p-2 hover:bg-[#f7f2f2] cursor-pointer">Movies</li>
        <li className="p-2 hover:bg-[#f7f2f2] cursor-pointer">Live</li>
        <li className="p-2 hover:bg-[#f7f2f2] cursor-pointer">Gaming</li>
        <li className="p-2 hover:bg-[#f7f2f2] cursor-pointer">News</li>
        <li className="p-2 hover:bg-[#f7f2f2] cursor-pointer">Sports</li>
        <li className="p-2 hover:bg-[#f7f2f2] cursor-pointer">Course</li>
      </ul>
    </div>
  );
};

export default Sidebar;
