import { gql } from "@apollo/client";

export const ON_KICK_PLAYER = gql`
  subscription OnKickPlayer($gameCode: String!) {
    onKickPlayer(gameCode: $gameCode) {
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
