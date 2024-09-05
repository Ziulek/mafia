import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import OpenController from "@/decorators/OpenController";

const meta: Meta<typeof Header> = {
  component: Header,
  argTypes: {
    gameStage: {
      options: ["waitingForPlayers", "result", "game"],
      control: { type: "select" },
    },

    players: {
      control: { type: "number" },
      defaultValue: 5,
    },

    isSwitchOn: {
      control: { type: "boolean" },
      defaultValue: true,
    },

    winner: {
      options: ["mafia", "police"],
      control: { type: "radio" },
    },
  },
  // render: (args) => {
  //   return (
  //     <OpenController
  //       renderContent={(isVisible) => (
  //         <Header {...args} isVisible={isVisible} />
  //       )}
  //     />
  //   );
  // },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Host: Story = {
  args: {
    mode: "host",
    gameStage: "waitingForPlayers",
    players: 5,
    gameCode: "ABC123",
    isSwitchOn: true,
    numberOfMafia: 3,
    additionalRoles: [],
  },
};

export const Player: Story = {
  args: {
    mode: "player",
    gameStage: "waitingForPlayers",
    players: 5,
    gameCode: "XYZ789",
    onHeaderHeightChange: (height: number) => console.log(height),
  },
};

export const Winner: Story = {
  args: {
    mode: "host",
    gameStage: "result",
    winner: "mafia",
    onHeaderHeightChange: (height: number) => console.log(height),
  },
};
