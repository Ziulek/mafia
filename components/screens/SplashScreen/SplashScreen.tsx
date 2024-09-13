import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { colors } from "@/theme/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Text from "@/components/base/Text/Text";
import AnimatedLoader from "@/components/base/AnimatedLoader/AnimatedLoader";
import { useTranslation } from "react-i18next";

import { useFocusEffect } from "@react-navigation/native";

interface SplashScreenProps {
  simpleLoader?: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ simpleLoader }) => {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

  const ContainerStyles = {
    ...styles.container,
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
  };

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle("dark-content");
      StatusBar.setBackgroundColor(colors.primary);
    }, [])
  );

  return (
    <View style={ContainerStyles}>
      {simpleLoader ? (
        <AnimatedLoader />
      ) : (
        <>
          <View style={styles.upperTextContainer}>
            <Text size="startScreenSubtitle">
              {t("splashScreen/welcomeMessage")}
            </Text>
            <Text size="startScreenHeadline" isBold={true}>
              {t("splashScreen/gameName")}
            </Text>
          </View>

          <View style={styles.bottomContainer}>
            <AnimatedLoader />
            <View style={styles.textContainer}>
              <Text size="headline" isBold={true}>
                {t("splashScreen/meetingMessageName")}
              </Text>
              <Text size="headline">{t("splashScreen/meetingMessage")}</Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  upperTextContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottomContainer: {
    alignItems: "center",
  },
});

export default SplashScreen;
