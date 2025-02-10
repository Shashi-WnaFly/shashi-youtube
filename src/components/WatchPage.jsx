import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import SideVideoCard from "./SideVideoCard";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const popularVideos = useSelector((store) => store.app.popularYoutubeVideos);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  
  if(!popularVideos) return null;

  return (
    <div className="flex flex-row">
      <iframe
        width="853"
        height="480"
        src={"https://www.youtube.com/embed/" + searchParams.get('v')}
        title="39  Evaluate Expression to True  Boolean Parenthesization Recursive"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div>
        {popularVideos.items.map((video) => <Link key={video.Id} to={"/watch?v=" + video.Id}><SideVideoCard details={video} /></Link> )}
      </div>
    </div>
  );
};

export default WatchPage;
