import type { Meta, StoryObj } from "@storybook/react";
import onBoardingScreen from "./onBoardingScreen";

const meta: Meta<typeof onBoardingScreen> = {
  component: onBoardingScreen,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: "police",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lab",
  },
};
