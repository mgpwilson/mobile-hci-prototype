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
    setCoins,
  } = props;

  const slip = new Audio(power_down_wav);
  const coin = new Audio(coin_wav);

  const handleItemUnmount = () => {
    setItemOnScreen(false);

    // When obstacle goes offscreen
    if (obstacle) {
      // If user fails to avoid obstacle
      if (!obstacleAvoided) {
        slip.play();
        setCoins((coins) => (coins - 2 > 0 ? coins - 2 : 0));
      }
      setObstacleInRange(false);
      setObstacleAvoided(false);
    }
    // When coin goes offscreen
    else {
      coin.play();
      setCoins((coins) => coins + 1);
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
