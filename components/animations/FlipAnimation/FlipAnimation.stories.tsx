import React from "react";
import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { FlipAnimation } from "./FlipAnimation";

const FlipAnimationMeta: Meta<typeof FlipAnimation> = {
  title: "FlipAnimation",
  component: FlipAnimation,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Hello world",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default FlipAnimationMeta;

export const Basic: StoryObj<typeof FlipAnimation> = {};

export const AnotherExample: StoryObj<typeof FlipAnimation> = {
  args: {
    text: "FlipAnimation",
  },
};
