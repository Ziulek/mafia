import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, {
  Path,
  Text as SvgText,
  TextPath,
  Defs,
  Text,
} from "react-native-svg";

type CharacterNicknameProps = {
  nickname: string;
};

export const CharacterNickname = ({ nickname }: CharacterNicknameProps) => {
  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" viewBox="0 0 200 200">
        <Defs>
          <Path id="arc" d="M 0,100 A 100,100 0 0,0 200,100" fill="none" />
        </Defs>
        <Text
          fillOpacity="100"
          fill="white"
          stroke="black"
          fontSize="30"
          letterSpacing="3"
          fontWeight="bold"
          textAnchor="middle"
          strokeWidth="1.5"
        >
          <TextPath href="#arc" startOffset="50%">
            {nickname}
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
