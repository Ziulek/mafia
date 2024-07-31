import { gql } from "@apollo/client";

export const UPDATE_GAME_RULES = gql`
  mutation updateGameRules($gameCode: String!, $gameRules: GameRulesInput!) {
    updateGameRules(gameCode: $gameCode, gameRules: $gameRules) {
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
