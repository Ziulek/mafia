import { ButtonGroup } from "@/components/base/ButtonGroup/ButtonGroup";
import Text from "@/components/base/Text/Text";
import { colors } from "@/theme/colors";
import React, { ReactNode } from "react";
import { Image, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface StartScreenProps {
  image: "mafia" | "police";
  children: ReactNode;
  text: string;
}

const StartScreen: React.FC<StartScreenProps> = ({ image, text, children }) => {
  const insets = useSafeAreaInsets();

  const stylesInsets = StyleSheet.create({
    background: { marginTop: -insets.top, marginBottom: -insets.bottom },
  });

  return (
    <View style={[stylesInsets.background, styles.container]}>
      <View style={styles.imageContainer}>
        {image === "mafia" && (
          <Image
            style={styles.image}
            source={require("@/assets/images/StartImages/start_mafia.png")}
          />
        )}
        {image === "police" && (
          <Image
            style={styles.image}
            source={require("@/assets/images/StartImages/start_police.png")}
          />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text size="headline" isBold={true} isTextAlignCenter={true}>
          Let's Play
        </Text>
        <Text size="subtitle" isTextAlignCenter={true}>
          {text}
        </Text>
      </View>
      <View style={styles.interactiveContainer}>{children}</View>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    flexDirection: "column", // Ensure vertical stacking
  },
  imageContainer: {
    flex: 1, // Make it take up equal space
    alignItems: "center",
    backgroundColor: "green",
    justifyContent: "flex-start",
  },
  image: {
    backgroundColor: "grey",
    // height: 200,
    // width: 250,
  },
  textContainer: {
    flex: 1, // Make it take up equal space
    backgroundColor: "blue",
    justifyContent: "center",
  },
  interactiveContainer: {
    flex: 1, // Make it take up equal space
    width: "100%",
    backgroundColor: "red",
    alignSelf: "flex-end",
    justifyContent: "center",
  },
});
