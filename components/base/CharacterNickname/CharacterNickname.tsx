import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path, TextPath, Defs, Text } from "react-native-svg";

type CharacterNicknameProps = {
  nickname: string;
  color: "black" | "white";
};

export const CharacterNickname = ({
  nickname,
  color,
}: CharacterNicknameProps) => {
  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" viewBox="0 0 200 200">
        <Defs>
          <Path id="arc" d="M 3,100 A 97,97 0 0,0 197,100" fill="none" />
        </Defs>
        <Text
          fillOpacity="100"
          fill={color}
          fontSize="23"
          // letterSpacing="3"
          textAnchor="middle"
          fontFamily="AmericanTypewriter"
        >
          <TextPath href="#arc" startOffset="50%">
            {nickname.toUpperCase()}
          </TextPath>
        </Text>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default CharacterNickname;
