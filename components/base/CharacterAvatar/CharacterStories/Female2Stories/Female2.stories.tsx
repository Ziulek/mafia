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

export const Female2Police: Story = {
  args: {
    character: "F2",
    role: "police",
    isDead: false,
  },
};

export const Female2Mafia: Story = {
  args: {
    character: "F2",
    role: "mafia",
    isDead: false,
  },
};

export const Female2Detective: Story = {
  args: {
    character: "F2",
    role: "detective",
    isDead: false,
  },
};

export const Female2Dead: Story = {
  args: {
    character: "F2",
    role: "mafia",
    isDead: true,
  },
};
