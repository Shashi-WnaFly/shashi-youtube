/* eslint-disable react/prop-types */
const Thumbnail = ({thumbnails}) => {
  return (
    <div className=" rounded-xl flex justify-center">
      <img className="rounded-xl w-full" src={thumbnails?.medium?.url} />
    </div>
  );
};

export default Thumbnail;
