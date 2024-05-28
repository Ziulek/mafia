import React from "react";
import { StyleSheet, Image, View } from "react-native";

type Character = "M1" | "M2" | "M3" | "M4" | "F1" | "F2" | "F3" | "F4";

type CharcterAvatarProps = {
  character?: Character;
};

export const CharacterAvatar = ({ character }: CharcterAvatarProps) => {
  let path;

  switch (character) {
    case "M1":
      path = require("../../assets/images/Male1.png");
      break;
    case "M2":
      path = require("../../assets/images/Male2.png");
      break;

    default:
      break;
  }

  return (
    <View>
      <Image source={path} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "purple",
    borderRadius: 8,
  },
  text: { color: "white" },
});
