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
        id: "1",
        character: "M1",
        role: "police",
        nickname: "Johnny",
        isDead: false,
      },
      {
        id: "2",
        character: "F1",
        role: "mafia",
        nickname: "siems",
        isDead: false,
      },
      {
        id: "3",
        character: "M2",
        role: "mafia",
        nickname: "siems",
        isDead: false,
      },
      {
        id: "4",
        character: "F2",
        role: "mafia",
        nickname: "siems",
        isDead: true,
      },
      {
        id: "5",
        character: "M3",
        role: "mafia",
        nickname: "siems",
        isDead: false,
      },
      {
        id: "6",
        character: "F3",
        role: "mafia",
        nickname: "siems",
        isDead: false,
      },
      {
        id: "7",
        character: "M4",
        role: "mafia",
        nickname: "siems",
        isDead: false,
      },
      {
        id: "8",
        character: "F4",
        role: "mafia",
        nickname: "siems",
        isDead: false,
      },
      {
        id: "9",
        character: "M4",
        role: "mafia",
        nickname: "siems",
        isDead: false,
      },
      {
        id: "10",
        character: "F4",
        role: "mafia",
        nickname: "siems",
        isDead: false,
      },
      {
        id: "11",
        character: "M4",
        role: "mafia",
        nickname: "siems",
        isDead: false,
      },
      {
        id: "12",
        character: "F4",
        role: "mafia",
        nickname: "siems",
        isDead: false,
      },
    ],
  },
};
