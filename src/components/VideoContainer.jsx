import { useSelector } from "react-redux";
import usePopularVideo from "../Hooks/usePopularVideo";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  usePopularVideo();
  const popularVideos = useSelector((store) => store.app.popularYoutubeVideos);
  // console.log(popularVideos)
  return (
    <div className="grid grid-cols-4 gap-4 p-8 ">
      {popularVideos?.items?.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}><VideoCard items={video} /></Link>
      ))}
    </div>
  );
};

export default VideoContainer;
