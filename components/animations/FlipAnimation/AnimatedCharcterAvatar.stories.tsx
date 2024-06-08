import type { Meta, StoryObj } from "@storybook/react";
import StoryDecorator from "@/decorators/StoryDecorator";

import BoxDecorator from "@/decorators/BoxDecorator";
import GridDecorator from "@/decorators/GridDecorator";
import AnimatedCharacterAvatar from "./AnimatedCharcterAvatar";

const meta: Meta<typeof AnimatedCharacterAvatar> = {
  component: AnimatedCharacterAvatar,
  decorators: [StoryDecorator],
  argTypes: {
    character: {
      options: ["M1", "M2", "M3", "M4", "F1", "F2", "F3", "F4"],
      control: { type: "radio" },
    },
    role: {
      options: ["mafia", "police", "detective"],
      control: { type: "radio" },
    },
    state: {
      options: ["default", "revealed", "dead"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    character: "M1",
    role: "police",
    nickname: "Placeholder",
    state: "default",
  },
  decorators: [BoxDecorator],
};

const Avatars = [
  <AnimatedCharacterAvatar
    state="default"
    character="M1"
    role="mafia"
    nickname="Szroomi"
  />,
  <AnimatedCharacterAvatar
    state="default"
    character="M2"
    role="mafia"
    nickname="Szlajmi"
  />,
  <AnimatedCharacterAvatar
    state="default"
    character="M3"
    role="detective"
    nickname="Szmichał"
  />,
  <AnimatedCharacterAvatar
    state="default"
    character="M4"
    role="police"
    nickname="Jakupik"
  />,
  <AnimatedCharacterAvatar
    state="default"
    character="F1"
    role="police"
    nickname="Fajny nick"
  />,
  <AnimatedCharacterAvatar
    state="default"
    character="F2"
    role="police"
    nickname="bardzo długi nick"
  />,
  <AnimatedCharacterAvatar
    state="default"
    character="F3"
    role="police"
    nickname="P0J3b!%!#Ny*^%^$"
  />,
  <AnimatedCharacterAvatar
    state="default"
    character="F4"
    role="police"
    nickname="xD"
  />,
];

export const AllAvatars: Story = {
  render: () => <GridDecorator items={Avatars} columns={2.5} />,
};
