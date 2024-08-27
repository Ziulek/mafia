import { gql } from "@apollo/client";

export const START_GAME = gql`
  mutation startGame(
    $gameCode: String!
    $showRolesAfterDeath: Boolean!
    $numberOfMafia: Int!
    $additionalRoles: [AdditionalRole!]!
  ) {
    startGame(
      gameCode: $gameCode
      showRolesAfterDeath: $showRolesAfterDeath
      numberOfMafia: $numberOfMafia
      additionalRoles: $additionalRoles
    ) {
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
