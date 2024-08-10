import React, { useState } from "react";
import StartScreen from "@/components/partials/StartScreen/StartScreen";
import { TextEditListItem } from "@/components/base/TextEditListItem/TextEditListItem";
import Button from "@/components/base/Button/Button";

const OnBoardingScreen: React.FC = () => {
  const [nickname, setNickname] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleFocus = () => {
    setIsTyping(true);
  };

  const handleBlur = () => {
    setIsTyping(false);
  };

  return (
    <StartScreen image="police" text="Please enter your Nickname">
      <TextEditListItem
        placeholder="enter nickname"
        text={nickname}
        setText={setNickname}
        onFocus={handleFocus} // Pass the handleFocus prop
        onBlur={handleBlur} // Pass the handleBlur prop
      />
      {!isTyping && (
        <Button color="primary" isDisabled={nickname === ""}>
          Next
        </Button>
      )}
    </StartScreen>
  );
};

export default OnBoardingScreen;
