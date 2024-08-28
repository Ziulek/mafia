import React, { ReactNode } from "react";
import { Image, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Text from "@/components/base/Text/Text";
import { colors } from "@/theme/colors";
import SideButton from "../SideButton/SideButton";
import { router } from "expo-router";

interface StartScreenProps {
  image: "mafia" | "police" | "error";
  text: string;
  sideButton?: "arrowLeft" | "account";
  children: ReactNode;
}

const StartScreen: React.FC<StartScreenProps> = ({
  image,
  text,
  sideButton,
  children,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <View style={styles.imageContainer}>
        {sideButton && (
          <SideButton
            icon={sideButton}
            onPress={() => {
              sideButton === "arrowLeft" && router.replace(`/joinOrHost`);
              sideButton === "account" && router.replace(`/onBoarding`);
            }}
          />
        )}
        {image === "error" && (
          //Można dodać obrazek jakiegoś smutnego mafiozy na errora
          <Image
            style={styles.image}
            source={require("@/assets/images/StartImages/start_error.png")}
          />
        )}
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
        {image === "error" && (
          <Text size="startScreenHeadline" isTextAlignCenter={true}>
            Error occured
          </Text>
        )}
        {!(image === "error") && (
          <Text size="startScreenHeadline" isTextAlignCenter={true}>
            Let's Play
          </Text>
        )}

        <Text size="startScreenSubtitle" isTextAlignCenter={true} color="grey">
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
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  imageContainer: {
    height: "55%",
    width: "75%",
    flexGrow: 1,
    alignItems: "center",

    // backgroundColor: "red",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  textContainer: {
    flexGrow: 0.8,
    justifyContent: "flex-start",
    paddingHorizontal: 40,
    gap: 10,
    maxHeight: 120,
  },
  interactiveContainer: {
    flexGrow: 0.5,
    width: "100%",
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
  },
});
