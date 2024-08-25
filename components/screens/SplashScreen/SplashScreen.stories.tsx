import type { Meta, StoryObj } from "@storybook/react";
import SplashScreen from "./SplashScreen";

const meta: Meta<typeof SplashScreen> = {
  component: SplashScreen,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const soloSpinner: Story = {
  args: {
    simpleLoader: true,
  },
};

export const SplashScreenStory: Story = {};
