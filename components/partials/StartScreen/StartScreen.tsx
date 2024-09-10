import React, { ReactNode } from "react";
import {
  Dimensions,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
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

const height = Dimensions.get("window").height;

const StartScreen: React.FC<StartScreenProps> = ({
  image,
  text,
  sideButton,
  children,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <View
        style={[
          styles.container,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            height: Platform.OS === "ios" ? height : height + insets.top + 2,
          },
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

          <Text
            size="startScreenSubtitle"
            isTextAlignCenter={true}
            color="grey"
          >
            {text}
          </Text>
        </View>
        <View style={styles.interactiveContainer}>{children}</View>
      </View>
    </>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    // flexShrink: 0,
    // height: height ,
    backgroundColor: colors.primary,
    justifyContent: "space-between",
    alignItems: "center",
    // paddingTop: 500,
    // paddingVertical: "25%", // Optional padding to ensure consistent spacing
  },
  imageContainer: {
    height: height * 0.6, // Set a percentage height for the image container
    width: "75%",
    alignItems: "center",
    // backgroundColor: "red",
  },
  image: {
    height: "100%", // Ensure the image fills the container
    width: "100%",
    resizeMode: "contain",
  },
  textContainer: {
    height: "20%",
    // width: "80%", // Adjust width to control text area
    justifyContent: "flex-start",
    paddingHorizontal: 40,
    gap: 10,
    // backgroundColor: "blue",
  },
  interactiveContainer: {
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    gap: 10,
    paddingBottom: "5%", // Ensure it doesn't overlap with safe area
  },
});
