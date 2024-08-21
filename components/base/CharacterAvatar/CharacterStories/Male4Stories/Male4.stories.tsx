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

export const Male4Police: Story = {
  args: {
    character: "M4",
    role: "police",
    isDead: false,
  },
};

export const Male4Mafia: Story = {
  args: {
    character: "M4",
    role: "mafia",
    isDead: false,
  },
};

export const Male4Detective: Story = {
  args: {
    character: "M4",
    role: "detective",
    isDead: false,
  },
};

export const Male4Dead: Story = {
  args: {
    character: "M4",
    role: "mafia",
    isDead: true,
  },
};
