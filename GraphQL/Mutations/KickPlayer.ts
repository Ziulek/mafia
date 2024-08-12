import { gql } from "@apollo/client";

export const KICK_PLAYER = gql`
  mutation kickPlayer($gameCode: String!, $playerId: String!) {
    kickPlayer(gameCode: $gameCode, playerId: $playerId) {
      gameCode
      hostId
      stage
      winner
      gameRules {
        additionalRoles
        numberOfMafia
        showRolesAfterDeath
      }
      players {
        character
        role
        nickname
        isDead
        id
      }
    }
  }
`;
