import { gql } from "@apollo/client";

export const CREATE_GAME = gql`
  mutation createGame($hostId: String!) {
    createGame(hostId: $hostId) {
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
