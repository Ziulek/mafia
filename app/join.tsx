import { useState, type ReactElement } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useMutation } from "@apollo/client";
import { JOIN_GAME } from "@/GraphQL/Mutations/JoinGame";
import JoinScreen from "@/components/screens/JoinScreen/JoinScreen";

export default (): ReactElement => {
  const router = useRouter();
  const { playerId } = useLocalSearchParams<{ playerId: string }>();
  const { nickname } = useLocalSearchParams<{ nickname: string }>();
  const [gameCode, setGameCode] = useState("");
  // const [nickname, setNickname] = useState("");

  const [joinGame] = useMutation(JOIN_GAME);

  const handleJoinGame = () => {
    joinGame({
      variables: {
        gameCode: gameCode,
        playerId: playerId,
        nickname: nickname,
      },
      onCompleted: (data) => {
        console.log("handleJoinGame:data", data);
        router.replace(
          `game?mode=player&gameCode=${gameCode}&playerId=${playerId}`
        );
      },
      onError: (error) => {
        console.log("handleJoinGame:error", error);
        router.replace(`error`);
      },
    });
  };

  return (
    <JoinScreen
      onPress={handleJoinGame}
      setGameCode={setGameCode}
      gameCode={gameCode}
    />
  );
};

{
  /* <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>set Nickname</Text>
      <TextInput onChangeText={(i) => setNickname(i)} value={nickname} />

      <Text>Enter Game Code</Text>
      <TextInput onChangeText={(i) => setGameCode(i)} value={gameCode} />

      <Button color="accent" onPress={handleJoinGame}>
        Continue to Game(Player)
      </Button>
    </View> */
}
