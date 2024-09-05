import type { Meta, StoryObj } from "@storybook/react";
import StoryDecorator from "@/decorators/StoryDecorator";
import { GameScreen } from "./GameScreen";
import { Character } from "@/components/types/Characters";
import { Role } from "@/components/types/Role";
import { GameState } from "@/components/types/GameState";
import { Player } from "@/components/types/Player";

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

const players: Player[] = [
  {
    id: "1324",
    character: "M1",
    role: "police",
    nickname: "Player1",
    isDead: false,
  },
  {
    id: "2567",
    character: "M2",
    role: "mafia",
    nickname: "Player2",
    isDead: false,
  },
  {
    id: "3978",
    character: "M3",
    role: "mafia",
    nickname: "Player3",
    isDead: false,
  },
  {
    id: "4678",
    character: "M4",
    role: "mafia",
    nickname: "Player4",
    isDead: true,
  },
  {
    id: "5097",
    character: "F1",
    role: "mafia",
    nickname: "Player5",
    isDead: false,
  },
  {
    id: "6456",
    character: "F2",
    role: "mafia",
    nickname: "Player6",
    isDead: false,
  },
  {
    id: "7867",
    character: "F3",
    role: "mafia",
    nickname: "Player7",
    isDead: false,
  },
  {
    id: "8945",
    character: "F4",
    role: "mafia",
    nickname: "Player8",
    isDead: false,
  },
  {
    id: "9201",
    character: "M4",
    role: "police",
    nickname: "Player9",
    isDead: false,
  },
  {
    id: "1043",
    character: "M4",
    role: "police",
    nickname: "Player10",
    isDead: false,
  },
  {
    id: "1187",
    character: "F4",
    role: "police",
    nickname: "Player11",
    isDead: false,
  },
  {
    id: "1345",
    character: "F4",
    role: "police",
    nickname: "Player12",
    isDead: false,
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
