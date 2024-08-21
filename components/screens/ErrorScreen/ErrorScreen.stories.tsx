import type { Meta, StoryObj } from "@storybook/react";
import ErrorScreen from "./ErrorScreen";

const meta: Meta<typeof ErrorScreen> = {
  component: ErrorScreen,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultError: Story = {
  args: {
    errorMessage: "Something went wrong!",
  },
};
