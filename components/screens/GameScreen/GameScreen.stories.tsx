import type { Meta, StoryObj } from "@storybook/react";
import StoryDecorator from "@/decorators/StoryDecorator";
import { GameScreen } from "./GameScreen";
import { Character } from "@/components/types/Characters";
import { Role } from "@/components/types/Role";
import { GameState } from "@/components/types/GameState";

const meta: Meta<typeof GameScreen> = {
  component: GameScreen,
  decorators: [StoryDecorator],
  argTypes: {
    mode: {
      options: ["host", "player"],
      control: { type: "radio" },
    },
    gameState: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const playerID = "1";

const players = [
  {
    id: "1",
    character: "M1" as Character,
    isDead: false,
    nickname: "Player1",
  },
  {
    id: "2",
    character: "M2" as Character,
    role: "mafia" as Role,
    isDead: false,
    nickname: "Player2",
  },
  {
    id: "3",
    character: "M3" as Character,
    role: "detective" as Role,
    isDead: false,
    nickname: "Player3",
  },
  {
    id: "4",
    character: "M4" as Character,
    role: "police" as Role,
    isDead: false,
    nickname: "Player4",
  },
  {
    id: "5",
    character: "F1" as Character,
    role: "detective" as Role,
    isDead: false,
    nickname: "Player5",
  },
  {
    id: "6",
    character: "F2" as Character,
    role: "police" as Role,
    isDead: false,
    nickname: "Player6",
  },
  {
    id: "7",
    character: "F3" as Character,
    role: "detective" as Role,
    isDead: false,
    nickname: "Player7",
  },
  {
    id: "8",
    character: "F4" as Character,
    role: "mafia" as Role,
    isDead: false,
    nickname: "Player8",
  },
];

const gameState: GameState = {
  players,
  stage: "waitingForPlayers",
  gameRules: {
    numberOfMafia: 2,
    extraRoles: ["detective"],
    revealRolesAfterDeath: true,
  },
  gameCode: "1234",
  winner: undefined,
};

export const HostLobby: Story = {
  args: {
    mode: "host",
    gameState: {
      players,
      stage: "waitingForPlayers",
      gameRules: {
        numberOfMafia: 2,
        extraRoles: ["detective"],
        revealRolesAfterDeath: true,
      },
      gameCode: "GHDPS07P",
      winner: undefined,
    },
  },
};

export const HostGame: Story = {
  args: {
    mode: "host",
    gameState: {
      players,
      stage: "game",
      gameRules: {
        numberOfMafia: 2,
        extraRoles: ["detective"],
        revealRolesAfterDeath: true,
      },
      gameCode: "GHDPS07P",
      winner: undefined,
    },
  },
};

export const HostResult: Story = {
  args: {
    mode: "host",
    gameState: {
      players,
      stage: "result",
      gameRules: {
        numberOfMafia: 2,
        extraRoles: ["detective"],
        revealRolesAfterDeath: true,
      },
      gameCode: "GHDPS07P",
      winner: "police",
    },
  },
};

export const PlayerLobby: Story = {
  args: {
    mode: "player",
    playerID,
    gameState: {
      players,
      stage: "waitingForPlayers",
      gameRules: {
        numberOfMafia: 2,
        extraRoles: ["detective"],
        revealRolesAfterDeath: true,
      },
      gameCode: "GHDPS07P",
      winner: undefined,
    },
  },
};

export const PlayerGame: Story = {
  args: {
    mode: "player",
    playerID,
    gameState: {
      players,
      stage: "game",
      gameRules: {
        numberOfMafia: 2,
        extraRoles: ["detective"],
        revealRolesAfterDeath: true,
      },
      gameCode: "GHDPS07P",
      winner: undefined,
    },
  },
};

export const PlayerResult: Story = {
  args: {
    mode: "player",
    playerID,
    gameState: {
      players,
      stage: "result",
      gameRules: {
        numberOfMafia: 2,
        extraRoles: ["detective"],
        revealRolesAfterDeath: true,
      },
      gameCode: "GHDPS07P",
      winner: "mafia",
    },
  },
};
