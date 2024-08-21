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

export const Male3Police: Story = {
  args: {
    character: "M3",
    role: "police",
    isDead: false,
  },
};

export const Male3Mafia: Story = {
  args: {
    character: "M3",
    role: "mafia",
    isDead: false,
  },
};

export const Male3Detective: Story = {
  args: {
    character: "M3",
    role: "detective",
    isDead: false,
  },
};

export const Male3Dead: Story = {
  args: {
    character: "M3",
    role: "mafia",
    isDead: true,
  },
};
