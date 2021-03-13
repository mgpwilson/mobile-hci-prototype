import background_mp4 from "../assets/background.mp4";

const BackgroundVideo = (props) => {
  const { jumping, setJumping } = props;

  return (
    <video
      loop
      autoPlay
      muted
      className={jumping ? "jump-animation" : ""}
      onAnimationEnd={() => setJumping(false)}
    >
      <source src={background_mp4} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
