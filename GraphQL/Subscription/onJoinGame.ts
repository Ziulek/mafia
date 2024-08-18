import { gql } from "@apollo/client";

export const ON_JOIN_GAME = gql`
  subscription OnJoinGame($gameCode: String!) {
    onJoinGame(gameCode: $gameCode) {
      gameCode
      gameState {
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
  }
`;
