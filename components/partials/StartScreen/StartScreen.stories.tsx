import type { Meta, StoryObj } from "@storybook/react";
import StartScreen from "./StartScreen";

const meta: Meta<typeof StartScreen> = {
  component: StartScreen,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: "police",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lab",
  },
};