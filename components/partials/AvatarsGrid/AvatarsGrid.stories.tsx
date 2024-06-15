import type { Meta, StoryObj } from "@storybook/react";
import StoryDecorator from "@/decorators/StoryDecorator";
import AvatarGrid from "./AvatarsGrid";

const meta: Meta<typeof AvatarGrid> = {
  component: AvatarGrid,
  decorators: [StoryDecorator],
  argTypes: {
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
    mode: "pressable",
    items: [
      {
        character: "M1",
        role: "police",
        nickname: "Johnny",
        isDead: false,
      },
      {
        character: "F1",
        role: "mafia",
        nickname: "siems",
        isDead: false,
      },
      {
        character: "M2",
        role: "mafia",
        nickname: "siems",
        isDead: false,
      },
      {
        character: "F2",
        role: "mafia",
        nickname: "siems",
        isDead: true,
      },
      {
        character: "M3",
        role: "mafia",
        nickname: "siems",
        isDead: false,
      },
      {
        character: "F3",
        role: "mafia",
        nickname: "siems",
        isDead: false,
      },
      {
        character: "M4",
        role: "mafia",
        nickname: "siems",
        isDead: false,
      },
      {
        character: "F4",
        role: "mafia",
        nickname: "siems",
        isDead: false,
      },
      {
        character: "M4",
        role: "mafia",
        nickname: "siems",
        isDead: false,
      },
      {
        character: "F4",
        role: "mafia",
        nickname: "siems",
        isDead: false,
      },
      {
        character: "M4",
        role: "mafia",
        nickname: "siems",
        isDead: false,
      },
      {
        character: "F4",
        role: "mafia",
        nickname: "siems",
        isDead: false,
      },
    ],
  },
};
