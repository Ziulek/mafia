import React, { useState, useEffect } from "react";
import StartScreen from "@/components/partials/StartScreen/StartScreen";
import { TextEditListItem } from "@/components/base/TextEditListItem/TextEditListItem";
import Button from "@/components/base/Button/Button";
import { Keyboard, KeyboardAvoidingView, Platform } from "react-native";

interface OnBoardingScreenProps {
  onPress: () => void;
  setNickname: (nickname: string) => void;
  isNicknameValid: boolean;
  nicknameMessage: string;
  nickname: string;
}

const OnBoardingScreen: React.FC<OnBoardingScreenProps> = ({
  onPress,
  setNickname,
  nickname,
  isNicknameValid,
  nicknameMessage,
}) => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  // Keyboard.dismiss  chowa klawe można to użyć że jak klikne na background to sie chowa

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={100}
    >
      <StartScreen
        image="police"
        text={nicknameMessage ? nicknameMessage : "Please enter your Nickname"}
      >
        <TextEditListItem
          placeholder="enter nickname"
          text={nickname}
          setText={setNickname}
          isInputValid={isNicknameValid}
        />
        {!isKeyboardVisible && (
          <Button
            color="accent"
            isDisabled={!isNicknameValid || nickname.length < 1}
            onPress={onPress}
            isBold={true}
          >
            Next
          </Button>
        )}
      </StartScreen>
    </KeyboardAvoidingView>
  );
};

export default OnBoardingScreen;

// const [isTyping, setIsTyping] = useState<boolean>(false);

// useEffect(() => {
//   const keyboardDidShowListener = Keyboard.addListener(
//     "keyboardDidShow",
//     () => {
//       setIsTyping(true);
//     }
//   );
//   const keyboardDidHideListener = Keyboard.addListener(
//     "keyboardDidHide",
//     () => {
//       setIsTyping(false);
//     }
//   );

//   return () => {
//     keyboardDidHideListener.remove();
//     keyboardDidShowListener.remove();
//   };
// }, []);
