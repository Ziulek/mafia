import type { ReactElement } from "react";
import { useRouter } from "expo-router";
import generateId from "@/helpers/generateId";
import { CREATE_GAME } from "@/GraphQL/Mutations/CreateGame";
import { useMutation } from "@apollo/client";
import JoinOrHostScreen from "@/components/screens/JoinOrHostScreen/JoinOrHostScreen";

export default (): ReactElement => {
  const router = useRouter();
  const playerId = generateId();
  const [createGame] = useMutation(CREATE_GAME);

  console.log("playerId", playerId);

  const handleCreateGame = () => {
    createGame({
      variables: {
        hostId: playerId,
      },
      onCompleted: (data) => {
        console.log("handleCreateGame:data", data);
        router.replace(`/game?mode=host&gameCode=${data.createGame.gameCode}`);
      },
      onError: (error) => {
        console.log("handleCreateGame:error", error);
        const errorMessage = encodeURIComponent(error.message);
        router.replace(`/error?errorMessage={${errorMessage}}`);
      },
    });
  };

  return (
    <JoinOrHostScreen
      onJoinPress={() => router.push(`/join?playerId=${playerId}`)}
      onHostPress={handleCreateGame}
    />
  );
};
