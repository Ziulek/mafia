import React, { ReactNode, useRef, useEffect } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type HeaderProps = {
  isVisible: boolean;
  children: ReactNode;
};

export const Header = ({ children, isVisible }: HeaderProps) => {
  const translateY = useRef(new Animated.Value(-100)).current; // Start off-screen
  const insets = useSafeAreaInsets();

  useEffect(() => {
    // Run the animation based on visibility state
    Animated.timing(translateY, {
      toValue: isVisible ? 0 : -500, // Adjust to fit your layout
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  return (
    <Animated.View
      style={[
        styles.box,
        { transform: [{ translateY }], paddingTop: insets.top },
      ]}
    >
      <View style={styles.container}>{children}</View>
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  box: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    // height: "20%",

    backgroundColor: "#EAECD6",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
