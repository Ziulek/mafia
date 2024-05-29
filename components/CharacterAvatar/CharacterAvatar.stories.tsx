import type { Meta, StoryObj } from "@storybook/react";
import { CharacterAvatar } from "./CharacterAvatar";
import { StyleSheet, View } from "react-native";
import StoryDecorator from "@/decorators/StoryDecorator";
import GridDecorator from "@/decorators/GridDecorator";

const CharacterAvatarDecorator = (Story: React.FC) => (
  <View style={styles.container}>
    <Story />
  </View>
);

const CharacterAvatarMeta: Meta<typeof CharacterAvatar> = {
  title: "CharacterAvatar",
  component: CharacterAvatar,
  decorators: [CharacterAvatarDecorator, StoryDecorator],
};

export default CharacterAvatarMeta;

export const Male1: StoryObj<typeof CharacterAvatar> = {
  args: {
    character: "M1",
    nickname: "Szlajmi",
  },
};

export const Male2: StoryObj<typeof CharacterAvatar> = {
  args: {
    character: "M2",
    nickname: "Shroomi",
  },
};

export const Male3: StoryObj<typeof CharacterAvatar> = {
  args: {
    character: "M3",
  },
};

export const Male4: StoryObj<typeof CharacterAvatar> = {
  args: {
    character: "M4",
  },
};

export const Female1: StoryObj<typeof CharacterAvatar> = {
  args: {
    character: "F1",
  },
};

export const Female2: StoryObj<typeof CharacterAvatar> = {
  args: {
    character: "F2",
  },
};

export const Female3: StoryObj<typeof CharacterAvatar> = {
  args: {
    character: "F3",
  },
};

export const Female4: StoryObj<typeof CharacterAvatar> = {
  args: {
    character: "F4",
  },
};

const Avatars = [
  <CharacterAvatar character="M1" />,
  <CharacterAvatar character="M2" />,
  <CharacterAvatar character="M3" />,
  <CharacterAvatar character="M4" />,
  <CharacterAvatar character="F1" />,
  <CharacterAvatar character="F2" />,
  <CharacterAvatar character="F3" />,
  <CharacterAvatar character="F4" />,
];

export const AllAvatars: StoryObj<typeof CharacterAvatar> = {
  render: () => <GridDecorator items={Avatars} columns={2.5} />,
};

const styles = StyleSheet.create({
  container: {
    height: 175,
    width: 175,
  },
});
