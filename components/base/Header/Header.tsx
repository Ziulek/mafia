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
  onHeaderHeightChange?: (height: number) => void; // Add this prop
  children: ReactNode;
};

export const Header = ({
  children,
  isVisible,
  onHeaderHeightChange,
}: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const translateY = useSharedValue(0); // Start off-screen
  const config = {
    duration: 500,
    easing: Easing.out(Easing.cubic),
    reduceMotion: ReduceMotion.Never,
  };

  useEffect(() => {
    const headerHeight = isVisible ? 0 : -insets.top * 1.75 - 200; // Adjust height based on visibility
    if (onHeaderHeightChange) onHeaderHeightChange(headerHeight); // Notify parent component
    translateY.value = withTiming(isVisible ? 0 : -400, config); // Adjust translateY to headerHeight
  }, [isVisible]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Animated.View
      style={[styles.box, { paddingTop: insets.top * 1.75 }, animatedStyle]}
    >
      <View style={styles.container}>{children}</View>
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
    zIndex: 100,
    width: "100%",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
