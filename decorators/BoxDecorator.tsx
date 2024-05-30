import React from "react";
import { StyleSheet, View } from "react-native";

const BoxDecorator = (Story: React.FC) => {
  return (
    <View style={styles.containter}>
      <Story />
    </View>
  );
};

const styles = StyleSheet.create({
  containter: {
    width: 400,
    height: 400,
  },
});

export default BoxDecorator;
