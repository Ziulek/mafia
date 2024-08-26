import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "tamagui";
import Text from "../Text/Text";
import { colors } from "@/theme/colors";

type NumberListItemProps = {
  title: string;
  value: number;
  setValue: (value: number) => void;
  min?: number;
  max?: number;
};

export function NumberListItem({
  title,
  value,
  setValue,
  min = 0,
  max = 10,
}: NumberListItemProps) {
  const increment = () => {
    if (value < max) setValue(value + 1);
  };

  const decrement = () => {
    if (value > min) setValue(value - 1);
  };

  return (
    <View style={styles.container}>
      <Text size="listItem">{title}</Text>
      <View style={styles.controls}>
        <Button onPress={decrement} style={styles.button} size="$3">
          <Text size="subtitle" isBold={true}>
            {"<"}
          </Text>
        </Button>

        <Text size="subtitle" isBold={true}>
          {value}
        </Text>

        <Button onPress={increment} style={styles.button} size="$3">
          <Text size="subtitle" isBold={true}>
            {">"}
          </Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingLeft: 12,
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: colors.accent,
    overflow: "hidden",
    paddingVertical: 1,
  },
  button: {
    backgroundColor: colors.accent,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 9.5,
  },
});
