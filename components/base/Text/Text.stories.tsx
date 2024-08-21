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

export const ListItemText: Story = {
  args: {
    size: "listItem",
    isBold: true,
    color: "black",
    isTextAlignCenter: true,
    children: "Lorem Ipsum Dupol",
  },
};

export const ButtonText: Story = {
  args: {
    size: "button",
    isBold: true,
    color: "black",
    isTextAlignCenter: true,
    children: "Lorem Ipsum Dupol",
  },
};

export const SubtitleText: Story = {
  args: {
    size: "subtitle",
    isBold: true,
    color: "black",
    isTextAlignCenter: true,
    children: "Lorem Ipsum Dupol",
  },
};

export const HeadlineText: Story = {
  args: {
    size: "headline",
    isBold: true,
    color: "black",
    isTextAlignCenter: true,
    children: "Lorem Ipsum Dupol",
  },
};

export const StartScreenSubtitleText: Story = {
  args: {
    size: "startScreenSubtitle",
    isBold: true,
    color: "black",
    isTextAlignCenter: true,
    children: "Lorem Ipsum Dupol",
  },
};

export const StartScreenHeadlineText: Story = {
  args: {
    size: "startScreenHeadline",
    isBold: true,
    color: "black",
    isTextAlignCenter: true,
    children: "Lorem Ipsum Dupol",
  },
};
