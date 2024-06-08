import React from "react";
import { StyleSheet, Image, View, TouchableOpacity, Text } from "react-native";

export type ButtonProps = {
  children: string;
  isBold?: boolean;
  isDisabled?: boolean;
  color: "accent" | "primary" | "kill" | "secondary" | "back";
  onPress: () => void;
  onLongPress?: () => void;
};

export const Button = ({
  isBold = false,
  isDisabled = false,
  color,
  onPress,
  onLongPress = () => {},
  children,
}: ButtonProps) => {
  let buttonColor;
  let textColor;

  switch (isDisabled) {
    case true:
      buttonColor = "#C2C2C2";
      textColor = "white";
      break;
    case false:
      switch (color) {
        case "accent":
          buttonColor = "#F7CD5B";
          textColor = "black";
          break;

        case "primary":
          buttonColor = "#EAECD6";
          textColor = "black";
          break;

        case "kill":
          buttonColor = "#A14141";
          textColor = "white";
          break;

        case "secondary":
          buttonColor = "#000000";
          textColor = "white";
          break;

        case "back":
          buttonColor = "#878787";
          textColor = "white";
          break;
      }
      break;
  }

  const styles = StyleSheet.create({
    button: {
      backgroundColor: buttonColor,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 50,
      width: "100%",
      paddingVertical: 12,
    },
    text: {
      fontSize: 27,
      fontWeight: isBold ? "bold" : "normal",
      color: textColor,
    },
  });

  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={styles.button}
      onPress={() => onPress()}
      onLongPress={() => onLongPress()}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};
