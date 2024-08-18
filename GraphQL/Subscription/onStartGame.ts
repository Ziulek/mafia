import { gql } from "@apollo/client";

export const ON_START_GAME = gql`
  subscription OnStartGame($gameCode: String!) {
    onStartGame(gameCode: $gameCode) {
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
