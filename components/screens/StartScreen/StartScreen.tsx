import { StyleSheet, TextInput } from "react-native";
import Text from "../../base/Text/Text";
import { useState } from "react";
import { View } from "tamagui";
import Button from "@/components/base/Button/Button";
import { JOIN_GAME } from "@/GraphQL/Mutations/JoinGame";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_GAME } from "@/GraphQL/Mutations/CreateGame";
import { router } from "expo-router";
import { GET_CURRENT_GAME_STATE } from "@/GraphQL/Query/GetCurrentGmaeState";

export const StartScreen = () => {
  const [currentNickname, setCurrentNickname] = useState("");
  const [playerId, setPlayerId] = useState("");
  const [currentState, setCurrentState] = useState("");
  const [gameCode, setGameCode] = useState("");
  const [hostId, setHostId] = useState("");

  // 0 = welcome screen, 1 = nickname screen, 2 = join screen, 3 = host screen, 4 = game joined, 5= game hosted

  const { data } = useQuery(GET_CURRENT_GAME_STATE, {
    variables: {
      gameCode: "XT2IBASP",
    },
  });

  console.log("Query", JSON.stringify(data, null, 2));

  const [joinGame, { error: error1 }] = useMutation(JOIN_GAME);
  const [createGame, { error: error2 }] = useMutation(CREATE_GAME);

  const handleJoinGame = async (gameCode: string, nickname: string) => {
    try {
      const { data } = await joinGame({
        variables: {
          gameCode: "XT2IBASP",
          nickname: "szlajmi223332",
          playerId: "217765463",
          // playerId: playerId.toString(),
        },
      });
      console.log("Mutation", JSON.stringify(data, null, 2));

      // Handle successful join game
    } catch (error) {
      console.error("Error joining game:", error);
      // Handle error
    }
  };

  const handleHostGame = async (hostId: any) => {
    try {
      const { data } = await createGame({
        variables: {
          hostId: hostId.toString(),
        },
      });
      console.log(data);

      // Handle successful host game
    } catch (error) {
      console.error("Error hosting game:", error);
      // Handle error
    }
  };

  return (
    <View style={styles.container}>
      {currentState === "" && (
        <View style={styles.container2}>
          <Button color="accent" onPress={() => setCurrentState("joinGame")}>
            Join Game
          </Button>
          <Button color="accent" onPress={() => setCurrentState("hostGame")}>
            Host Game
          </Button>
        </View>
      )}

      {currentState === "joinGame" && (
        <View style={styles.container2}>
          <Text size="headline" isBold={true}>
            Welcome to the Mafia Game
          </Text>
          <Text size="headline">Please enter your nickname</Text>

          <TextInput
            style={styles.input}
            onChangeText={(i) => setCurrentNickname(i)}
            value={currentNickname}
          />
          <Text size="headline">Please enter your player id</Text>

          <TextInput
            style={styles.input}
            onChangeText={(i) => setPlayerId(i)}
            value={playerId}
          />
          <Button color="accent" onPress={() => setCurrentState("joinGame2")}>
            Next
          </Button>
        </View>
      )}

      {currentState === "joinGame2" && (
        <View style={styles.container2}>
          <Text size="headline" isBold={true}>
            Enter Game Code
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(i) => setGameCode(i)}
            value={gameCode}
          />
          <Button
            color="accent"
            onPress={() => handleJoinGame(gameCode, currentNickname)}
          >
            Join Game
          </Button>
          <Button color="back" onPress={() => setCurrentState("")}>
            back
          </Button>
        </View>
      )}

      {currentState === "hostGame" && (
        <View style={styles.container2}>
          <Text size="headline" isBold={true}>
            Put Host ID Here
          </Text>

          <TextInput
            style={styles.input}
            onChangeText={(i) => setHostId(i)}
            value={hostId}
          />

          <Button color="accent" onPress={() => handleHostGame(hostId)}>
            Host Game
          </Button>
          <Button color="back" onPress={() => setCurrentState("")}>
            back
          </Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 10,
    padding: 10,
    margin: 10,
    width: "100%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
});
