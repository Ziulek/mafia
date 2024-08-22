import type { Meta, StoryObj } from "@storybook/react";
import SplashScreen from "./SplashScreen";

const meta: Meta<typeof SplashScreen> = {
  component: SplashScreen,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultError: Story = {
  args: {
    errorMessage: "Something went wrong!",
  },
};
