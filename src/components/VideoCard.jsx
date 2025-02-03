/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

const VideoCard = ({items}) => {
  if(!items) return null;

  return (
    <div className=" rounded-xl">
      <img className="rounded-xl" src={items?.snippet?.thumbnails?.medium?.url} />
    </div>
  )
}

VideoCard.prototype = {
  items : PropTypes.object.isRequired,
};

export default VideoCard;