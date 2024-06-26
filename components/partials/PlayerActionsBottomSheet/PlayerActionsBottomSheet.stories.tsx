import type { Meta, StoryObj } from "@storybook/react";
import StoryDecorator from "@/decorators/StoryDecorator";
import { PlayerActionsBottomSheet } from "./PlayerActionsBottomSheet";
import { useState } from "react";

const meta: Meta<typeof PlayerActionsBottomSheet> = {
  component: PlayerActionsBottomSheet,
  decorators: [StoryDecorator],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [showBottomSheet, setShowBottomSheet] = useState(true);

    return (
      <PlayerActionsBottomSheet
        nickname="asjkehvfaef"
        onKill={() => console.log("kill")}
        onKick={() => console.log("kick")}
        isVisible={showBottomSheet}
        setIsVisible={setShowBottomSheet}
      />
    );
  },
  // args: {
  //   nickname: "Placeholder",
  // },
};
