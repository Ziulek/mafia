import type { ReactElement } from "react";
import { View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import Button from "@/components/base/Button/Button";
import generateId from "@/helpers/generateId";
import { CREATE_GAME } from "@/GraphQL/Mutations/CreateGame";
import { useMutation } from "@apollo/client";
import JoinOrHostScreen from "@/components/screens/JoinOrHostScreen/JoinOrHostScreen";

export default (): ReactElement => {
  const router = useRouter();
  const playerId = generateId();
  const [createGame] = useMutation(CREATE_GAME);
  const { nickname } = useLocalSearchParams<{ nickname: string }>();

  console.log("playerId", playerId);

  const handleCreateGame = async () => {
    try {
      const { data } = await createGame({ variables: { hostId: playerId } });
      if (data) {
        const gameCode = data.createGame.gameCode; // Access the gameCode or other data here
        router.replace(`/game?mode=host&gameCode=${gameCode}`);
      }
    } catch (error) {
      console.error("Error creating game:", error);
    }
  };

  return (
    <JoinOrHostScreen
      onJoinPress={() =>
        router.push(`/join?playerId=${playerId}&nickname=${nickname}`)
      }
      onHostPress={handleCreateGame}
    />
  );
};

// <View
// style={{
//   flex: 1,
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   gap: 15,
// }}
// >
// <Button color="accent" onPress={handleCreateGame}>
//   Continue to game (host)
// </Button>
// <Button
//   color="accent"
//   onPress={() => router.replace(`join?playerId=${playerId}`)}
// >
//   Continue to Join
// </Button>
// </View>
