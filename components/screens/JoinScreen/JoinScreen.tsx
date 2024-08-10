import React, { useState } from "react";
import StartScreen from "@/components/partials/StartScreen/StartScreen";
import { TextEditListItem } from "@/components/base/TextEditListItem/TextEditListItem";
import Button from "@/components/base/Button/Button";

const JoinScreen: React.FC = () => {
  const [gameCode, setGameCode] = useState("");
  const [isTyping, setIsTyping] = useState(false);

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
        onFocus={handleFocus} // Pass the handleFocus prop
        onBlur={handleBlur} // Pass the handleBlur prop
      />
      {!isTyping && (
        <Button color="accent" isBold={true} isDisabled={gameCode === ""}>
          Join Game
        </Button>
      )}
    </StartScreen>
  );
};

export default JoinScreen;
