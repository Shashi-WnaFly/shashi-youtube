
const Sidebar = () => {
  return (
    <div className=" scroll-auto">
      <div className=" p-6 font-semibold">Home</div>
      <div className=" p-6 font-semibold">Shorts</div>
      <div className=" p-6 font-semibold">Subscriptions</div>
      <ul>
        <li className="p-2 hover:bg-[#ecebeb] cursor-pointer">History</li>
        <li className="p-2 hover:bg-[#ecebeb] cursor-pointer">Playlists</li>
        <li className="p-2 hover:bg-[#ecebeb] cursor-pointer">Your videos</li>
        <li className="p-2 hover:bg-[#ecebeb] cursor-pointer">Watch later</li>
        <li className="p-2 hover:bg-[#ecebeb] cursor-pointer">Liked videos</li>
        <li className="p-2 hover:bg-[#ecebeb] cursor-pointer">Downloads</li>
      </ul>
      <div className=" p-6 font-semibold">Subscriptions</div>
      <ul>
        <li className="p-2 hover:bg-[#ecebeb] cursor-pointer">Kunal Kushwaha</li>
        <li className="p-2 hover:bg-[#ecebeb] cursor-pointer">Akshay Saini</li>
        <li className="p-2 hover:bg-[#ecebeb] cursor-pointer">Aditya Verma</li>
        <li className="p-2 hover:bg-[#ecebeb] cursor-pointer">Hitesh Choudhary</li>
      </ul>
      <div className=" p-6 font-semibold">Explore</div>
      <ul>
        <li className="p-2 hover:bg-[#ecebeb] cursor-pointer">Trending</li>
        <li className="p-2 hover:bg-[#ecebeb] cursor-pointer">Shopping</li>
        <li className="p-2 hover:bg-[#ecebeb] cursor-pointer">Music</li>
        <li className="p-2 hover:bg-[#ecebeb] cursor-pointer">Movies</li>
        <li className="p-2 hover:bg-[#ecebeb] cursor-pointer">Live</li>
        <li className="p-2 hover:bg-[#ecebeb] cursor-pointer">Gaming</li>
        <li className="p-2 hover:bg-[#ecebeb] cursor-pointer">News</li>
        <li className="p-2 hover:bg-[#ecebeb] cursor-pointer">Sports</li>
        <li className="p-2 hover:bg-[#ecebeb] cursor-pointer">Course</li>
      </ul>
    </div>
  )
}

export default Sidebar;