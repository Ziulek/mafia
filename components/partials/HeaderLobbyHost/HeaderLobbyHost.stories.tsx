import type { Meta, StoryObj } from "@storybook/react";
import { HeaderLobbyHost } from "./HeaderLobbyHost";
import OpenController from "@/decorators/OpenController";

const meta: Meta<typeof HeaderLobbyHost> = {
  component: HeaderLobbyHost,
  render: (args) => {
    return (
      <OpenController
        renderContent={(isVisible) => (
          <HeaderLobbyHost {...args} isVisible={isVisible} />
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
  },
};
