import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import SideVideoCard from "./SideVideoCard";
import Comments from "./Comments";
import { SlArrowDown } from "react-icons/sl";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const popularVideos = useSelector((store) => store.app.popularYoutubeVideos);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  

  if (!popularVideos) return null;

  return (
    <div className="w-screen">
      <div className="grid grid-flow-col w-[85%] m-auto">
        <div className=" grid col-span-4 pt-6 pr-6">
          <iframe
            className=" rounded-2xl"
            width="853"
            height="480"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?autoplay=1"
            }
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="grid pt-6 ">
          <div className="w-full h-[480px] border-1 p-2 rounded-lg">
            <div className="p-2 font-semibold flex items-center">Live Chat <span className="pl-2 text-sm"><SlArrowDown /></span></div>
            <Comments user={"Shashi Anand"} comment={"lorem lipsm dolar kite"}/>
          </div>
          <div className="grid gap-4 text-nowrap overflow-ellipsis overflow-hidden pt-6">
            {popularVideos.items.map((video) => (
              <Link key={video.id} to={"/watch?v=" + video.id}>
                <SideVideoCard items={video} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
