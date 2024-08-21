import type { Meta, StoryObj } from "@storybook/react";
import { BottomSheet } from "./BottomSheet";
import OpenController from "@/decorators/OpenController";

const meta: Meta<typeof BottomSheet> = {
  component: BottomSheet,
  render: (args) => {
    return (
      <OpenController
        renderContent={(isVisible) => (
          <BottomSheet {...args} isVisible={isVisible} />
        )}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Bottom Sheet",
  },
};
