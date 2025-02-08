/* eslint-disable react/prop-types */

const VideoCard = ({ items }) => {
  if (!items) return null;

  const { channelTitle, localized, thumbnails } = items.snippet;
  const { statistics } = items;
  
  let view = parseInt(statistics.viewCount);
  if( view > 100000 ){
    view = Math.round(view/100000);
    view = view + "M";
  } 
  else if( view > 1000){
    view = Math.round(view/1000);
    view = view + "K";
  }

  return (
    <div className="flex flex-col shadow-2xl">
      <div className=" rounded-xl flex justify-center">
        <img className="rounded-xl w-full" src={thumbnails?.medium?.url} />
      </div>
      <div className="p-2 pl-4">
        <div className=" font-semibold text-nowrap overflow-hidden overflow-ellipsis">{localized.title}</div>
        <div className="text-sm ">{channelTitle}</div>
        <div className="text-sm ">{view} views</div>
      </div>
    </div>
  );
};

export default VideoCard;
