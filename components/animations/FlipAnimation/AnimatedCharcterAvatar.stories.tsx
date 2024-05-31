import type { Meta, StoryObj } from "@storybook/react";
import StoryDecorator from "@/decorators/StoryDecorator";
import { AnimatedCharcterAvatar } from "./AnimatedCharcterAvatar";
import BoxDecorator from "@/decorators/BoxDecorator";
import GridDecorator from "@/decorators/GridDecorator";

const meta: Meta<typeof AnimatedCharcterAvatar> = {
  component: AnimatedCharcterAvatar,
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
      options: ["default", "dead", "pressable", "selected"],
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
    state: "pressable",
  },
  decorators: [BoxDecorator],
};

const Avatars = [
  <AnimatedCharcterAvatar
    state="default"
    character="M1"
    role="mafia"
    nickname="Szroomi"
  />,
  <AnimatedCharcterAvatar
    state="default"
    character="M2"
    role="mafia"
    nickname="Szlajmi"
  />,
  <AnimatedCharcterAvatar
    state="default"
    character="M3"
    role="detective"
    nickname="Szmichał"
  />,
  <AnimatedCharcterAvatar
    state="default"
    character="M4"
    role="police"
    nickname="Jakupik"
  />,
  <AnimatedCharcterAvatar
    state="default"
    character="F1"
    role="police"
    nickname="Fajny nick"
  />,
  <AnimatedCharcterAvatar
    state="default"
    character="F2"
    role="police"
    nickname="bardzo długi nick"
  />,
  <AnimatedCharcterAvatar
    state="default"
    character="F3"
    role="police"
    nickname="P0J3b!%!#Ny*^%^$"
  />,
  <AnimatedCharcterAvatar
    state="default"
    character="F4"
    role="police"
    nickname="xD"
  />,
];

export const AllAvatars: Story = {
  render: () => <GridDecorator items={Avatars} columns={2.5} />,
};
