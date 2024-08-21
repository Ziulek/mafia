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

export const Male1Police: Story = {
  args: {
    character: "M1",
    role: "police",
    isDead: false,
  },
};

export const Male1Mafia: Story = {
  args: {
    character: "M1",
    role: "mafia",
    isDead: false,
  },
};

export const Male1Detective: Story = {
  args: {
    character: "M1",
    role: "detective",
    isDead: false,
  },
};

export const Male1Dead: Story = {
  args: {
    character: "M1",
    role: "mafia",
    isDead: true,
  },
};
