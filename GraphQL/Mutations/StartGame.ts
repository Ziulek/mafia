import { gql } from "@apollo/client";

export const START_GAME = gql`
  mutation startGame($gameCode: String!) {
    startGame(gameCode: $gameCode) {
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
