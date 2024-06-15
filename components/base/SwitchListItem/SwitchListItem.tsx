import React from "react";
import { StyleSheet, View } from "react-native";
import { Switch } from "tamagui";
import Text from "../Text/Text";

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
      backgroundColor: isOn ? "#1fbb03" : "#232323",

      borderColor: isOn ? "#1fbb03" : "#232323",
    },
    thumb: {
      backgroundColor: "#EAECD6",
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
        <Switch.Thumb animation="quicker" style={styles.thumb} />
      </Switch>
    </View>
  );
}
