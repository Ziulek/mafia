import React, { useState } from "react";
import StartScreen from "@/components/partials/StartScreen/StartScreen";
import { TextEditListItem } from "@/components/base/TextEditListItem/TextEditListItem";
import Button from "@/components/base/Button/Button";

interface OnBoardingScreenProps {
  onPress: () => void;
  setNickname: (nickname: string) => void;
  nickname: string;
}

const OnBoardingScreen: React.FC<OnBoardingScreenProps> = ({
  onPress,
  setNickname,
  nickname,
}) => {
  const [isTyping, setIsTyping] = useState<boolean>(false); // Explicit type for state

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
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {!isTyping && (
        <Button color="primary" isDisabled={nickname === ""} onPress={onPress}>
          Next
        </Button>
      )}
    </StartScreen>
  );
};

export default OnBoardingScreen;
