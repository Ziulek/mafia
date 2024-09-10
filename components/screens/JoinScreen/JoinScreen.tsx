import React from "react";
import StartScreen from "@/components/partials/StartScreen/StartScreen";
import { TextEditListItem } from "@/components/base/TextEditListItem/TextEditListItem";
import Button from "@/components/base/Button/Button";
import { GAME_CODE_LENGTH } from "@/gameConfig/inputLengths.config";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

import { useKeyboardHeight } from "@/helpers/useKeyboardHeight";
import { Platform } from "react-native";

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

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        // backgroundColor: "red",
        // position: "absolute",
      }}
      style={{
        flex: 1,
        paddingBottom: Platform.OS === "ios" ? 0 : -20,
        // backgroundColor: "blue",
      }}
      scrollEnabled={false}
      extraKeyboardSpace={keyboardHeight}
    >
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
    </KeyboardAwareScrollView>
  );
};

export default JoinScreen;
