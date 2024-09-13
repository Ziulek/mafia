import React from "react";
import StartScreen from "@/components/partials/StartScreen/StartScreen";
import { TextEditListItem } from "@/components/base/TextEditListItem/TextEditListItem";
import Button from "@/components/base/Button/Button";
import { GAME_CODE_LENGTH } from "@/gameConfig/inputLengths.config";
import { useKeyboardHeight } from "@/helpers/useKeyboardHeight";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <StartScreen
      image="mafia"
      text={gameCodeMessage ? gameCodeMessage : t("joinScreen/enterGameCode")}
      sideButton="arrowLeft"
    >
      <TextEditListItem
        placeholder={t("joinScreen/placeholder")}
        text={gameCode}
        setText={setGameCode}
        isInputValid={isGameCodeValid}
        textToUpperCase={true}
      />

      <Button
        color="accent"
        isBold={true}
        onPress={onPress}
        isDisabled={!isGameCodeValid || gameCode.length < GAME_CODE_LENGTH}
      >
        {t("joinScreen/joinGameButton")}
      </Button>
    </StartScreen>
  );
};

export default JoinScreen;
