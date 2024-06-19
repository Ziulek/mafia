import type { Meta, StoryObj } from "@storybook/react";
import StoryDecorator from "@/decorators/StoryDecorator";

import BoxDecorator from "@/decorators/BoxDecorator";
import AnimatedCharacterAvatar from "./AnimatedCharacterAvatar";

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
    mode: {
      options: ["default", "revealed", "pressable"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    character: "M1",
    role: "mafia",
    nickname: "Lorem Ipsum Dupol",
    isDead: false,
    mode: "pressable",
  },
};
