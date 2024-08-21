import type { Meta, StoryObj } from "@storybook/react";
import { CharacterAvatar } from "../../CharacterAvatar";
import StoryDecorator from "@/decorators/StoryDecorator";
import BoxDecorator from "@/decorators/BoxDecorator";

const meta: Meta<typeof CharacterAvatar> = {
  component: CharacterAvatar,
  decorators: [BoxDecorator, StoryDecorator],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Female4Police: Story = {
  args: {
    character: "F4",
    role: "police",
    isDead: false,
  },
};

export const Female4Mafia: Story = {
  args: {
    character: "F4",
    role: "mafia",
    isDead: false,
  },
};

export const Female4Detective: Story = {
  args: {
    character: "F4",
    role: "detective",
    isDead: false,
  },
};

export const Female4Dead: Story = {
  args: {
    character: "F4",
    role: "mafia",
    isDead: true,
  },
};
