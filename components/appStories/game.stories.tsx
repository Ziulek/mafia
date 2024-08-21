// import React from "react";
// import { Meta, Story } from "@storybook/react";
// import Game from "@/app/game"; // Ensure this path is correct
// import { GameState } from "../types/GameState"; // Correct path for GameState
// import { Player } from "../types/Player"; // Correct path for Player
// import { Character } from "../types/Characters"; // Correct path for Character
// import { Role } from "../types/Role"; // Correct path for Role
// import { GameRules } from "../types/GameRules"; // Correct path for GameRules
// import { ExtraRole } from "../types/ExtraRole"; // Correct path for ExtraRole

// // Define metadata for the Storybook story
// const meta: Meta<typeof Game> = {
//   title: "Game",
//   component: Game,
// };

// export default meta;

// // Create a template for the Game component
// const Template: Story<React.ComponentProps<typeof Game>> = (args: any) => (
//   <Game {...args} />
// );

// // Default story for the Game component
// export const Default = Template.bind({});
// Default.args = {
//   mode: "player", // Use a valid mode
//   gameCode: "ABC123",
//   playerId: "1212",
//   gameState: {
//     gameCode: "ABC123",
//     players: [
//       {
//         id: "player-1",
//         character: "M1", // Valid Character type
//         role: "mafia" as Role, // Valid Role type
//         isDead: false,
//         nickname: "Alice",
//       },
//       {
//         id: "player-2",
//         character: "F2", // Valid Character type
//         role: "police" as Role, // Valid Role type
//         isDead: false,
//         nickname: "Bob",
//       },
//     ] as Player[], // Ensure correct typing for players
//     stage: "game", // Set the current stage
//     gameRules: {
//       numberOfMafia: 2, // Required property
//       extraRoles: ["detective", "medic"], // Optional property
//       revealRolesAfterDeath: true, // Optional property
//     } as GameRules, // Ensure correct typing for game rules
//     winner: undefined, // Optional winner property
//   } as GameState, // Ensure correct typing for game state
// };

// // Loading state story
// export const Loading = Template.bind({});
// Loading.args = {
//   mode: "player",
//   gameCode: "ABC123",
//   playerId: "player-1",
//   loading: true, // Mock loading prop
// };

// // Error state story
// export const ErrorState = Template.bind({});
// ErrorState.args = {
//   mode: "player",
//   gameCode: "ABC123",
//   playerId: "player-1",
//   error: { message: "Failed to fetch game data." }, // Mock error prop
// };

// // Game State Example
// export const GameStateExample = Template.bind({});
// GameStateExample.args = {
//   mode: "player",
//   gameCode: "ABC123",
//   playerId: "host-1",
//   gameState: {
//     gameCode: "ABC123",
//     players: [
//       {
//         id: "player-1",
//         character: "M1", // Valid Character type
//         role: "mafia" as Role, // Valid Role type
//         isDead: false,
//         nickname: "Alice",
//       },
//       {
//         id: "player-2",
//         character: "F2", // Valid Character type
//         role: "police" as Role, // Valid Role type
//         isDead: true,
//         nickname: "Bob",
//       },
//     ] as Player[], // Ensure correct typing for players
//     stage: "game", // Set the current stage
//     gameRules: {
//       numberOfMafia: 2, // Required property
//       extraRoles: ["detective", "medic"], // Optional property
//       revealRolesAfterDeath: true, // Optional property
//     } as GameRules, // Ensure correct typing for game rules
//     winner: undefined, // Optional winner property
//   } as GameState, // Ensure correct typing for game state
// };

// // Interactions Example
// export const GameInteractions = Template.bind({});
// GameInteractions.args = {
//   mode: "player",
//   gameCode: "ABC123",
//   playerId: "host-1",
//   gameState: {
//     gameCode: "ABC123",
//     players: [
//       {
//         id: "player-1",
//         character: "M1", // Valid Character type
//         role: "mafia" as Role, // Valid Role type
//         isDead: false,
//         nickname: "Alice",
//       },
//       {
//         id: "player-2",
//         character: "F2", // Valid Character type
//         role: "police" as Role, // Valid Role type
//         isDead: false,
//         nickname: "Bob",
//       },
//     ] as Player[],
//     stage: "waitingForPlayers",
//     gameRules: {
//       numberOfMafia: 2, // Required property
//       extraRoles: [], // Optional property
//       revealRolesAfterDeath: false, // Optional property
//     } as GameRules,
//     winner: undefined, // No winner at this stage
//   } as GameState,
//   onStartGame: () => console.log("Game started!"),
//   onKickPlayer: (playerId: string) => console.log(`Player ${playerId} kicked!`),
//   onKillPlayer: (playerId: string) => console.log(`Player ${playerId} killed!`),
//   onUpdateGameRules: (newRules: any) =>
//     console.log(`Game rules updated: ${JSON.stringify(newRules)}`),
//   onCharacterUpdate: (newCharacter: any) =>
//     console.log(`Character updated: ${newCharacter}`),
// };
