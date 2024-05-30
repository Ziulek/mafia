import type { Meta, StoryObj } from "@storybook/react";
import { CharacterAvatar } from "./CharacterAvatar";
import StoryDecorator from "@/decorators/StoryDecorator";
import GridDecorator from "@/decorators/GridDecorator";
import BoxDecorator from "@/decorators/BoxDecorator";

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
  decorators: [BoxDecorator],
};

export const Male2: Story = {
  args: {
    character: "M2",
    nickname: "Shroomi",
  },
  decorators: [BoxDecorator],
};

export const Male3: Story = {
  args: {
    character: "M3",
  },
  decorators: [BoxDecorator],
};

export const Male4: Story = {
  args: {
    character: "M4",
  },
  decorators: [BoxDecorator],
};

export const Female1: Story = {
  args: {
    character: "F1",
    nickname: "PlaceHolder",
  },
  decorators: [BoxDecorator],
};

export const Female2: Story = {
  args: {
    character: "F2",
  },
  decorators: [BoxDecorator],
};

export const Female3: Story = {
  args: {
    character: "F3",
  },
  decorators: [BoxDecorator],
};

export const Female4: Story = {
  args: {
    character: "F4",
  },
  decorators: [BoxDecorator],
};

const Avatars = [
  <CharacterAvatar character="M1" nickname="Szroomi" />,
  <CharacterAvatar character="M2" nickname="Szlajmi" />,
  <CharacterAvatar character="M3" nickname="Szmichał" />,
  <CharacterAvatar character="M4" nickname="Jakupik" />,
  <CharacterAvatar character="F1" nickname="Fajny nick" />,
  <CharacterAvatar character="F2" nickname="bardzo długi nick" />,
  <CharacterAvatar character="F3" nickname="P0J3b!%!#Ny*^%^$" />,
  <CharacterAvatar character="F4" nickname="xD" />,
];

export const AllAvatars: Story = {
  render: () => <GridDecorator items={Avatars} columns={2.5} />,
};
