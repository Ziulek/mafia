import { gql } from "@apollo/client";

export const ON_KILL_PLAYER = gql`
  subscription OnKillPlayer($gameCode: String!) {
    onKillPlayer(gameCode: $gameCode) {
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
