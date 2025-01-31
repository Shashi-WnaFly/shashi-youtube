import { useEffect } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "../utils/constant";

const VideoContainer = () => {

  const getData = async function() {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json);
  }
  
  useEffect( () => {
    getData();
  }, []);
  return (
    <div>
      <VideoCard />
    </div>
  );
};

export default VideoContainer;
