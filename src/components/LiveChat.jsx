import { SlArrowDown } from "react-icons/sl";
import LiveMessages from "./LiveMessages";
import { addMessages } from "../utils/LiveComments";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiPaperplane } from "react-icons/ci";

const LiveChat = () => {
  const messagesList = useSelector((store) => store.comments.messages);
  const dispatch = useDispatch();
  const [yourMessage, setYourMessage] = useState("");

  const handleSMSPost = () => {
    dispatch(addMessages({name: "Bhola", message: yourMessage}))
  }

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
    <div className="w-[38%] h-[480px] border-1 rounded-lg relative">
      <div className="p-2 font-semibold rounded-tl-xl rounded-tr-lg border-b-1 flex items-center bg-white absolute top-0 left-0 right-4">
        Live Chat{" "}
        <span className="pl-2 text-sm">
          <SlArrowDown />
        </span>
      </div>
      <div className=" h-full rounded-lg overflow-hidden overflow-y-scroll p-2">
        <div className="flex flex-col-reverse gap-4">
          {messagesList.map((comment, i) => (
            <LiveMessages
              key={i}
              user={comment.name}
              message={comment.message}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 bg-white right-4 rounded-xl">
        <div className="flex p-3">
          <input className="py-1 px-4" type="text" placeholder="Chat..." value={yourMessage} onChange={(e) => setYourMessage(e.target.value)} />
          <div className="text-2xl rounded-full hover:bg-red-100 p-2 ml-2" onClick={handleSMSPost}>
            <CiPaperplane />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
