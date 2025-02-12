/* eslint-disable react/prop-types */
const ThumDetail = ({ items }) => {
  const { channelTitle, localized } = items.snippet;
  const { statistics } = items;

  let view = parseInt(statistics.viewCount);
  if (view > 100000) {
    view = Math.round(view / 100000);
    view = view + "M";
  } else if (view > 1000) {
    view = Math.round(view / 1000);
    view = view + "K";
  }
  return (
    <div className="p-2 pl-4">
      <div className=" font-semibold text-nowrap overflow-hidden overflow-ellipsis">
        {localized.title}
      </div>
      <div className="text-sm ">{channelTitle}</div>
      <div className="text-sm ">{view} views</div>
    </div>
  );
};

export default ThumDetail;
