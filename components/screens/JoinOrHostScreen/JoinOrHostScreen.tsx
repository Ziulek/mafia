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

const joinOrHostScreen: React.FC<CustomBackgroundProps> = ({}) => {
  return (
    <StartScreen image="mafia" text="Host your own game or join an existing">
      <Button color="accent" isBold={true}>
        Join Game
      </Button>
      <Button color="accent" isBold={true}>
        Host New Game
      </Button>
    </StartScreen>
  );
};

export default joinOrHostScreen;

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
