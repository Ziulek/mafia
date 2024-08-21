import React, { ReactNode } from "react";
import { Image, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Text from "@/components/base/Text/Text";
import { colors } from "@/theme/colors";

interface StartScreenProps {
  image: "mafia" | "police" | "error";
  children: ReactNode;
  text: string;
}

const StartScreen: React.FC<StartScreenProps> = ({
  image,
  text,

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
      {image === "error" && (
        //Można dodać obrazek jakiegoś smutnego mafiozy na errora
        <Image
          style={styles.imageContainer}
          source={require("@/assets/images/StartImages/start_error.png")}
        />
      )}
      {image === "mafia" && (
        <Image
          style={styles.imageContainer}
          source={require("@/assets/images/StartImages/start_mafia.png")}
        />
      )}
      {image === "police" && (
        <Image
          style={styles.imageContainer}
          source={require("@/assets/images/StartImages/start_police.png")}
        />
      )}

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
  },
  imageContainer: {
    height: 350,
    width: 270,
    flexGrow: 1,
    alignSelf: "center",
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
