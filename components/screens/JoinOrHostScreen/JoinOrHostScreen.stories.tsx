import type { Meta, StoryObj } from "@storybook/react";
import joinOrHostScreen from "./JoinOrHostScreen";

const meta: Meta<typeof joinOrHostScreen> = {
  component: joinOrHostScreen,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
