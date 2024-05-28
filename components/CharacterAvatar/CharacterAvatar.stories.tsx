import React from "react";
import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { CharacterAvatar } from "./CharacterAvatar";

const CharacterAvatarMeta: Meta<typeof CharacterAvatar> = {
  title: "CharacterAvatar",
  component: CharacterAvatar,
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

export default CharacterAvatarMeta;

export const Basic: StoryObj<typeof CharacterAvatar> = {};

export const AnotherExample: StoryObj<typeof CharacterAvatar> = {
  args: {
    text: "Another example",
  },
};
