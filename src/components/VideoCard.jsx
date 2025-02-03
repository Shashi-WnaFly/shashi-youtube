/* eslint-disable react/prop-types */

const VideoCard = ({ items }) => {
  if (!items) return null;

  const { channelTitle, localized, thumbnails } = items.snippet;
  const { statistics } = items;

  return (
    <div className="flex flex-col shadow-2xl">
      <div className=" rounded-xl flex justify-center">
        <img className="rounded-xl w-full" src={thumbnails?.medium?.url} />
      </div>
      <div>
        <div className=" font-semibold">{localized.title}</div>
        <div>{channelTitle}</div>
        <div>{statistics.viewCount} views</div>
      </div>
    </div>
  );
};

export default VideoCard;
