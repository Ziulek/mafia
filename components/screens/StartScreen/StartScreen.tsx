import { StyleSheet, TextInput } from "react-native";
import Text from "../../base/Text/Text";
import { useState } from "react";
import { View } from "tamagui";
import Button from "@/components/base/Button/Button";
import { JOIN_GAME } from "@/GraphQL/Mutations/JoinGame";
import { useMutation } from "@apollo/client";
import { CREATE_GAME } from "@/GraphQL/Mutations/CreateGame";

export const StartScreen = () => {
  const [currentNickname, setCurrentNickname] = useState("");
  const [playerId, setPlayerId] = useState("");
  const [currentState, setCurrentState] = useState("");
  const [gameCode, setGameCode] = useState("");
  const [hostId, setHostId] = useState("");
  // 0 = welcome screen, 1 = nickname screen, 2 = join screen, 3 = host screen, 4 = game joined, 5= game hosted

  const [joinGame, { error: error1 }] = useMutation(JOIN_GAME);
  const [createGame, { error: error2 }] = useMutation(CREATE_GAME);

  const handleJoinGame = (gameCode: string, nickname: string) => {
    joinGame({
      variables: {
        gameCode,
        nickname,
        playerId: playerId.toString(),
      },
    });
  };

  const handleHostGame = (hostId: any) => {
    createGame({
      variables: {
        hostId: hostId.toString(),
      },
    });
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
            put hostId here
          </Text>

          <TextInput
            style={styles.input}
            onChangeText={(i) => setHostId(i)}
            value={hostId}
          />

          <Button color="accent" onPress={() => handleHostGame(hostId)}>
            HostGame
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

// {currentState === 1 && (
//   <View>
//     <Button color="accent" onPress={() => setCurrentState(2)}>
//       Join Game
//     </Button>
//     <Button color="accent" onPress={() => setCurrentState(3)}>
//       Host Game
//     </Button>
//   </View>
// )}
