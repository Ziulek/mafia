import React from "react";
import StartScreen from "@/components/partials/StartScreen/StartScreen";
import Button from "@/components/base/Button/Button";
import removeNickname from "@/helpers/removeNickname";

interface JoinOrHostScreenProps {
  onJoinPress: () => void; // Type for the onJoinPress prop
  onHostPress: () => void; // Type for the onHostPress prop
}

const JoinOrHostScreen: React.FC<JoinOrHostScreenProps> = ({
  onJoinPress,
  onHostPress,
}) => {
  return (
    <StartScreen
      image="mafia"
      text="Host your own game or join a room with friends"
    >
      <Button color="accent" isBold={true} onPress={removeNickname}>
        Remove Nickname
      </Button>
      <Button color="accent" isBold={true} onPress={onJoinPress}>
        Join Game
      </Button>
      <Button color="accent" isBold={true} onPress={onHostPress}>
        Host New Game
      </Button>
    </StartScreen>
  );
};

export default JoinOrHostScreen;
