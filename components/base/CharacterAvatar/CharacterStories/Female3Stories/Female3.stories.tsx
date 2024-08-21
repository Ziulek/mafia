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

export const Female3Police: Story = {
  args: {
    character: "F3",
    role: "police",
    isDead: false,
  },
};

export const Female3Mafia: Story = {
  args: {
    character: "F3",
    role: "mafia",
    isDead: false,
  },
};

export const Female3Detective: Story = {
  args: {
    character: "F3",
    role: "detective",
    isDead: false,
  },
};

export const Female3Dead: Story = {
  args: {
    character: "F3",
    role: "mafia",
    isDead: true,
  },
};
