import type { Meta, StoryObj } from "@storybook/react";
import StoryDecorator from "@/decorators/StoryDecorator";
import { FlipAnimation } from "./FlipAnimation";

const meta: Meta<typeof FlipAnimation> = {
  component: FlipAnimation,
  decorators: [StoryDecorator],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Male1: Story = {};