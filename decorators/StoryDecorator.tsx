import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

const StoryDecorator = (Story: React.FC) => {
  return (
    <SafeAreaView style={styles.containter}>
      <Story />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StoryDecorator;
