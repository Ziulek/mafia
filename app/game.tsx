import type { ReactElement } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_CURRENT_GAME_STATE } from "@/GraphQL/Query/GetCurrentGmaeState";
import GameScreen from "@/components/screens/GameScreen/GameScreen";
import { useLocalSearchParams } from "expo-router";
import { KICK_PLAYER } from "@/GraphQL/Mutations/KickPlayer";
import { ON_CHARACTER_UPDATE } from "@/GraphQL/Mutations/OnCharacterUpdate";
import { UPDATE_GAME_RULES } from "@/GraphQL/Mutations/UpdateGameRules";
import { KILL_PLAYER } from "@/GraphQL/Mutations/KillPlayer";
import { START_GAME } from "@/GraphQL/Mutations/StartGame";
import { ActivityIndicator, View, Text } from "react-native";

export default (): ReactElement => {
  const tempGameCode = "XT2IBASP";
  const playerId = "2137";

  const { data, loading, error } = useQuery(GET_CURRENT_GAME_STATE, {
    variables: {
      gameCode: tempGameCode,
    },
  });

  const { mode } = useLocalSearchParams<{ mode: "host" | "player" }>();
  const [startGame] = useMutation(START_GAME);
  const [killPlayer] = useMutation(KILL_PLAYER);
  const [kickPlayer] = useMutation(KICK_PLAYER);
  const [updateGameRules] = useMutation(UPDATE_GAME_RULES);
  const [onCharacterUpdate] = useMutation(ON_CHARACTER_UPDATE);

  if (mode === undefined) {
    throw new Error("mode is undefined");
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  console.log("Query", JSON.stringify(data, null, 2));

  return (
    <GameScreen
      gameState={data?.getCurrentGameState}
      mode={mode}
      playerID={playerId}
      onNewGame={() => {}}
      onStartGame={() => {
        startGame({
          variables: {
            gameCode: tempGameCode,
          },
        });
      }}
      onKillPlayer={(playerId) => {
        console.log("player object from onKillPlayer: ", playerId);
        killPlayer({
          variables: { gameCode: tempGameCode, playerId },
        });
      }}
      onKickPlayer={(playerId) => {
        console.log("player object from onKickPlayer: ", playerId);
        kickPlayer({
          variables: { gameCode: tempGameCode, playerId },
        });
      }}
      onUpdateGameRules={(newRules) => {
        updateGameRules({
          variables: { gameCode: tempGameCode, gameRules: newRules },
        });
      }}
      onCharacterUpdate={(newCharacter) => {
        onCharacterUpdate({
          variables: {
            gameCode: tempGameCode,
            playerId: playerId,
            newCharacter: newCharacter,
          },
        });
      }}
    />
  );
};
