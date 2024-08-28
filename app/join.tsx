import { useEffect, useState, type ReactElement } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useMutation } from "@apollo/client";
import { JOIN_GAME } from "@/GraphQL/Mutations/JoinGame";
import JoinScreen from "@/components/screens/JoinScreen/JoinScreen";
import getNickname from "@/helpers/getNickname";
import correctGameCode from "@/helpers/correctGameCode";
import Toast from "react-native-toast-message";

export default (): ReactElement => {
  const router = useRouter();
  const { playerId } = useLocalSearchParams<{ playerId: string }>();

  const [gameCode, setGameCode] = useState("");
  const [isGameCodeValid, setIsGameCodeValid] = useState<boolean>(true);
  const [gameCodeMessage, setGameCodeMessage] = useState<string>("");

  const [joinGame] = useMutation(JOIN_GAME);

  useEffect(() => {
    const { isValid, message } = correctGameCode(gameCode);
    console.log("isValid", isValid, "message", message);
    setIsGameCodeValid(isValid);
    setGameCodeMessage(message);
  }, [gameCode]);

  const handleJoinGame = async () => {
    const nickname = await getNickname();
    if (nickname) {
      joinGame({
        variables: {
          gameCode: gameCode.toUpperCase(),
          playerId: playerId,
          nickname: nickname,
        },
        onCompleted: (data) => {
          console.log("handleJoinGame:data", data);
          router.replace(
            `/game?mode=player&gameCode=${gameCode}&playerId=${playerId}`
          );
        },
        onError: (error) => {
          const errorMessage = error?.graphQLErrors?.[0]?.message || "";

          if (
            errorMessage.includes(
              "Unable to join game. The game already started"
            )
          ) {
            showGameStageErrorToast();
          } else if (errorMessage.includes("Game does not exist")) {
            showGameNotFoundToast();
          } else {
            console.error("An unexpected error occurred:", error);
          }
        },
      });
    } else {
      console.log("No nickname available, cannot join game.");
    }
  };

  const showGameNotFoundToast = () => {
    Toast.show({
      type: "customToast",
      text1: "Game does not exist",
      text2: "Try a different code",
    });
  };

  const showGameStageErrorToast = () => {
    Toast.show({
      type: "customToast",
      text1: "Game cannot be joined",
      text2: "The game already started",
    });
  };

  return (
    <JoinScreen
      onPress={handleJoinGame}
      setGameCode={setGameCode}
      gameCode={gameCode}
      gameCodeMessage={gameCodeMessage}
      isGameCodeValid={isGameCodeValid}
    />
  );
};
