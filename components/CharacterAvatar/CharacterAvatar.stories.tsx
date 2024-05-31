import type { Meta, StoryObj } from "@storybook/react";
import { CharacterAvatar } from "./CharacterAvatar";
import StoryDecorator from "@/decorators/StoryDecorator";
import GridDecorator from "@/decorators/GridDecorator";
import BoxDecorator from "@/decorators/BoxDecorator";

const meta: Meta<typeof CharacterAvatar> = {
  component: CharacterAvatar,
  decorators: [BoxDecorator, StoryDecorator],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Male1: Story = {
  args: {
    character: "M1",
    role: "police",
  },
};

export const Male2: Story = {
  args: {
    character: "M2",
    role: "detective",
  },
};

export const Male3: Story = {
  args: {
    character: "M3",
    role: "mafia",
  },
};

export const Male4: Story = {
  args: {
    character: "M4",
    role: "mafia",
  },
};

export const Female1: Story = {
  args: {
    character: "F1",
    role: "police",
  },
};

export const Female2: Story = {
  args: {
    character: "F2",
    role: "mafia",
  },
};

export const Female3: Story = {
  args: {
    character: "F3",
    role: "detective",
  },
};

export const Female4: Story = {
  args: {
    character: "F4",
    role: "police",
  },
};
