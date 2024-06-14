import Header from "@/components/base/Header/Header";
import { Text, View } from "react-native";

type HeaderLobbyPlayerProps = {
  players: number;
  gameCode: string;
};

export const HeaderLobbyPlayer = ({
  players,
  gameCode,
}: HeaderLobbyPlayerProps) => {
  return (
    <Header>
      <View style={{ marginVertical: 50, alignItems: "center" }}>
        <Text style={{ fontSize: 30 }}>
          Game Code:
          <Text style={{ fontSize: 30, fontWeight: "bold" }}> {gameCode}</Text>
        </Text>
        <Text style={{ fontSize: 30 }}>
          Players:
          <Text style={{ fontSize: 30, fontWeight: "bold" }}> {players}</Text>
        </Text>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Waiting for players...
        </Text>
      </View>
    </Header>
  );
};
