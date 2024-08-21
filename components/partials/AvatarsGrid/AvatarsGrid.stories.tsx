import type { Meta, StoryObj } from "@storybook/react";
import StoryDecorator from "@/decorators/StoryDecorator";
import AvatarGrid from "./AvatarsGrid";
import { Player } from "@/components/types/Player";

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

const players: Player[] = [
  {
    id: "1324",
    character: "M1",
    role: "police",
    nickname: "Player1",
    isDead: false,
  },
  {
    id: "2567",
    character: "M2",
    role: "mafia",
    nickname: "Player2",
    isDead: false,
  },
  {
    id: "3978",
    character: "M3",
    role: "mafia",
    nickname: "Player3",
    isDead: false,
  },
  {
    id: "4678",
    character: "M4",
    role: "mafia",
    nickname: "Player4",
    isDead: true,
  },
  {
    id: "5097",
    character: "F1",
    role: "mafia",
    nickname: "Player5",
    isDead: false,
  },
  {
    id: "6456",
    character: "F2",
    role: "mafia",
    nickname: "Player6",
    isDead: false,
  },
  {
    id: "7867",
    character: "F3",
    role: "mafia",
    nickname: "Player7",
    isDead: false,
  },
  {
    id: "8945",
    character: "F4",
    role: "mafia",
    nickname: "Player8",
    isDead: false,
  },
];

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mode: "pressable",
    items: players,
  },
};

export const Revealed: Story = {
  args: {
    mode: "revealed",
    items: players,
  },
};
