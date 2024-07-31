import { gql } from "@apollo/client";

export const KILL_PLAYER = gql`
  mutation killPlayer(
    $gameCode: String!
    $playerId: String!
  ) {
    joinGame(gameCode: $gameCode, playerId: $playerId) {
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