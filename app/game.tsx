import type { ReactElement } from "react";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, View, Text } from "react-native";
import GameScreen from "@/components/screens/GameScreen/GameScreen";
import { useMutation, useQuery, useSubscription } from "@apollo/client";
import { GET_CURRENT_GAME_STATE } from "@/GraphQL/Query/GetCurrentGameState";
import { KICK_PLAYER } from "@/GraphQL/Mutations/KickPlayer";
import { CHARACTER_UPDATE } from "@/GraphQL/Mutations/CharacterUpdate";
import { UPDATE_GAME_RULES } from "@/GraphQL/Mutations/UpdateGameRules";
import { KILL_PLAYER } from "@/GraphQL/Mutations/KillPlayer";
import { START_GAME } from "@/GraphQL/Mutations/StartGame";
import { ON_JOIN_GAME } from "@/GraphQL/Subscription/onJoinGame";
import { ON_START_GAME } from "@/GraphQL/Subscription/onStartGame";
import { ON_KILL_PLAYER } from "@/GraphQL/Subscription/onKillPlayer";
import { ON_KICK_PLAYER } from "@/GraphQL/Subscription/onKickPlayer";
import { ON_CHARACTER_UPDATE } from "@/GraphQL/Subscription/onCharacterUpdate";
import SplashScreen from "@/components/screens/SplashScreen/SplashScreen";

export default (): ReactElement => {
  const { mode } = useLocalSearchParams<{ mode: "host" | "player" }>();
  const { gameCode } = useLocalSearchParams<{ gameCode: string }>();
  const { playerId } = useLocalSearchParams<{ playerId: string }>();

  const [startGame] = useMutation(START_GAME);
  const [killPlayer] = useMutation(KILL_PLAYER);
  const [kickPlayer] = useMutation(KICK_PLAYER);
  const [updateGameRules] = useMutation(UPDATE_GAME_RULES);
  const [characterUpdate] = useMutation(CHARACTER_UPDATE);

  console.log("kodzik", gameCode);

  const { data, loading, error } = useQuery(GET_CURRENT_GAME_STATE, {
    variables: {
      gameCode,
    },
  });

  const { data: joinGameData, error: joinGameError } = useSubscription(
    ON_JOIN_GAME,
    {
      variables: {
        gameCode,
      },
      onData(options) {
        console.log("onJoinGame Data", options);
      },
      onError(error) {
        console.log("onJoinGame Error", error);
      },
    }
  );

  const { data: startGameData, error: startGameError } = useSubscription(
    ON_START_GAME,
    {
      variables: {
        gameCode,
      },
      onData(options) {
        console.log("onStartGame Data", options);
      },
      onError(error) {
        console.log("onStartGame Error", error);
      },
    }
  );

  const { data: killPlayerData, error: killPlayerError } = useSubscription(
    ON_KILL_PLAYER,
    {
      variables: {
        gameCode,
      },
      onData(options) {
        console.log("onKillPlayer Data", options);
      },
      onError(error) {
        console.log("onKillPlayer Error", error);
      },
    }
  );

  const { data: kickPlayerData, error: kickPlayerError } = useSubscription(
    ON_KICK_PLAYER,
    {
      variables: {
        gameCode,
      },
      onData(options) {
        console.log("onKickPlayer Data", options);
      },
      onError(error) {
        console.log("onKickPlayer Error", error);
      },
    }
  );

  const { data: characterUpdateData, error: characterUpdateError } =
    useSubscription(ON_CHARACTER_UPDATE, {
      variables: {
        gameCode,
      },
      onData(options) {
        console.log("onCharacterUpdate Data", options);
      },
      onError(error) {
        console.log("onCharacterUpdate Error", error);
      },
    });

  const correctData = data?.getCurrentGameState;

  if (mode === undefined) {
    throw new Error("mode is undefined");
  }

  if (loading) {
    return <SplashScreen simpleLoader={true} />;
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  console.log("Query", JSON.stringify(data, null, 2));
  console.log("correctData", JSON.stringify(correctData, null, 2));

  return (
    <GameScreen
      gameState={correctData}
      mode={mode}
      playerID={playerId}
      onNewGame={() => {}}
      onStartGame={() => {
        startGame({
          variables: {
            gameCode: correctData.gameCode,
          },
        });
      }}
      onKillPlayer={(playerId) => {
        console.log("player object from onKillPlayer: ", playerId);
        killPlayer({
          variables: { gameCode: correctData.gameCode, playerId },
        });
      }}
      onKickPlayer={(playerId) => {
        console.log("player object from onKickPlayer: ", playerId);
        kickPlayer({
          variables: { gameCode: correctData.gameCode, playerId },
        });
      }}
      onUpdateGameRules={(newRules) => {
        updateGameRules({
          variables: { gameCode: correctData.gameCode, gameRules: newRules },
        });
      }}
      onCharacterUpdate={(newCharacter) => {
        characterUpdate({
          variables: {
            gameCode: correctData.gameCode,
            playerId,
            newCharacter: newCharacter,
          },
        });
      }}
    />
  );
};
