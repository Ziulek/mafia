import type { Meta, StoryObj } from "@storybook/react";
import StoryDecorator from "@/decorators/StoryDecorator";
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
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const avatarAlive: Story = {
  args: {
    character: "M1",
    role: "mafia",
    nickname: "Lorem Ipsum Dupol",
    isDead: false,
    isPressable: true,
    showRolesAfterDeath: false,
  },
};

export const avatarDead: Story = {
  args: {
    character: "M1",
    role: "mafia",
    nickname: "Lorem Ipsum Dupol",
    isDead: true,
  },
};
