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

const meta: Meta<typeof CharacterAvatar> = {
  component: CharacterAvatar,
  decorators: [StoryDecorator],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Male1: Story = {
  args: {
    character: "M1",
    nickname: "Szlajmi",
  },
  decorators: [CharacterAvatarDecorator],
};

export const Male2: Story = {
  args: {
    character: "M2",
    nickname: "Shroomi",
  },
  decorators: [CharacterAvatarDecorator],
};

export const Male3: Story = {
  args: {
    character: "M3",
  },
  decorators: [CharacterAvatarDecorator],
};

export const Male4: Story = {
  args: {
    character: "M4",
  },
  decorators: [CharacterAvatarDecorator],
};

export const Female1: Story = {
  args: {
    character: "F1",
    nickname: "PlaceHolder",
  },
  decorators: [CharacterAvatarDecorator],
};

export const Female2: Story = {
  args: {
    character: "F2",
  },
  decorators: [CharacterAvatarDecorator],
};

export const Female3: Story = {
  args: {
    character: "F3",
  },
  decorators: [CharacterAvatarDecorator],
};

export const Female4: Story = {
  args: {
    character: "F4",
  },
  decorators: [CharacterAvatarDecorator],
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

export const AllAvatars: Story = {
  render: () => <GridDecorator items={Avatars} columns={2.5} />,
};

const styles = StyleSheet.create({
  container: {
    height: 175,
    width: 175,
  },
});
