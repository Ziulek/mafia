import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import CharacterNickname from "../CharacterNickname/CharacterNickname";

type Character = "M1" | "M2" | "M3" | "M4" | "F1" | "F2" | "F3" | "F4";

type CharcterAvatarProps = {
  character?: string;
  nickname?: string;
};

export const CharacterAvatar = ({
  character,
  nickname,
}: CharcterAvatarProps) => {
  let path;

  switch (character) {
    case "M1":
      path = require("../../assets/images/Male1.png");
      break;
    case "M2":
      path = require("../../assets/images/Male2.png");
      break;
    case "M3":
      path = require("../../assets/images/Male3.png");
      break;
    case "M4":
      path = require("../../assets/images/Male4.png");
      break;
    case "F1":
      path = require("../../assets/images/Female1.png");
      break;
    case "F2":
      path = require("../../assets/images/Female2.png");
      break;
    case "F3":
      path = require("../../assets/images/Female3.png");
      break;
    case "F4":
      path = require("../../assets/images/Female4.png");
      break;

    default:
      break;
  }

  return (
    <View style={styles.container}>
      <Image source={path} style={styles.image} />
      {nickname && <CharacterNickname nickname={nickname} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1,
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 9999,
    resizeMode: "cover",
  },
  text: {
    color: "white",
    marginTop: 10,
  },
});
