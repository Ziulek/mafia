import React from "react";
import { Text as TextComponent, StyleSheet, Platform } from "react-native";

interface TextProps {
  size:
    | "listItem"
    | "button"
    | "subtitle"
    | "headline"
    | "startScreenHeadline"
    | "startScreenSubtitle";
  isBold?: boolean;
  color?: "white" | "black" | "grey";
  children: string | number;
  isTextAlignCenter?: boolean;
  testID?: string;
}

const Text = ({
  size,
  isBold = false,
  color = "black",
  isTextAlignCenter = false,
  testID,
  children,
}: TextProps) => {
  const textSize = getTextSize(size);
  const styles = StyleSheet.create({
    text: {
      fontFamily:
        Platform.OS === "android" && isBold
          ? "AmericanTypewriterBold"
          : "AmericanTypewriter",
      fontSize: textSize,
      color: color === "black" ? "#000" : color === "grey" ? "#696969" : "#fff",
      textAlign: isTextAlignCenter ? "center" : "left",
      fontWeight: Platform.OS === "ios" && isBold ? "bold" : "normal",
    },
  });

  return (
    <TextComponent style={styles.text} testID={testID}>
      {children}
    </TextComponent>
  );
};

const getTextSize = (size: string) => {
  switch (size) {
    case "listItem":
      return 14;
    case "button":
      return 16;
    case "subtitle":
      return 18;
    case "headline":
      return 24;
    case "startScreenSubtitle":
      return 21;
    case "startScreenHeadline":
      return 32;
    default:
      return 24;
  }
};

export default Text;
