import type { Meta, StoryObj } from "@storybook/react";

import { HeaderLobbyPlayer } from "./HeaderLobbyPlayer";

const meta: Meta<typeof HeaderLobbyPlayer> = {
  component: HeaderLobbyPlayer,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    gameCode: "hU1d74",
    players: 5,
  },
};
