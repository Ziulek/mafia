import React from "react";
import { StyleSheet, View } from "react-native";
import { Input } from "tamagui";

type TextEditListItemProps = {
  placeholder: string;
  text: string;
  setText: (newText: string) => void;
};

export function TextEditListItem({
  placeholder,
  text,
  setText,
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
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: "AmericanTypewriter",
  },
});
