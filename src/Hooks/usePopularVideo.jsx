import { useEffect } from "react"
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import { addPopularYoutubeVideo } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";

const usePopularVideo = () => {

    const dispatch = useDispatch();
    const popularYoutubeVideos = useSelector((store) => store.app.popularYoutubeVideos);

    const getData = async () => {
        const getData = await fetch(YOUTUBE_VIDEO_API);
        const json = await getData.json();
        dispatch(addPopularYoutubeVideo(json));
    }

    useEffect(() => {
        !popularYoutubeVideos && getData();
    }, []);
}

export default usePopularVideo;