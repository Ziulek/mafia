import type { Meta, StoryObj } from "@storybook/react";
import StoryDecorator from "@/decorators/StoryDecorator";
import { PlayerActionsBottomSheet } from "./PlayerActionsBottomSheet";

const meta: Meta<typeof PlayerActionsBottomSheet> = {
  component: PlayerActionsBottomSheet,
  decorators: [StoryDecorator],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    nickname: "Placeholder",
  },
};
