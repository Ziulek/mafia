import Header from "@/components/base/Header/Header";
import { StyleSheet, View } from "react-native";
import Text from "../../base/Text/Text";

type HeaderLobbyPlayerProps = {
  players: number;
  gameCode: string;
  isVisible: boolean;
};

export const HeaderLobbyPlayer = ({
  players,
  gameCode,
  isVisible,
}: HeaderLobbyPlayerProps) => {
  return (
    <Header isVisible={isVisible}>
      <View style={styles.container}>
        <View style={styles.inlineText}>
          <Text size="headline">Game Code: </Text>
          <Text size="headline" isBold={true}>
            {gameCode}
          </Text>
        </View>
        <View style={styles.inlineText}>
          <Text size="headline">Players: </Text>
          <Text size="headline" isBold={true}>
            {players.toString()}
          </Text>
        </View>
        <View style={styles.waitingPlayersSpace}>
          <Text size="headline" isBold={true}>
            Waiting for players
          </Text>
        </View>
      </View>
    </Header>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 5,

    alignItems: "center",
    width: "100%",
  },
  inlineText: {
    flexDirection: "row",
    alignItems: "center",
  },
  waitingPlayersSpace: {
    marginTop: 30,
  },
});
