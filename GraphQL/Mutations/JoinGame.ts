import { gql } from "@apollo/client";

export const JOIN_GAME = gql`
  mutation joinGame(
    $gameCode: String!
    $nickname: String!
    $playerId: String!
  ) {
    joinGame(gameCode: $gameCode, nickname: $nickname, playerId: $playerId) {
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
