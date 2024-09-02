import React, { ReactNode } from "react";
import {
  ImageBackground as RNImageBackground,
  StyleSheet,
  View,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface CustomBackgroundProps {
  children: ReactNode;
}

const ImageBackground: React.FC<CustomBackgroundProps> = ({ children }) => {
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    background: {
      marginTop: -insets.top,
      marginBottom: -insets.bottom,
      flex: 1,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      flex: 1,
    },
  });

  return (
    <RNImageBackground
      source={require("@/assets/images/Backgrounds/GameScreenBackground.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <View style={styles.content}>{children}</View>
    </RNImageBackground>
  );
};

export default ImageBackground;
