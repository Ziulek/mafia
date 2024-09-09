import type { Meta, StoryObj } from "@storybook/react";
import InfoTab from "./InfoTab";
import StoryDecorator from "@/decorators/StoryDecorator";
import { Mode } from "@/components/types/Mode";

const meta: Meta<typeof InfoTab> = {
  component: InfoTab,
  decorators: [StoryDecorator],
  argTypes: {
    mode: {
      options: ["host", "player"],
      control: { type: "radio" },
    },
    playerRole: {
      options: ["police", "mafia", "detective", "medic"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const HostMode: Story = {
  args: {
    mode: "host" as Mode,
    selectedRoles: ["police", "mafia", "detective", "medic"],
  },
};

export const PlayerPolice: Story = {
  args: {
    mode: "player" as Mode,
    playerRole: "police",
  },
};
