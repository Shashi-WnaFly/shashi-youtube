import usePopularVideo from "../Hooks/usePopularVideo";
import VideoCard from "./VideoCard";

const VideoContainer = () => {

  usePopularVideo();
  
  return (
    <div>
      <VideoCard />
    </div>
  );
};

export default VideoContainer;
