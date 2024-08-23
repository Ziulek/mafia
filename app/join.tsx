import { useEffect, useState, type ReactElement } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useMutation } from "@apollo/client";
import { JOIN_GAME } from "@/GraphQL/Mutations/JoinGame";
import JoinScreen from "@/components/screens/JoinScreen/JoinScreen";
import getNickname from "@/helpers/getNickname";
import correctGameCode from "@/helpers/correctGameCode";

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
          const errorMessage = encodeURIComponent(error.message);
          router.replace(`/error?errorMessage=${errorMessage}`);
        },
      });
    } else {
      console.log("No nickname available, cannot join game.");
      // Optionally handle this case (e.g., show an error message)
    }
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
