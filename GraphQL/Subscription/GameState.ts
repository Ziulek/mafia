import { gql } from "@apollo/client";

export const GAME_STATE_SUBSCRIPTION = gql`
  subscription GameStateSubscription($gameCode: String!) {
    onJoinGame(gameCode: $gameCode) {
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
    # onCharacterUpdate(gameCode: $gameCode) {
  }
`;
