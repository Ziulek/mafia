import type { Meta, StoryObj } from "@storybook/react";
import PageIndicator from "./PageIndicator"; // Adjust the import path if needed
import StoryDecorator from "@/decorators/StoryDecorator"; // Adjust the import path if needed

const meta: Meta<typeof PageIndicator> = {
  component: PageIndicator,
  decorators: [StoryDecorator],
  argTypes: {
    currentPage: {
      options: [0, 1], // Page 0 (left) and Page 1 (right)
      control: { type: "radio" },
    },
  },
  args: {
    currentPage: 0, // Default to the left page
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LeftPage: Story = {
  args: {
    currentPage: 0, // Left page active
  },
};

export const RightPage: Story = {
  args: {
    currentPage: 1, // Right page active
  },
};
