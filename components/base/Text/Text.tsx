import React from "react";
import { Text as TextComponent, StyleSheet } from "react-native";

interface TextProps {
  size: "listItem" | "button" | "subtitle" | "headline";
  isBold?: boolean;
  color?: "white" | "black";
  children: string;
}

const Text = ({
  size,
  isBold = false,
  color = "black",
  children,
}: TextProps) => {
  const textSize = getTextSize(size);
  const styles = StyleSheet.create({
    text: {
      fontFamily: "AmericanTypewriter",
      fontSize: textSize,
      fontWeight: isBold ? "bold" : "regular",
      color: color === "black" ? "#000" : "#fff",
    },
  });

  return <TextComponent style={styles.text}>{children}</TextComponent>;
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
    default:
      return 24;
  }
};

export default Text;
