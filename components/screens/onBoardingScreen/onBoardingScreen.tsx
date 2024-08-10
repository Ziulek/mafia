import Button from "@/components/base/Button/Button";
import { ButtonGroup } from "@/components/base/ButtonGroup/ButtonGroup";
import Text from "@/components/base/Text/Text";
import { TextEditListItem } from "@/components/base/TextEditListItem/TextEditListItem";
import StartScreen from "@/components/partials/StartScreen/StartScreen";
import { colors } from "@/theme/colors";
import React, { ReactNode, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface CustomBackgroundProps {
  image: "mafia" | "police";
  children: ReactNode;
  text: string;
}

const onBoardingScreen: React.FC<CustomBackgroundProps> = ({}) => {
  const [nickname, setNickname] = useState("");

  return (
    <StartScreen image="police" text="Please enter your Nickname">
      <TextEditListItem
        placeholder="enter nickname"
        text={nickname}
        setText={setNickname}
      />
      <Button color="primary" isDisabled={nickname === "" ? true : false}>
        Next
      </Button>
    </StartScreen>
  );
};

export default onBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    backgroundColor: "grey",
    height: 300,
    width: 250,
  },
});
