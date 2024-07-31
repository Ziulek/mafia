import { GameRules } from "./GameRules";
import { Player } from "./Player";

export type GameState = {
  players: Player[];
  stage: "waitingForPlayers" | "game" | "result";
  gameRules: GameRules;
  gameCode: string;
  winner?: "mafia" | "police";
};
