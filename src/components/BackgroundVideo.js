import "./BackgroundVideo.css";
import background_video from "../assets/background.mp4";
import banana from "../assets/banana.png";

const BackgroundVideo = (props) => {
  const { jump, setJump } = props;

  return (
    <div className="videoContainer">
      <video
        className={jump ? "jumpAnimation" : ""}
        loop
        autoPlay
        muted
        onClick={() => setJump(true)}
        onAnimationEnd={() => setJump(false)}
      >
        <source src={background_video} type="video/mp4" />
      </video>
      <img className="banana" src={banana} alt="banana" />
    </div>
  );
};

export default BackgroundVideo;
