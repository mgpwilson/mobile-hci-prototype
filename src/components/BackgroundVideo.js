import "./BackgroundVideo.css";
import background_video from "../assets/background.mp4";

const BackgroundVideo = (props) => {
  const { jump, setJump } = props;

  return (
    <div className="videoContainer">
      <video
        className={jump ? "animated" : ""}
        loop
        autoPlay
        muted
        onClick={() => setJump(true)}
        onAnimationEnd={() => setJump(false)}
      >
        <source src={background_video} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
