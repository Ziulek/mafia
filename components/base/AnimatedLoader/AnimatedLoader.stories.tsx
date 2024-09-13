import type { Meta, StoryObj } from "@storybook/react";
import AnimatedLoader from "./AnimatedLoader";
import StoryDecorator from "@/decorators/StoryDecorator";

const meta: Meta<typeof AnimatedLoader> = {
  component: AnimatedLoader,
  decorators: [StoryDecorator],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
