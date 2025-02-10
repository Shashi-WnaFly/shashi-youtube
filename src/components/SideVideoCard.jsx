/* eslint-disable react/prop-types */
const SideVideoCard = ({ details }) => {
  if (!details) return null;

  const { channelTitle, localized, thumbnails } = details.snippet;
  const { statistics } = details;

  let view = parseInt(statistics.viewCount);
  if (view > 100000) {
    view = Math.round(view / 100000);
    view = view + "M";
  } else if (view > 1000) {
    view = Math.round(view / 1000);
    view = view + "K";
  }

  return (
    <div className="flex flex-col">
      <div className=" rounded-xl flex justify-center">
        <img className="rounded-xl w-full" src={thumbnails?.medium?.url} />
      </div>
      <div className="p-2 pl-4">
        <div className=" font-semibold text-nowrap overflow-hidden overflow-ellipsis">
          {localized.title}
        </div>
        <div className="text-xs ">{channelTitle}</div>
        <div className="text-xs ">{view} views</div>
      </div>
    </div>
  );
};

export default SideVideoCard;
