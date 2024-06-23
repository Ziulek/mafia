import type { Meta, StoryObj } from "@storybook/react";
import StoryDecorator from "@/decorators/StoryDecorator";
import { ChangeAvatarBottomSheet } from "./ChangeAvatarBottomSheet";

const meta: Meta<typeof ChangeAvatarBottomSheet> = {
  component: ChangeAvatarBottomSheet,
  decorators: [StoryDecorator],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    nickname: "Siems",
  },
};
