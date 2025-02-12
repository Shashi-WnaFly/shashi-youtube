/* eslint-disable react/prop-types */

import Thumbnail from "./Thumbnail";
import ThumDetail from "./ThumDetail";

const VideoCard = ({ items }) => {
  if (!items) return null;
  const {thumbnails} = items.snippet;
  return (
    <div>
      <Thumbnail thumbnails={thumbnails}/>
      <ThumDetail items={items}/>
    </div>
  );
};

export default VideoCard;
