import type { Meta, StoryObj } from "@storybook/react";
import ChangeAvatarBottomSheet from "./ChangeAvatarBottomSheet";
import OpenController from "@/decorators/OpenController";

const meta: Meta<typeof ChangeAvatarBottomSheet> = {
  component: ChangeAvatarBottomSheet,
  render: (args) => {
    return (
      <OpenController
        renderContent={(isVisible) => (
          <ChangeAvatarBottomSheet {...args} isVisible={isVisible} />
        )}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    nickname: "Player",
    currentCharacter: "M3",
  },
};
