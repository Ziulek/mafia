import React, { ReactNode, useRef, useEffect, useState } from "react";
import { Animated, Button, StyleSheet, View } from "react-native";

type HeaderProps = {
  children: ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const translateY = useRef(new Animated.Value(-100)).current; // Start off-screen

  const handleOpen = () => setIsVisible(true);
  const handleClose = () => setIsVisible(false);

  useEffect(() => {
    // Run the animation based on visibility state
    Animated.timing(translateY, {
      toValue: isVisible ? 0 : -300, // Adjust to fit your layout
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  const styles = StyleSheet.create({
    box: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      // height: "20%",
      transform: [{ translateY }],
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

  return (
    <>
      <Animated.View style={styles.box}>
        <View style={styles.container}>{children}</View>
      </Animated.View>
      <View style={{ marginTop: "50%" }}>
        <Button title="Open" onPress={handleOpen} />
        <Button title="Close" onPress={handleClose} />
      </View>
    </>
  );
};

export default Header;
