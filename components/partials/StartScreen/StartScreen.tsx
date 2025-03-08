import React, { ReactNode } from "react";
import { Image, StatusBar, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Text from "@/components/base/Text/Text";
import { colors } from "@/theme/colors";
import SideButton from "../SideButton/SideButton";
import { router } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { useTranslation } from "react-i18next";

interface StartScreenProps {
  image: "mafia" | "police" | "error";
  text: string;
  sideButton?: "arrowLeft" | "account";
  testID?: string;
  children: ReactNode;
}

const StartScreen: React.FC<StartScreenProps> = ({
  image,
  text,
  sideButton,
  testID,
  children,
}) => {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const imageStyle = {
    ...styles.image,
    top: insets.top,
  };

  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <View
        style={[
          styles.container,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
          },
        ]}
        testID={testID}
      >
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
          <Image
            style={imageStyle}
            source={require("@/assets/images/StartImages/start_error.png")}
          />
        )}
        {image === "mafia" && (
          <Image
            style={imageStyle}
            source={require("@/assets/images/StartImages/start_mafia.png")}
          />
        )}
        {image === "police" && (
          <Image
            style={imageStyle}
            source={require("@/assets/images/StartImages/start_police.png")}
          />
        )}

        <KeyboardAwareScrollView
          style={styles.keyboardStyle}
          contentContainerStyle={styles.keyboardContentStyle}
          disableScrollOnKeyboardHide={true}
          extraKeyboardSpace={-62 - insets.bottom}
          scrollEnabled={false}
        >
          <View style={styles.textContainer}>
            {image === "error" ? (
              <Text size="startScreenHeadline" isTextAlignCenter={true}>
                {t("startScreen/errorHeadline")}
              </Text>
            ) : (
              <Text size="startScreenHeadline" isTextAlignCenter={true}>
                {t("startScreen/letsPlayHeadline")}
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
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: colors.primary,
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    position: "absolute",
    // top: 10,
    bottom: 0,
    right: "10%",
    left: "10%",
    height: "60%",
    width: "80%",
    resizeMode: "contain",
  },
  keyboardStyle: {
    flex: 1,
    width: "100%",
  },
  keyboardContentStyle: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: "5%",
  },
  textContainer: {
    width: "100%",
    justifyContent: "center",
    marginBottom: 20,
    padding: 10,
    gap: 10,
    backgroundColor: colors.primary,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: colors.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },

  interactiveContainer: {
    width: "100%",

    gap: 10,

    paddingBottom: 10,
  },
});
