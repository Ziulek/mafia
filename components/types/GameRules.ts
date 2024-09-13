import { AdditionalRole } from "./AdditionalRole";

export type GameRules = {
  numberOfMafia: number;
  extraRoles?: AdditionalRole[];
  revealRolesAfterDeath?: boolean;
};
