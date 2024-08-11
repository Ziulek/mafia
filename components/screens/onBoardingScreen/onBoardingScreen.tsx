import React, { useState, useEffect } from "react";
import StartScreen from "@/components/partials/StartScreen/StartScreen";
import { TextEditListItem } from "@/components/base/TextEditListItem/TextEditListItem";
import Button from "@/components/base/Button/Button";
import { Keyboard } from "react-native";

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
  const [isTyping, setIsTyping] = useState<boolean>(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsTyping(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsTyping(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <StartScreen image="police" text="Please enter your Nickname">
      <TextEditListItem
        placeholder="enter nickname"
        text={nickname}
        setText={setNickname}
      />

      <Button color="accent" isDisabled={nickname === ""} onPress={onPress}>
        Next
      </Button>
    </StartScreen>
  );
};

export default OnBoardingScreen;
