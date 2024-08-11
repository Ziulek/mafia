import type { Meta, StoryObj } from "@storybook/react";
import onBoardingScreen from "./onBoardingScreen";

const meta: Meta<typeof onBoardingScreen> = {
  component: onBoardingScreen,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
