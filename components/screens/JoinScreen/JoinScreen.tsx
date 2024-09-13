import React from "react";
import StartScreen from "@/components/partials/StartScreen/StartScreen";
import { TextEditListItem } from "@/components/base/TextEditListItem/TextEditListItem";
import Button from "@/components/base/Button/Button";
import { GAME_CODE_LENGTH } from "@/gameConfig/inputLengths.config";

import { useKeyboardHeight } from "@/helpers/useKeyboardHeight";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import ImageBackground from "@/components/partials/ImageBackground/ImageBackground";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "@/theme/colors";

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
  const keyboardHeight = useKeyboardHeight();
  const insets = useSafeAreaInsets();

  return (
    <StartScreen
      image="mafia"
      text={gameCodeMessage ? gameCodeMessage : "Please enter game code"}
      sideButton="arrowLeft"
    >
      <TextEditListItem
        placeholder="game code"
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
        Join Game
      </Button>
    </StartScreen>
  );
};

export default JoinScreen;
