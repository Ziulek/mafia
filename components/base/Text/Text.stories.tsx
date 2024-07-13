import type { Meta, StoryObj } from "@storybook/react";
import StoryDecorator from "@/decorators/StoryDecorator";
import Text from "./Text";

const meta: Meta<typeof Text> = {
  component: Text,
  decorators: [StoryDecorator],
  argTypes: {
    size: {
      options: ["listItem", "button", "subtitle", "headline"],
      control: { type: "radio" },
    },
    color: {
      options: ["black", "white"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "headline",
    isBold: true,
    color: "black",
    children: "Lorem Ipsum Dupol",
  },
};
