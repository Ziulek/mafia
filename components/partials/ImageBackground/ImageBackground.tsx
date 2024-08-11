import React, { ReactNode } from "react";
import { ImageBackground as RNImageBackground, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface CustomBackgroundProps {
  children: ReactNode;
}

const ImageBackground: React.FC<CustomBackgroundProps> = ({ children }) => {
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    background: {
      marginTop: -insets.top * 0.5,
      marginBottom: -insets.bottom,
      flex: 1,
    },
  });

  return (
    <RNImageBackground
      source={require("@/assets/images/Backgrounds/GameScreenBackground.png")}
      style={styles.background}
      resizeMode="cover"
    >
      {children}
    </RNImageBackground>
  );
};

export default ImageBackground;
