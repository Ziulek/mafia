import type { Meta, StoryObj } from "@storybook/react";
import StoryDecorator from "@/decorators/StoryDecorator";
import { StartScreen } from "./StartScreen";

const meta: Meta<typeof StartScreen> = {
  component: StartScreen,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
