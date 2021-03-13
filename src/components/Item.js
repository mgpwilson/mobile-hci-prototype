import power_down_wav from "../assets/power_down.wav";
import coin_wav from "../assets/coin.wav";

const Item = (props) => {
  const {
    obstacle,
    jumping,
    setItemOnScreen,
    image,
    setObstacleInRange,
    obstacleAvoided,
    setObstacleAvoided,
  } = props;

  const slip = new Audio(power_down_wav);
  const coin = new Audio(coin_wav);

  const handleItemUnmount = () => {
    setItemOnScreen(false);
    if (obstacle) {
      if (!obstacleAvoided) slip.play();
      setObstacleInRange(false);
      setObstacleAvoided(false);
    } else {
      coin.play();
    }
  };

  return (
    <>
      <img
        className={jumping ? "item hidden" : "item"}
        onAnimationEnd={() => handleItemUnmount()}
        src={image}
        alt="banana"
      />
      <img
        className={jumping ? "item jumped-over" : "item jumped-over hidden"}
        src={image}
        alt="banana"
      />
    </>
  );
};

export default Item;
