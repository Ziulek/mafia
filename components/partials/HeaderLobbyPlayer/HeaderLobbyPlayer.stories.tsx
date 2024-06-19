import type { Meta, StoryObj } from "@storybook/react";
import { HeaderLobbyPlayer } from "./HeaderLobbyPlayer";
import OpenController from "@/decorators/OpenController";

const meta: Meta<typeof HeaderLobbyPlayer> = {
  component: HeaderLobbyPlayer,
  render: (args) => {
    return (
      <OpenController
        renderContent={(isVisible) => (
          <HeaderLobbyPlayer {...args} isVisible={isVisible} />
        )}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    gameCode: "hU1d74",
    players: 5,
    isVisible: true,
  },
};
