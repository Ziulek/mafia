import React, { useState } from "react";
import StartScreen from "@/components/partials/StartScreen/StartScreen";
import { TextEditListItem } from "@/components/base/TextEditListItem/TextEditListItem";
import Button from "@/components/base/Button/Button";

interface JoinScreenProps {
  onPress: () => void; // Type for the onPress prop
  gameCode: string; // Type for the gameCode prop
  setGameCode: (code: string) => void; // Type for the setGameCode prop
}

const JoinScreen: React.FC<JoinScreenProps> = ({
  onPress,
  gameCode,
  setGameCode,
}) => {
  const [isTyping, setIsTyping] = useState<boolean>(false); // Explicitly type the state

  const handleFocus = () => {
    setIsTyping(true);
  };

  const handleBlur = () => {
    setIsTyping(false);
  };

  return (
    <StartScreen image="mafia" text="Please enter game code">
      <TextEditListItem
        placeholder="game code"
        text={gameCode}
        setText={setGameCode}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {!isTyping && (
        <Button
          color="accent"
          isBold={true}
          isDisabled={gameCode === ""}
          onPress={onPress}
        >
          Join Game
        </Button>
      )}
    </StartScreen>
  );
};

export default JoinScreen;
