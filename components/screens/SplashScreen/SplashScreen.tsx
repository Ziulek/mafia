import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { colors } from "@/theme/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Text from "@/components/base/Text/Text";
import AnimatedLoader from "@/components/base/AnimatedLoader/AnimatedLoader";

interface SplashScreenProps {
  simpleLoader?: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ simpleLoader }) => {
  const insets = useSafeAreaInsets();

  const ContainerStyles = {
    ...styles.container,
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
  };

  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <View style={ContainerStyles}>
        {simpleLoader ? (
          <AnimatedLoader />
        ) : (
          <>
            <View style={styles.upperTextContainer}>
              <Text size="startScreenSubtitle">Welcome to </Text>
              <Text size="startScreenHeadline" isBold={true}>
                Mafia
              </Text>
            </View>

            <View style={styles.bottomContainer}>
              <AnimatedLoader />
              <View style={styles.textContainer}>
                <Text size="headline" isBold={true}>
                  The Mafia
                </Text>
                <Text size="headline"> is having a meeting. </Text>
              </View>
            </View>
          </>
        )}
      </View>
    </>
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
