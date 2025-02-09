import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const {searchParams} = useSearchParams();
  console.log(searchParams.get("v"))

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div>
      <iframe
        width="853"
        height="480"
        src={"https://www.youtube.com/embed/"+videoId}
        title="39  Evaluate Expression to True  Boolean Parenthesization Recursive"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
