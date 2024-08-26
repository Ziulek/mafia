import { ExtraRole } from "./AdditionalRole";

export type GameRules = {
  numberOfMafia: number;
  extraRoles?: ExtraRole[];
  revealRolesAfterDeath?: boolean;
};
