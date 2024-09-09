import { Character } from "@/components/types/Characters";
import { Role } from "@/components/types/Role";
import React from "react";
import { StyleSheet, Image } from "react-native";

type CharacterAvatarProps = {
  character: Character;
  role: Role;
  isDead?: boolean;
};
const imagePathMap: { [key: string]: any } = {
  M1: {
    mafia: require("../../../assets/images/Male1/male1_mafia.png"),
    police: require("../../../assets/images/Male1/male1_police.png"),
    detective: require("../../../assets/images/Male1/male1_detective.png"),
    medic: require("../../../assets/images/Male1/male1_detective.png"),
    dead: require("../../../assets/images/Male1/male1_dead.png"),
  },
  M2: {
    mafia: require("../../../assets/images/Male2/male2_mafia.png"),
    police: require("../../../assets/images/Male2/male2_police.png"),
    detective: require("../../../assets/images/Male2/male2_detective.png"),
    medic: require("../../../assets/images/Male2/male2_detective.png"),
  },
  M3: {
    mafia: require("../../../assets/images/Male3/male3_mafia.png"),
    police: require("../../../assets/images/Male3/male3_police.png"),
    detective: require("../../../assets/images/Male3/male3_detective.png"),
    medic: require("../../../assets/images/Male3/male3_detective.png"),
    dead: require("../../../assets/images/Male3/male3_dead.png"),
  },
  M4: {
    mafia: require("../../../assets/images/Male4/male4_mafia.png"),
    police: require("../../../assets/images/Male4/male4_police.png"),
    detective: require("../../../assets/images/Male4/male4_detective.png"),
    medic: require("../../../assets/images/Male4/male4_detective.png"),
    dead: require("../../../assets/images/Male4/male4_dead.png"),
  },
  F1: {
    mafia: require("../../../assets/images/Female1/female1_mafia.png"),
    police: require("../../../assets/images/Female1/female1_police.png"),
    detective: require("../../../assets/images/Female1/female1_detective.png"),
    medic: require("../../../assets/images/Female1/female1_detective.png"),
    dead: require("../../../assets/images/Female1/female1_dead.png"),
  },
  F2: {
    mafia: require("../../../assets/images/Female2/female2_mafia.png"),
    police: require("../../../assets/images/Female2/female2_police.png"),
    detective: require("../../../assets/images/Female2/female2_detective.png"),
    medic: require("../../../assets/images/Female2/female2_detective.png"),
    dead: require("../../../assets/images/Female2/female2_dead.png"),
  },
  F3: {
    mafia: require("../../../assets/images/Female3/female3_mafia.png"),
    police: require("../../../assets/images/Female3/female3_police.png"),
    detective: require("../../../assets/images/Female3/female3_detective.png"),
    medic: require("../../../assets/images/Female3/female3_detective.png"),
    dead: require("../../../assets/images/Female3/female3_dead.png"),
  },
  F4: {
    mafia: require("../../../assets/images/Female4/female4_mafia.png"),
    police: require("../../../assets/images/Female4/female4_police.png"),
    detective: require("../../../assets/images/Female4/female4_detective.png"),
    medic: require("../../../assets/images/Female4/female4_detective.png"),
    dead: require("../../../assets/images/Female4/female4_dead.png"),
  },
};

export const CharacterAvatar = ({
  character,
  role,
  isDead = false,
}: CharacterAvatarProps) => {
  const handleRole = (isDead: boolean, role: string) => {
    if (isDead) {
      return "dead";
    } else {
      return role;
    }
  };

  const rolePath = handleRole(isDead, role);
  const path = imagePathMap[character][rolePath];

  return <Image source={path} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 9999,
  },
});
