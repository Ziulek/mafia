import { ExtraRole } from "./ExtraRole";

export type GameRules = {
  numberOfMafia: number;
  extraRoles?: ExtraRole[];
  revealRolesAfterDeath?: boolean;
};
