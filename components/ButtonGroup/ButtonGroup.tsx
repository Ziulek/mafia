import React from "react";
import { FlatList, View, StyleSheet, VirtualizedList } from "react-native";
import { Button } from "../Button/Button";

type ButtonListProps = {
  children: React.ReactNode;
};

export const ButtonGroup = ({ children }: ButtonListProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 20,
  },
});
