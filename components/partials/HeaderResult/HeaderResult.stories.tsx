import type { Meta, StoryObj } from "@storybook/react";
import { HeaderResult } from "./HeaderResult";
import OpenController from "@/decorators/OpenController";

const meta: Meta<typeof HeaderResult> = {
  component: HeaderResult,
  render: (args) => {
    return (
      <OpenController
        renderContent={(isVisible) => (
          <HeaderResult {...args} isVisible={isVisible} />
        )}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    winner: "mafia",
    isVisible: true,
  },
};
