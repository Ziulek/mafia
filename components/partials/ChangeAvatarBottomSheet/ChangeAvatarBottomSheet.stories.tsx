import type { Meta, StoryObj } from "@storybook/react";
import StoryDecorator from "@/decorators/StoryDecorator";
import { ChangeAvatarBottomSheet } from "./ChangeAvatarBottomSheet";
import { useState } from "react";

const meta: Meta<typeof ChangeAvatarBottomSheet> = {
  component: ChangeAvatarBottomSheet,
  decorators: [StoryDecorator],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [showBottomSheet, setShowBottomSheet] = useState(true);

    return (
      <ChangeAvatarBottomSheet
        nickname="asjkehvfaef"
        isVisible={showBottomSheet}
        setIsVisible={setShowBottomSheet}
        onCharacterSelected={(snappedItem) =>
          console.log("Snapped to:", snappedItem)
        }
      />
    );
  },
  // args: {
  //   nickname: "Siems",
  // },
};
