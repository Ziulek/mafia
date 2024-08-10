import { gql } from "@apollo/client";

export const GET_CURRENT_GAME_STATE = gql`
  query getCurrentGameState($gameCode: String!) {
    getCurrentGameState(gameCode: $gameCode) {
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
