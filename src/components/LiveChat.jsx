import { SlArrowDown } from "react-icons/sl";
import LiveMessages from "./LiveMessages";
import { addMessages } from "../utils/LiveComments";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const LiveChat = () => {
  const messagesList = useSelector( (store) => store.comments.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessages({
          name: "shashi anand",
          message: "lorem ipsum dolar jitsn",
        })
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="w-[38%] h-[480px] border-1 p-2 rounded-lg overflow-y-scroll ">
      <div className="p-2 font-semibold flex items-center">
        Live Chat{" "}
        <span className="pl-2 text-sm">
          <SlArrowDown />
        </span>
      </div>
      <div className="flex flex-col-reverse gap-4 h-full">
        {messagesList.map((comment, i) => <LiveMessages key={i} user={comment.name} message={comment.message} />)}
      </div>
    </div>
  );
};

export default LiveChat;
