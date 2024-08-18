import { gql } from "@apollo/client";

export const CHARACTER_UPDATE = gql`
  mutation characterUpdate(
    $gameCode: String!
    $playerId: String!
    $newCharacter: Character
  ) {
    characterUpdate(
      gameCode: $gameCode
      playerId: $playerId
      newCharacter: $newCharacter
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
