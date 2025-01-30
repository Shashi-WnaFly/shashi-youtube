
const Sidebar = () => {
  return (
    <div className="w-64">
      <div className=" p-6 font-semibold">Home</div>
      <div className=" p-6 font-semibold">Shorts</div>
      <div className=" p-6 font-semibold">Subscriptions</div>
      <ul>
        <li className="p-2 hover:bg-[#f8f8f8] cursor-pointer">History</li>
        <li className="p-2 hover:bg-[#f8f8f8] cursor-pointer">Playlists</li>
        <li className="p-2 hover:bg-[#f8f8f8] cursor-pointer">Your videos</li>
        <li className="p-2 hover:bg-[#f8f8f8] cursor-pointer">Watch later</li>
        <li className="p-2 hover:bg-[#f8f8f8] cursor-pointer">Liked videos</li>
        <li className="p-2 hover:bg-[#f8f8f8] cursor-pointer">Downloads</li>
      </ul>
      <div className=" p-6 font-semibold">Subscriptions</div>
      <ul>
        <li className="p-2 hover:bg-[#f8f8f8] cursor-pointer">Kunal Kushwaha</li>
        <li className="p-2 hover:bg-[#f8f8f8] cursor-pointer">Akshay Saini</li>
        <li className="p-2 hover:bg-[#f8f8f8] cursor-pointer">Aditya Verma</li>
        <li className="p-2 hover:bg-[#f8f8f8] cursor-pointer">Hitesh Choudhary</li>
      </ul>
      <div className=" p-6 font-semibold">Explore</div>
      <ul>
        <li className="p-2 hover:bg-[#f8f8f8] cursor-pointer">Trending</li>
        <li className="p-2 hover:bg-[#f8f8f8] cursor-pointer">Shopping</li>
        <li className="p-2 hover:bg-[#f8f8f8] cursor-pointer">Music</li>
        <li className="p-2 hover:bg-[#f8f8f8] cursor-pointer">Movies</li>
        <li className="p-2 hover:bg-[#f8f8f8] cursor-pointer">Live</li>
        <li className="p-2 hover:bg-[#f8f8f8] cursor-pointer">Gaming</li>
        <li className="p-2 hover:bg-[#f8f8f8] cursor-pointer">News</li>
        <li className="p-2 hover:bg-[#f8f8f8] cursor-pointer">Sports</li>
        <li className="p-2 hover:bg-[#f8f8f8] cursor-pointer">Course</li>
      </ul>
    </div>
  )
}

export default Sidebar;