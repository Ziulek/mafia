import React from "react";
import { StyleSheet, View } from "react-native";
import { Switch } from "tamagui";
import Text from "../Text/Text";
import { colors } from "@/theme/colors";

type SwitchListItemProps = {
  title: string;
  isOn: boolean;
  setIsOn: (value: boolean) => void;
};

export function SwitchListItem({ title, isOn, setIsOn }: SwitchListItemProps) {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      paddingLeft: 12,
    },
    switch: {
      backgroundColor: isOn ? colors.switchOn : colors.switchOff,

      borderColor: colors.switchOff,
    },
    thumb: {
      backgroundColor: colors.primary,
    },
  });

  return (
    <View style={styles.container}>
      <Text size="listItem">{title}</Text>
      <Switch
        size="$5"
        checked={isOn}
        onCheckedChange={() => {
          setIsOn(!isOn);
        }}
        style={styles.switch}
      >
        <Switch.Thumb animation="quickest" style={styles.thumb} />
      </Switch>
    </View>
  );
}
