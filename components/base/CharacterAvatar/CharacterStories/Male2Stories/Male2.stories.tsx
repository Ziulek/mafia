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

export const Male2Police: Story = {
  args: {
    character: "M2",
    role: "police",
    isDead: false,
  },
};

export const Male2Mafia: Story = {
  args: {
    character: "M2",
    role: "mafia",
    isDead: false,
  },
};

export const Male2Detective: Story = {
  args: {
    character: "M2",
    role: "detective",
    isDead: false,
  },
};

export const Male2Dead: Story = {
  args: {
    character: "M2",
    role: "mafia",
    isDead: true,
  },
};
