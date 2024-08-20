import { colors } from "@/theme/colors";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Input } from "tamagui";

type TextEditListItemProps = {
  placeholder: string;
  isInputValid?: boolean;
  text: string;
  setText: (newText: string) => void;
  onFocus?: () => void; // Add this prop
  onBlur?: () => void; // Add this prop
};

export function TextEditListItem({
  placeholder,
  isInputValid = true,
  text,
  setText,
  onFocus = () => {},
  onBlur = () => {},
}: TextEditListItemProps) {
  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        size="$5"
        placeholder={placeholder}
        value={text}
        onChangeText={handleTextChange}
        onFocus={onFocus}
        onBlur={onBlur}
        backgroundColor={isInputValid ? "white" : colors.invalidInput}
        borderWidth={2}
        borderColor={isInputValid ? "grey" : colors.invalidInputBorder}
        focusStyle={{
          borderColor: isInputValid ? "grey" : colors.invalidInputBorder,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: "AmericanTypewriter",
  },
});
