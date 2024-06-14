import type { Meta, StoryObj } from "@storybook/react";
import { HeaderLobbyHost } from "./HeaderLobbyHost";

const meta: Meta<typeof HeaderLobbyHost> = {
  component: HeaderLobbyHost,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    gameCode: "hU1d74",
    players: 5,
  },
};
