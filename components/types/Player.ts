import { Character } from "./Characters";
import { Role } from "./Role";

export type Player = {
  id: string;
  character: Character;
  role?: Role;
  isDead: boolean;
  nickname: string;
};
