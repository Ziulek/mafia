import React from "react";
import StartScreen from "@/components/partials/StartScreen/StartScreen";
import { TextEditListItem } from "@/components/base/TextEditListItem/TextEditListItem";
import Button from "@/components/base/Button/Button";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <StartScreen
      image="police"
      text={
        nicknameMessage ? nicknameMessage : t("onBoardingScreen/enterNickname")
      }
    >
      <TextEditListItem
        placeholder={t("onBoardingScreen/placeholder")}
        text={nickname}
        setText={setNickname}
        isInputValid={isNicknameValid}
        testID="onboarding-nickname-input"
      />

      <Button
        color="accent"
        isDisabled={!isNicknameValid || nickname.length < 1}
        onPress={onPress}
        isBold={true}
        testID="onboarding-next-button"
      >
        {t("onBoardingScreen/nextButton")}
      </Button>
    </StartScreen>
  );
};

export default OnBoardingScreen;
