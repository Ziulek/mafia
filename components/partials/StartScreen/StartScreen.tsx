import React, { ReactNode } from "react";
import { Image, StyleSheet, View, SafeAreaView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Text from "@/components/base/Text/Text";
import { colors } from "@/theme/colors";

interface StartScreenProps {
  image: "mafia" | "police";
  children: ReactNode;
  text: string;
}

const StartScreen: React.FC<StartScreenProps> = ({ image, text, children }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <SafeAreaView style={styles.safeArea}>
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
      </SafeAreaView>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "space-evenly", // Ensure even spacing between elements
  },
  imageContainer: {
    marginTop: 50,
    flexShrink: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "green",
  },
  image: {
    height: 350,
    width: 250,
    // backgroundColor: "grey",
  },
  textContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "blue",
  },
  interactiveContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    gap: 15,
    paddingBottom: 30,
    paddingHorizontal: 20,
    // backgroundColor: "red",
  },
});
