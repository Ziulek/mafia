import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import StoryDecorator from "@/decorators/StoryDecorator";

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [StoryDecorator],
  argTypes: {
    color: {
      options: ["accent", "primary", "kill", "secondary", "back"],
      control: { type: "radio" },
    },
  },
  args: {
    onPress: () => {
      console.log("on presik");
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Accent: Story = {
  args: {
    children: "Host New Game",
    isBold: true,
    color: "accent",
  },
};

export const Primary: Story = {
  args: {
    children: "Show Roles",
    isBold: true,
    color: "primary",
  },
};

export const Kill: Story = {
  args: {
    children: "Kill Player",

    color: "kill",
  },
};

export const Secondary: Story = {
  args: {
    children: "Kick Player",

    color: "secondary",
  },
};

export const Back: Story = {
  args: {
    children: "Cancel",

    color: "back",
  },
};

export const Disabled: Story = {
  args: {
    children: "Next",
    isBold: true,
    isDisabled: true,
  },
};
