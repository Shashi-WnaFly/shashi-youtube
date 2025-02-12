import Thumbnail from "./Thumbnail";
import ThumDetail from "./ThumDetail";

/* eslint-disable react/prop-types */
const SideVideoCard = ({ items }) => {
  if (!items) return null;

  const { thumbnails } = items.snippet;

  return (
    <div className="flex flex-row cursor-pointer">
      <div className="w-44"><Thumbnail thumbnails={thumbnails} /></div>
      <ThumDetail items={items} />
    </div>
  );
};

export default SideVideoCard;
