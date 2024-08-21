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

export const Female1Police: Story = {
  args: {
    character: "F1",
    role: "police",
    isDead: false,
  },
};

export const Female1Mafia: Story = {
  args: {
    character: "F1",
    role: "mafia",
    isDead: false,
  },
};

export const Female1Detective: Story = {
  args: {
    character: "F1",
    role: "detective",
    isDead: false,
  },
};

export const Female1Dead: Story = {
  args: {
    character: "F1",
    role: "mafia",
    isDead: true,
  },
};
