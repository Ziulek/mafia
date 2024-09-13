import { useEffect, useState, type ReactElement } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useMutation } from "@apollo/client";
import { JOIN_GAME } from "@/GraphQL/Mutations/JoinGame";
import JoinScreen from "@/components/screens/JoinScreen/JoinScreen";
import getNickname from "@/helpers/getNickname";
import correctGameCode from "@/helpers/correctGameCode";
import Toast from "react-native-toast-message";
import { useTranslation } from "react-i18next";

export default (): ReactElement => {
  const router = useRouter();
  const { playerId } = useLocalSearchParams<{ playerId: string }>();

  const [gameCode, setGameCode] = useState("");
  const [isGameCodeValid, setIsGameCodeValid] = useState<boolean>(true);
  const [gameCodeMessage, setGameCodeMessage] = useState<string>("");

  const [joinGame] = useMutation(JOIN_GAME);
  const { t } = useTranslation(); // Translation hook

  useEffect(() => {
    const { isValid, message } = correctGameCode(gameCode, t);
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
      text1: t("joinGame/toastGameNotFoundTitle"),
      text2: t("joinGame/toastGameNotFoundMessage"),
    });
  };

  const showGameStageErrorToast = () => {
    Toast.show({
      type: "customToast",
      text1: t("joinGame/toastGameStageErrorTitle"),
      text2: t("joinGame/toastGameStageErrorMessage"),
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
