import type { Meta, StoryObj } from "@storybook/react";
import StoryDecorator from "@/decorators/StoryDecorator";
import { FlipAnimation } from "./FlipAnimation";

const meta: Meta<typeof FlipAnimation> = {
  component: FlipAnimation,
  decorators: [StoryDecorator],
  argTypes: {
    character: {
      options: ["M1", "M2", "M3", "M4", "F1", "F2", "F3", "F4"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    character: "M1",
  },
};
