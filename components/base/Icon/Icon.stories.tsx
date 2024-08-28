import type { Meta, StoryObj } from "@storybook/react";
import StoryDecorator from "@/decorators/StoryDecorator";
import Icon from "./Icon";

const meta: Meta<typeof Icon> = {
  component: Icon,
  decorators: [StoryDecorator],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ArrowLeft: Story = {
  args: {
    name: "arrowLeft",
    size: "big",
  },
};

export const Account: Story = {
  args: {
    name: "account",
    size: "big",
  },
};
