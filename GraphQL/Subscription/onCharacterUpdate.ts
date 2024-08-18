import { gql } from "@apollo/client";

export const ON_CHARACTER_UPDATE = gql`
  subscription OnCharacterUpdate($gameCode: String!) {
    onCharacterUpdate(gameCode: $gameCode) {
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
