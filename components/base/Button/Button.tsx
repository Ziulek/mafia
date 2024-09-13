import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Text from "../Text/Text";
import { colors } from "@/theme/colors";

export type ButtonProps = {
  children: string;
  isBold?: boolean;
  isDisabled?: boolean;
  color: "accent" | "primary" | "kill" | "secondary" | "back";
  PressOutDelay?: number;
  onLongPress?: () => void;
  onPressOut?: () => void;
  onPressIn?: () => void;
  onPress?: () => void;
};

export const Button = ({
  isBold = false,
  isDisabled = false,
  color,
  PressOutDelay = 0,
  onLongPress = () => {},
  onPressOut = () => {},
  onPressIn = () => {},
  onPress = () => {},
  children,
}: ButtonProps) => {
  let buttonColor: string;
  let textColor: "black" | "white";

  if (isDisabled) {
    buttonColor = colors.isDisabled;
    textColor = "white";
  } else {
    switch (color) {
      case "accent":
        buttonColor = colors.accent;
        textColor = "black";
        break;
      case "primary":
        buttonColor = colors.primary;
        textColor = "black";
        break;
      case "kill":
        buttonColor = colors.kill;
        textColor = "white";
        break;
      case "secondary":
        buttonColor = colors.secondary;
        textColor = "white";
        break;
      case "back":
        buttonColor = colors.back;
        textColor = "white";
        break;
    }
  }

  const styles = StyleSheet.create({
    button: {
      backgroundColor: buttonColor,
      // justifyContent: "center",
      alignItems: "center",
      width: "100%",
      borderRadius: 50,
      paddingVertical: 15,
    },
  });

  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={styles.button}
      onPress={() => onPress()}
      onLongPress={() => onLongPress()}
      onPressIn={() => onPressIn()}
      delayPressOut={PressOutDelay}
      onPressOut={() => onPressOut()}
    >
      <Text size="button" isBold={isBold} color={textColor}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
