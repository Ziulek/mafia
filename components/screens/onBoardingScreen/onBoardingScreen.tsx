import React from "react";
import StartScreen from "@/components/partials/StartScreen/StartScreen";
import { TextEditListItem } from "@/components/base/TextEditListItem/TextEditListItem";
import Button from "@/components/base/Button/Button";

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
  return (
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

      <Button
        color="accent"
        isDisabled={!isNicknameValid || nickname.length < 1}
        onPress={onPress}
        isBold={true}
      >
        Next
      </Button>
    </StartScreen>
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
