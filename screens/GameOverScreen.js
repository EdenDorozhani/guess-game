import EndPoint from "../components/EndPoint";

const GameOverScreen = ({ numberToBeFound, array, setNavigator }) => {
  const onNavigate = () => {
    setNavigator("home");
  };

  return (
    <EndPoint
      numberToBeFound={numberToBeFound}
      numberOfRounds={array.length}
      navigate={onNavigate}
    />
  );
};

export default GameOverScreen;
