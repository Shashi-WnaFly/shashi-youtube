import { useSelector } from "react-redux";
import usePopularVideo from "../Hooks/usePopularVideo";
import VideoCard from "./VideoCard";

const VideoContainer = () => {

  usePopularVideo();
  const popularVideos =  useSelector((store) => store.app.popularYoutubeVideos);
  console.log(popularVideos)
  return (
    <div className="grid grid-cols-4 gap-4">
      {popularVideos?.items?.map((item) => <VideoCard key={item.id} items = {item}/>)}
    </div>
  );
};

export default VideoContainer;
