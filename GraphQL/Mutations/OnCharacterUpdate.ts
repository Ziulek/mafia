import { gql } from "@apollo/client";

export const ON_CHARACTER_UPDATE = gql`
  mutation onCharacterUpdate(
    $gameCode: String!
    $playerId: String!
    $newCharacter: Character
  ) {
    joinGame(gameCode: $gameCode, playerId: $playerId, newCharacter: $newCharacter) {
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