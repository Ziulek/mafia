import React, { ReactNode } from "react";
import {
  ImageBackground as RNImageBackground,
  StyleSheet,
  View,
} from "react-native";

interface CustomBackgroundProps {
  testID?: string;
  children: ReactNode;
}

const ImageBackground: React.FC<CustomBackgroundProps> = ({
  testID,
  children,
}) => {
  const styles = StyleSheet.create({
    background: {
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
      testID={testID}
    >
      <View style={styles.overlay} />
      <View style={styles.content}>{children}</View>
    </RNImageBackground>
  );
};

export default ImageBackground;
