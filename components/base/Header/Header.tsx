import React, { ReactNode, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  ReduceMotion,
} from "react-native-reanimated";
import { colors } from "@/theme/colors";

type HeaderProps = {
  isVisible: boolean;
  children: ReactNode;
};

export const Header = ({ children, isVisible }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const translateY = useSharedValue(-100); // Start off-screen
  const config = {
    duration: 500,
    easing: Easing.linear,
    reduceMotion: ReduceMotion.System,
  };

  useEffect(() => {
    translateY.value = withTiming(isVisible ? 0 : -500, config); // Adjust to fit your layout
  }, [isVisible]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Animated.View
      style={[styles.box, { paddingTop: insets.top }, animatedStyle]}
    >
      <View style={styles.container}>{children}</View>
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  box: {
    position: "absolute",
    flex: 1,

    // height: "35%",
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 40,
    // marginTop: 20,
    zIndex: 100,
    width: "100%",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
