import React from "react";
import { StyleSheet, Image, View } from "react-native";

export type Character = "M1" | "M2" | "M3" | "M4" | "F1" | "F2" | "F3" | "F4";
export type Role = "mafia" | "police" | "detective";

type CharacterAvatarProps = {
  character: Character;
  role: Role;
};

export const CharacterAvatar = ({ character, role }: CharacterAvatarProps) => {
  let path;

  switch (character) {
    case "M1":
      switch (role) {
        case "mafia":
          path = require("../../assets/images/Male1/male1_mafia.png");
          break;
        case "police":
          path = require("../../assets/images/Male1/male1_police.png");
          break;
        case "detective":
          path = require("../../assets/images/Male1/male1_detective.png");
          break;
        default:
          break;
      }
      break;
    case "M2":
      switch (role) {
        case "mafia":
          path = require("../../assets/images/Male2/male2_mafia.png");
          break;
        case "police":
          path = require("../../assets/images/Male2/male2_police.png");
          break;
        case "detective":
          path = require("../../assets/images/Male2/male2_detective.png");
          break;
        default:
          break;
      }
      break;
    case "M3":
      switch (role) {
        case "mafia":
          path = require("../../assets/images/Male3/male3_mafia.png");
          break;
        case "police":
          path = require("../../assets/images/Male3/male3_police.png");
          break;
        case "detective":
          path = require("../../assets/images/Male3/male3_detective.png");
          break;
        default:
          break;
      }
      break;
    case "M4":
      switch (role) {
        case "mafia":
          path = require("../../assets/images/Male4/male4_mafia.png");
          break;
        case "police":
          path = require("../../assets/images/Male4/male4_police.png");
          break;
        case "detective":
          path = require("../../assets/images/Male4/male4_detective.png");
          break;
        default:
          break;
      }
      break;
    case "F1":
      switch (role) {
        case "mafia":
          path = require("../../assets/images/Female1/female1_mafia.png");
          break;
        case "police":
          path = require("../../assets/images/Female1/female1_police.png");
          break;
        case "detective":
          path = require("../../assets/images/Female1/female1_detective.png");
          break;
        default:
          break;
      }
      break;
    case "F2":
      switch (role) {
        case "mafia":
          path = require("../../assets/images/Female2/female2_mafia.png");
          break;
        case "police":
          path = require("../../assets/images/Female2/female2_police.png");
          break;
        case "detective":
          path = require("../../assets/images/Female2/female2_detective.png");
          break;
        default:
          break;
      }
      break;
    case "F3":
      switch (role) {
        case "mafia":
          path = require("../../assets/images/Female3/female3_mafia.png");
          break;
        case "police":
          path = require("../../assets/images/Female3/female3_police.png");
          break;
        case "detective":
          path = require("../../assets/images/Female3/female3_detective.png");
          break;
        default:
          break;
      }
      break;
    case "F4":
      switch (role) {
        case "mafia":
          path = require("../../assets/images/Female4/female4_mafia.png");
          break;
        case "police":
          path = require("../../assets/images/Female4/female4_police.png");
          break;
        case "detective":
          path = require("../../assets/images/Female4/female4_detective.png");
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }

  return <Image source={path} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 9999,
  },
});
