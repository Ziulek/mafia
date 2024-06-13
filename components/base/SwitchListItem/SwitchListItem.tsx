import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Switch } from "tamagui";

type SwitchListItemProps = {
  title: string;
  isOn: boolean;
  setIsOn: (value: boolean) => void;
};

export function SwitchListItem({ title, isOn, setIsOn }: SwitchListItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingLeft: 10,
  },
  switch: {
    backgroundColor: "#232323",

    borderColor: "#232323",
  },
  thumb: {
    backgroundColor: "#EAECD6",
  },
  text: {
    fontSize: 20,
  },
});
