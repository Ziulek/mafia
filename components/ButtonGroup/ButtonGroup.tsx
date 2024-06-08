import React from "react";
import { View, StyleSheet } from "react-native";

type ButtonListProps = {
  children: React.ReactNode;
};

export const ButtonGroup = ({ children }: ButtonListProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
    // gap: 20,
  },
});
