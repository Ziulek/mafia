import type { Meta, StoryObj } from "@storybook/react";

import joinScreen from "./JoinScreen";

const meta: Meta<typeof joinScreen> = {
  component: joinScreen,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FiledInput: Story = {
  args: {
    gameCode: "GKYRN69N",
  },
};
