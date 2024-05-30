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
    role: "police",
  },
  decorators: [BoxDecorator],
};

export const Male2: Story = {
  args: {
    character: "M2",
    nickname: "Shroomi",
    role: "detective",
  },
  decorators: [BoxDecorator],
};

export const Male3: Story = {
  args: {
    character: "M3",
    role: "mafia",
  },
  decorators: [BoxDecorator],
};

export const Male4: Story = {
  args: {
    character: "M4",
    role: "mafia",
  },
  decorators: [BoxDecorator],
};

export const Female1: Story = {
  args: {
    character: "F1",
    nickname: "PlaceHolder",
    role: "police",
  },
  decorators: [BoxDecorator],
};

export const Female2: Story = {
  args: {
    character: "F2",
    role: "mafia",
  },
  decorators: [BoxDecorator],
};

export const Female3: Story = {
  args: {
    character: "F3",
    role: "detective",
  },
  decorators: [BoxDecorator],
};

export const Female4: Story = {
  args: {
    character: "F4",
    role: "police",
  },
  decorators: [BoxDecorator],
};

const Avatars = [
  <CharacterAvatar character="M1" role="mafia" nickname="Szroomi" />,
  <CharacterAvatar character="M2" role="mafia" nickname="Szlajmi" />,
  <CharacterAvatar character="M3" role="detective" nickname="Szmichał" />,
  <CharacterAvatar character="M4" role="police" nickname="Jakupik" />,
  <CharacterAvatar character="F1" role="police" nickname="Fajny nick" />,
  <CharacterAvatar character="F2" role="police" nickname="bardzo długi nick" />,
  <CharacterAvatar character="F3" role="police" nickname="P0J3b!%!#Ny*^%^$" />,
  <CharacterAvatar character="F4" role="police" nickname="xD" />,
];

export const AllAvatars: Story = {
  render: () => <GridDecorator items={Avatars} columns={2.5} />,
};
