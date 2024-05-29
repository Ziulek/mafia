import React from "react";
import { Text, StyleSheet } from "react-native";

type CharacterNicknameProps = {
  nickname: string;
};

export const CharacterNickname = ({ nickname }: CharacterNicknameProps) => {
  return <Text style={styles.text}>{nickname}</Text>;
};

const styles = StyleSheet.create({
  text: { color: "white" },
});
