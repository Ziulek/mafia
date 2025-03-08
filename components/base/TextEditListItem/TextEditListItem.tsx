import { colors } from "@/theme/colors";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Input } from "tamagui";

type TextEditListItemProps = {
  placeholder: string;
  isInputValid?: boolean;
  textToUpperCase?: boolean;
  text: string;
  setText: (newText: string) => void;
  onFocus?: () => void; // Add this prop
  onBlur?: () => void; // Add this prop
  testID?: string;
};

export function TextEditListItem({
  placeholder,
  isInputValid = true,
  text,
  textToUpperCase = false,
  setText,
  onFocus = () => {},
  onBlur = () => {},
  testID,
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
        autoCapitalize={textToUpperCase ? "characters" : undefined}
        onChangeText={handleTextChange}
        onFocus={onFocus}
        onBlur={onBlur}
        ellipse={true}
        backgroundColor={isInputValid ? "white" : colors.invalidInput}
        borderWidth={2}
        borderColor={isInputValid ? "grey" : colors.invalidInputBorder}
        focusStyle={{
          borderColor: isInputValid ? "grey" : colors.invalidInputBorder,
        }}
        testID={testID}
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
