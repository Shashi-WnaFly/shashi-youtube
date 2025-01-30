import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="grow flex-col">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
