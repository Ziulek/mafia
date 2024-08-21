import type { Meta, StoryObj } from "@storybook/react";
import StoryDecorator from "@/decorators/StoryDecorator";
import { PlayerActionsBottomSheet } from "./PlayerActionsBottomSheet";
import { useState } from "react";
import OpenController from "@/decorators/OpenController";

const meta: Meta<typeof PlayerActionsBottomSheet> = {
  component: PlayerActionsBottomSheet,
  render: (args) => {
    return (
      <OpenController
        renderContent={(isVisible) => (
          <PlayerActionsBottomSheet {...args} isVisible={isVisible} />
        )}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    nickname: "Kaszti",
  },
};
