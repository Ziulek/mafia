import React, { useState } from "react";
import StartScreen from "@/components/partials/StartScreen/StartScreen";
import { TextEditListItem } from "@/components/base/TextEditListItem/TextEditListItem";
import Button from "@/components/base/Button/Button";
import { GAME_CODE_LENGTH } from "@/helpers/correctGameCode";

interface JoinScreenProps {
  onPress: () => void; // Type for the onPress prop
  gameCode: string; // Type for the gameCode prop
  setGameCode: (code: string) => void; // Type for the setGameCode prop
  gameCodeMessage: string;
  isGameCodeValid: boolean;
}

const JoinScreen: React.FC<JoinScreenProps> = ({
  onPress,
  gameCode,
  setGameCode,
  gameCodeMessage,
  isGameCodeValid,
}) => {
  const [isTyping, setIsTyping] = useState<boolean>(false); // Explicitly type the state

  const handleFocus = () => {
    setIsTyping(true);
  };

  const handleBlur = () => {
    setIsTyping(false);
  };

  return (
    <StartScreen
      image="mafia"
      text={gameCodeMessage ? gameCodeMessage : "Please enter game code"}
    >
      <TextEditListItem
        placeholder="game code"
        text={gameCode.toUpperCase()}
        setText={setGameCode}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isInputValid={isGameCodeValid}
      />

      <Button
        color="accent"
        isBold={true}
        onPress={onPress}
        isDisabled={!isGameCodeValid || gameCode.length < GAME_CODE_LENGTH}
      >
        Join Game
      </Button>
    </StartScreen>
  );
};

export default JoinScreen;
